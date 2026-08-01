// HGS Plays Portfolio Navigator — vanilla JS SPA
// Rebuilt from docs/HGS Web Application Design-v7/HGS Plays Navigator.dc.html

(function () {
  "use strict";

  const root = document.getElementById("app-root");
  const state = { view: "home", pfId: null, spId: null, pjId: null };

  // ---- build derived tree (same shape as the original DCLogic constructor) ----
  const tree = DATA.map((pf) => {
    const strategics = pf.strategics.map((sp) => {
      const projects = sp.projects.map((pj, i) => ({
        ...pj,
        id: pj.name,
        num: String(i + 1).padStart(2, "0"),
        step: "Step " + (i + 1) + " of 6 · " + sp.flow[i],
        pfId: pf.id,
        spId: sp.id,
        pfName: pf.name,
        spName: sp.name,
      }));
      return {
        ...sp,
        pfId: pf.id,
        pfName: pf.name,
        projects,
        flowSteps: sp.flow.map((f, i) => ({
          num: String(i + 1).padStart(2, "0"),
          label: f,
          hasNext: i < sp.flow.length - 1,
        })),
      };
    });
    return {
      ...pf,
      strategics,
      stratGridCols:
        pf.id === "platforms"
          ? "repeat(4,minmax(0,1fr))"
          : "repeat(auto-fill,minmax(430px,1fr))",
    };
  });

  const pillStyle = (i) =>
    i === 0 ? { color: "#15283C", bg: "#ABCF02" } : { color: "#FFFFFF", bg: "#356094" };

  tree.forEach((pf) => {
    pf.heroCrumbs = [];
    pf.strategics.forEach((sp) => {
      sp.heroCrumbs = [{ name: pf.name, pfId: pf.id, spId: null, ...pillStyle(0) }];
      sp.projects.forEach((pj) => {
        pj.heroCrumbs = [
          { name: pf.name, pfId: pf.id, spId: null, ...pillStyle(0) },
          { name: sp.name, pfId: pf.id, spId: sp.id, ...pillStyle(1) },
        ];
      });
    });
  });

  const navItems = tree.map((pf) => ({ name: pf.name, pfId: pf.id }));
  const spAll = tree.flatMap((pf) => pf.strategics);

  const pfAccent = { interactions: "171,207,2", platforms: "61,155,153", operations: "154,172,148" };
  const pfAccentSolid = { interactions: "#ABCF02", platforms: "#3D9B99", operations: "#9AAC94" };
  const cellsAll = [];
  for (let r = 0; r < 6; r++) {
    for (const sp of spAll) {
      const pj = sp.projects[r];
      const pf = tree.find((p) => p.id === sp.pfId);
      const idxInPf = pf.strategics.indexOf(sp);
      const isFirst = idxInPf === 0;
      const isLast = idxInPf === pf.strategics.length - 1;
      const isLastRow = r === 5;
      const rgb = pfAccent[pf.id];
      const solid = pfAccentSolid[pf.id];
      const cell = {
        ...pj,
        tileBg: `rgba(${rgb},0.09)`,
        borderLeft: isFirst ? `2px solid ${solid}` : "1px solid #DCE6ED",
        borderRight: isLast ? `2px solid ${solid}` : "1px solid #DCE6ED",
        borderBottom: isLastRow ? `2px solid ${solid}` : "1px solid #DCE6ED",
      };
      cellsAll.push(cell);
    }
  }

  // ---- navigation helpers ----
  function go(view, pfId, spId, pjId) {
    state.view = view;
    state.pfId = pfId || null;
    state.spId = spId || null;
    state.pjId = pjId || null;
    render();
    window.scrollTo(0, 0);
  }

  function findCurrent() {
    const pf = tree.find((p) => p.id === state.pfId) || null;
    const sp = pf ? pf.strategics.find((s) => s.id === state.spId) || null : null;
    const pj = sp ? sp.projects.find((p) => p.id === state.pjId) || null : null;
    return { pf, sp, pj };
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- click delegation (data-action based, no inline handlers) ----
  root.addEventListener("click", (e) => {
    const el = e.target.closest("[data-goto]");
    if (!el) return;
    const view = el.getAttribute("data-goto");
    const pfId = el.getAttribute("data-pf") || null;
    const spId = el.getAttribute("data-sp") || null;
    const pjId = el.getAttribute("data-pj") || null;
    go(view, pfId, spId, pjId);
  });

  // ---- render pieces ----
  function renderHeader() {
    return `
    <div class="hgs-header-wrap">
      <div class="hgs-header">
        <div class="logo-btn" data-goto="home">
          <img src="assets/hgs-logo-white.svg" alt="HGS">
        </div>
        <div class="divider"></div>
        <div class="spacer"></div>
        <div class="nav-items">
          ${navItems
            .map(
              (nv) =>
                `<div class="nav-item" data-goto="portfolio" data-pf="${esc(nv.pfId)}">${esc(nv.name)}</div>`
            )
            .join("")}
        </div>
        <div class="nav-badge">Internal Navigator</div>
      </div>
    </div>`;
  }

  function renderHome() {
    const [pf1, pf2, pf3] = tree;
    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/image1.svg" alt="">
        <div class="hero-inner">
          <div class="hero-eyebrow">Experience Intelligence</div>
          <h1 class="hero-title">The HGS Plays Portfolio</h1>
          <p class="hero-desc">Three portfolios, ten strategic plays, sixty project plays. Every engagement starts as a project play and proves value in 90 days.</p>
        </div>
      </div>

      <div class="matrix-panel">
        <div class="matrix-scroll">
          <div class="matrix-grid">
            <div class="matrix-label pf-label">Portfolio Plays</div>
            ${[pf1, pf2, pf3]
              .map((pf, i) => {
                const span = i === 1 ? 4 : 3;
                return `<div class="matrix-pf-cell" style="grid-column:span ${span}" data-goto="portfolio" data-pf="${esc(pf.id)}">
                  <div class="pf-name">${esc(pf.name)}</div>
                  <div class="pf-tag">${esc(pf.tag)}</div>
                </div>`;
              })
              .join("")}

            <div class="matrix-label sp-label">Strategic Plays</div>
            ${spAll
              .map(
                (sp) =>
                  `<div class="matrix-sp-cell" data-goto="strategic" data-pf="${esc(sp.pfId)}" data-sp="${esc(sp.id)}">${esc(sp.name)}</div>`
              )
              .join("")}

            <div class="matrix-label pj-label">Project Plays</div>
            ${cellsAll
              .map(
                (pj) =>
                  `<div class="matrix-pj-cell" style="background:${pj.tileBg};border-left:${pj.borderLeft};border-right:${pj.borderRight};border-bottom:${pj.borderBottom}" data-goto="project" data-pf="${esc(pj.pfId)}" data-sp="${esc(pj.spId)}" data-pj="${esc(pj.id)}">${esc(pj.name.replace(/\//g, "/​"))}</div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderCrumbs(crumbs) {
    return `<div class="crumbs">${crumbs
      .map(
        (hc) =>
          `<span class="crumb" style="color:${hc.color};background:${hc.bg}" data-goto="${hc.spId ? "strategic" : "portfolio"}" data-pf="${esc(hc.pfId)}" ${hc.spId ? `data-sp="${esc(hc.spId)}"` : ""}>${esc(hc.name)}</span>`
      )
      .join("")}</div>`;
  }

  function renderPortfolio(pf) {
    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/image2.svg" alt="">
        <div class="hero-inner">
          ${renderCrumbs(pf.heroCrumbs)}
          <h1 class="hero-title" style="font-size:30px">${esc(pf.name)}</h1>
          <div style="font-family:'Kanit',sans-serif;font-weight:500;font-size:15px;color:#85BEBC;margin-bottom:10px">${esc(pf.tag)}</div>
          <p class="hero-desc" style="font-size:14.5px">${esc(pf.blurb)}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
            ${pf.strategics
              .map(
                (sp) =>
                  `<div class="strat-pill" data-goto="strategic" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}">${esc(sp.name)}</div>`
              )
              .join("")}
          </div>
        </div>
      </div>

      <div class="section-panel">
        <div class="section-body">
          <div class="section-eyebrow">Strategic Plays in this portfolio</div>
          <div class="strat-grid" style="grid-template-columns:${pf.stratGridCols}">
            ${pf.strategics
              .map(
                (sp) => `
              <div class="strat-card">
                <div data-goto="strategic" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}" style="cursor:pointer">
                  <div class="strat-name">${esc(sp.name)}</div>
                  <p class="strat-promise">${esc(sp.promise)}</p>
                </div>
                <div class="flow-tags">
                  ${sp.flow.map((fs) => `<span class="flow-tag">${esc(fs)}</span>`).join("")}
                </div>
                <div class="divider"></div>
                <div class="proj-list">
                  ${sp.projects
                    .map(
                      (pj) => `
                    <div class="proj-row" data-goto="project" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}" data-pj="${esc(pj.id)}">
                      <span class="proj-num">${pj.num}</span>
                      <span class="proj-name">${esc(pj.name)}</span>
                    </div>`
                    )
                    .join("")}
                </div>
                <div class="grow"></div>
                <div class="open-link" data-goto="strategic" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}">Open strategic play →</div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderStrategic(sp) {
    return `
    <div class="page-pad">
      <div class="hero-banner strategic-hero">
        <img class="hero-art" src="assets/image2.svg" alt="">
        <div class="hero-inner" style="max-width:900px">
          ${renderCrumbs(sp.heroCrumbs)}
          <h1 class="hero-title" style="font-size:28px">${esc(sp.name)}</h1>
          <p class="hero-desc" style="color:#D3E2EA">${esc(sp.promise)}</p>
        </div>
      </div>

      <div class="flow-strip">
        ${sp.flowSteps
          .map(
            (fs) => `
          <div class="flow-step">
            <div class="flow-step-label">${esc(fs.label)}</div>
            ${fs.hasNext ? `<span class="flow-arrow">→</span>` : ""}
          </div>`
          )
          .join("")}
      </div>

      <div class="section-panel" style="padding:24px">
        <div class="section-eyebrow">Project Plays</div>
        <div class="proj-grid">
          ${sp.projects
            .map(
              (pj) => `
            <div class="proj-card" data-goto="project" data-pf="${esc(sp.pfId)}" data-sp="${esc(sp.id)}" data-pj="${esc(pj.id)}">
              <div class="proj-head">
                <span class="proj-num-badge">${pj.num}</span>
                <span class="proj-step">${esc(pj.step.split(" · ")[1] || "")}</span>
              </div>
              <div class="proj-title">${esc(pj.name)}</div>
              <p class="proj-blurb">${esc(pj.blurb)}</p>
              <div class="grow"></div>
              <div class="view-link">View project play →</div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>`;
  }

  function renderProject(pf, sp, pj) {
    const idx = sp.projects.indexOf(pj);
    const flowSteps = sp.flow.map((f, i) => ({
      label: f,
      active: i === idx,
      idle: i !== idx,
      hasNext: i < sp.flow.length - 1,
    }));
    const siblings = sp.projects.filter((p) => p !== pj);

    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/image1.svg" alt="">
        <div class="hero-inner" style="max-width:800px">
          ${renderCrumbs(pj.heroCrumbs)}
          <h1 class="hero-title" style="font-size:28px">${esc(pj.name)}</h1>
          <p class="hero-desc" style="color:#C9D6E3">${esc(pj.blurb)}</p>
        </div>
      </div>

      <div class="project-layout">
        <div class="project-main">
          <div>
            <div class="section-eyebrow">Outcomes we commit to</div>
            <div class="outcomes-grid">
              ${pj.outcomes.map((oc) => `<div class="outcome-card">${esc(oc)}</div>`).join("")}
            </div>
          </div>

          <div class="info-card">
            <div class="info-eyebrow">Scope &amp; workstreams</div>
            <div class="scope-list">
              ${pj.scope
                .map(
                  (sc) =>
                    `<div class="scope-row"><span class="scope-dot"></span><span class="scope-text">${esc(sc)}</span></div>`
                )
                .join("")}
            </div>
          </div>

          <div class="info-card">
            <div class="info-eyebrow">Where it sits in the ${esc(sp.name)} flow</div>
            <div class="flow-position">
              ${flowSteps
                .map(
                  (fs) => `
                <div class="fp-item">
                  ${fs.active ? `<span class="fp-active">${esc(fs.label)}</span>` : ""}
                  ${fs.idle ? `<span class="fp-idle">${esc(fs.label)}</span>` : ""}
                  ${fs.hasNext ? `<span class="fp-arrow">→</span>` : ""}
                </div>`
                )
                .join("")}
            </div>
          </div>

          <div class="cta-banner">
            <div class="cta-text">
              <div class="cta-title">Prove it in 90 days</div>
              <p class="cta-sub">Assess in weeks 1–3, pilot through week 8, measured business outcome by day 90 — then scale.</p>
            </div>
            <div class="cta-btn">Schedule a consultation</div>
          </div>
        </div>

        <div class="project-side">
          <div class="side-card">
            <div class="side-eyebrow">Play details</div>
            <div class="side-field">
              <div>
                <div class="field-label">Portfolio play</div>
                <div class="field-value-link" data-goto="portfolio" data-pf="${esc(pf.id)}">${esc(pf.name)}</div>
              </div>
              <div>
                <div class="field-label">Strategic play</div>
                <div class="field-value-link" data-goto="strategic" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}">${esc(sp.name)}</div>
              </div>
              <div>
                <div class="field-label">Sequence</div>
                <div class="field-value">${esc(pj.step)}</div>
              </div>
            </div>
          </div>

          <div class="side-card">
            <div class="side-eyebrow">Adjacent project plays</div>
            <div class="sibling-list">
              ${siblings
                .map(
                  (sb) => `
                <div class="sibling-row" data-goto="project" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}" data-pj="${esc(sb.id)}">
                  <span class="sibling-num">${sb.num}</span>
                  <span class="sibling-name">${esc(sb.name)}</span>
                </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderFooter() {
    return `
    <div class="footer-wrap">
      <div class="footer-bar">
        <img src="assets/hgs-logo-white.svg" alt="HGS">
        <span>Portfolio · Strategic · Project Plays — internal navigator</span>
      </div>
    </div>`;
  }

  function render() {
    const { pf, sp, pj } = findCurrent();
    let body = "";
    if (state.view === "home") {
      body = renderHome();
    } else if (state.view === "portfolio" && pf) {
      body = renderPortfolio(pf);
    } else if (state.view === "strategic" && sp) {
      body = renderStrategic(sp);
    } else if (state.view === "project" && pj) {
      body = renderProject(pf, sp, pj);
    } else {
      body = renderHome();
    }
    root.innerHTML = `<div class="hgs-app">${renderHeader()}${body}${renderFooter()}</div>`;
  }

  render();
})();
