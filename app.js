// HGS Portfolio — vanilla JS SPA
//
// Two sections sharing one shell (header/footer/design system):
//   "services" — the HGS Plays Portfolio (Interactions / Platforms / Operations),
//                 rebuilt from docs/HGS Web Application Design-v7/HGS Plays Navigator.dc.html
//   "products"  — the Packaged Products Portfolio (Portfolio Plays / Strategic Plays / Products),
//                 folded in from the former 03-App/, now merged directly into this app
//
// Each section keeps its own view/id state; the header's "Services"/"Products"
// nav items just flip state.section and jump to that section's home view.

(function () {
  "use strict";

  const root = document.getElementById("app-root");

  const state = {
    section: "services", // "services" | "products" — which nav tab is active
    // ---- services state ----
    svView: "home", pfId: null, spId: null, pjId: null,
    // ---- products state ----
    pdView: "home", categoryId: null, demoId: null, tag: null, variantIdx: 0,
  };

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- navigation ----
  function goServices(view, pfId, spId, pjId) {
    state.section = "services";
    state.svView = view;
    state.pfId = pfId || null;
    state.spId = spId || null;
    state.pjId = pjId || null;
    render();
    window.scrollTo(0, 0);
  }

  function goProducts(view, opts) {
    opts = opts || {};
    state.section = "products";
    state.pdView = view;
    state.categoryId = opts.categoryId || null;
    state.demoId = opts.demoId || null;
    state.tag = opts.tag || null;
    state.variantIdx = 0;
    render();
    window.scrollTo(0, 0);
  }

  // ---- click delegation (data-goto based, no inline handlers) ----
  // Elements inside a section's own pages don't need data-section — the
  // section they belong to is already the active one when they're visible.
  // Only the header's brand mark and its two nav items (which must switch
  // section from anywhere) carry an explicit data-section.
  root.addEventListener("click", (e) => {
    const el = e.target.closest("[data-goto]");
    if (!el) return;
    const view = el.getAttribute("data-goto");
    const section = el.getAttribute("data-section") || state.section;
    if (section === "products") {
      goProducts(view, {
        categoryId: el.getAttribute("data-cat") || null,
        demoId: el.getAttribute("data-demo") || null,
        tag: el.getAttribute("data-tag") || null,
      });
    } else {
      goServices(
        view,
        el.getAttribute("data-pf") || null,
        el.getAttribute("data-sp") || null,
        el.getAttribute("data-pj") || null
      );
    }
  });

  root.addEventListener("click", (e) => {
    const el = e.target.closest("[data-variant]");
    if (!el) return;
    state.variantIdx = Number(el.getAttribute("data-variant"));
    render();
  });

  /* =========================================================================
     SERVICES — HGS Plays Portfolio (Interactions / Platforms / Operations)
     ========================================================================= */

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
      stratGridClass: pf.id === "platforms" ? "cols-4" : "cols-auto",
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

  function findCurrentServices() {
    const pf = tree.find((p) => p.id === state.pfId) || null;
    const sp = pf ? pf.strategics.find((s) => s.id === state.spId) || null : null;
    const pj = sp ? sp.projects.find((p) => p.id === state.pjId) || null : null;
    return { pf, sp, pj };
  }

  function renderServiceCrumbs(crumbs) {
    return `<div class="crumbs">${crumbs
      .map(
        (hc) =>
          `<span class="crumb" style="color:${hc.color};background:${hc.bg}" data-goto="${hc.spId ? "strategic" : "portfolio"}" data-pf="${esc(hc.pfId)}" ${hc.spId ? `data-sp="${esc(hc.spId)}"` : ""}>${esc(hc.name)}</span>`
      )
      .join("")}</div>`;
  }

  function renderServicesHome() {
    const [pf1, pf2, pf3] = tree;
    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/image1.svg" alt="">
        <div class="hero-inner">
          <div class="hero-eyebrow">Experience Intelligence</div>
          <h1 class="hero-title">Services Portfolio</h1>
          <p class="hero-desc">Portfolio, strategic and project plays. Every engagement starts as a project play and proves value in 90 days.</p>
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

      ${renderHomeMobileNav()}
    </div>`;
  }

  function renderHomeMobileNav() {
    return `
    <div class="mobile-nav-panel">
      ${tree
        .map(
          (pf) => `
        <div class="mobile-pf-group">
          <div class="mobile-pf-head" data-goto="portfolio" data-pf="${esc(pf.id)}">
            <div>
              <div class="mobile-pf-name">${esc(pf.name)}</div>
              <div class="mobile-pf-tag">${esc(pf.tag)}</div>
            </div>
            <span class="mobile-pf-arrow">→</span>
          </div>
          <div class="mobile-sp-list">
            ${pf.strategics
              .map(
                (sp) => `
              <div class="mobile-sp-row" data-goto="strategic" data-pf="${esc(pf.id)}" data-sp="${esc(sp.id)}">
                <span class="mobile-sp-name">${esc(sp.name)}</span>
                <span class="mobile-sp-arrow">→</span>
              </div>`
              )
              .join("")}
          </div>
        </div>`
        )
        .join("")}
    </div>`;
  }

  function renderPortfolio(pf) {
    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/image2.svg" alt="">
        <div class="hero-inner">
          ${renderServiceCrumbs(pf.heroCrumbs)}
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
          <div class="strat-grid ${pf.stratGridClass}">
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
          ${renderServiceCrumbs(sp.heroCrumbs)}
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
          ${renderServiceCrumbs(pj.heroCrumbs)}
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

  function renderServicesBody() {
    const { pf, sp, pj } = findCurrentServices();
    if (state.svView === "portfolio" && pf) return renderPortfolio(pf);
    if (state.svView === "strategic" && sp) return renderStrategic(sp);
    if (state.svView === "project" && pj) return renderProject(pf, sp, pj);
    return renderServicesHome();
  }

  /* =========================================================================
     PRODUCTS — Packaged Products Portfolio (Portfolio Plays / Strategic Plays / Products)
     ========================================================================= */

  const byId = (arr) => Object.fromEntries(arr.map((x) => [x.id, x]));
  const categoriesById = byId(CATEGORIES);
  const subcategoriesById = byId(SUBCATEGORIES);
  const tagsById = byId(INDUSTRY_TAGS);

  function subcategoryOf(demo) {
    return subcategoriesById[demo.subcategory];
  }
  function categoryOf(demo) {
    return categoriesById[subcategoryOf(demo).categoryId];
  }
  function subcategoriesIn(categoryId) {
    return SUBCATEGORIES.filter((s) => s.categoryId === categoryId);
  }
  function demosInSubcategory(subId) {
    return DEMOS.filter((d) => d.subcategory === subId);
  }
  function demosInCategory(categoryId) {
    return DEMOS.filter((d) => subcategoryOf(d).categoryId === categoryId);
  }
  function demosByTag(tagId) {
    return DEMOS.filter((d) => d.industryTags.includes(tagId));
  }
  function tagsPresentIn(demos) {
    const seen = new Set();
    demos.forEach((d) => d.industryTags.forEach((t) => seen.add(t)));
    return INDUSTRY_TAGS.filter((t) => seen.has(t.id));
  }

  function renderProductCrumbs(items) {
    // items: [{label, goto, cat, tag}] — last item is not clickable
    return `<div class="crumbs">${items
      .map((it, i) => {
        const isLast = i === items.length - 1;
        const sep = i > 0 ? `<span class="crumb-sep">/</span>` : "";
        if (isLast) {
          return `${sep}<span class="crumb" style="cursor:default;background:none;padding:6px 4px;color:#8FA3B2;">${esc(it.label)}</span>`;
        }
        const attrs = [
          `data-goto="${esc(it.goto)}"`,
          it.cat ? `data-cat="${esc(it.cat)}"` : "",
          it.tag ? `data-tag="${esc(it.tag)}"` : "",
        ].join(" ");
        return `${sep}<span class="crumb" ${attrs}>${esc(it.label)}</span>`;
      })
      .join("")}</div>`;
  }

  function tagChipHTML(tagId, activeTag) {
    const tag = tagsById[tagId];
    if (!tag) return "";
    const active = activeTag === tagId;
    return `<button class="tag-chip${active ? " active" : ""}" data-goto="browse" data-tag="${esc(tagId)}">${esc(tag.name)}</button>`;
  }

  function miniTagsHTML(demo) {
    return `<div class="demo-tags">${demo.industryTags
      .map((t) => `<span class="mini-tag">${esc(tagsById[t].name)}</span>`)
      .join("")}</div>`;
  }

  function statusBadgeHTML(demo) {
    if (demo.status !== "needs-review") return "";
    return `<span class="status-badge" title="Content drafted/cleaned up from source material — flagged for review">Content in progress</span>`;
  }

  function productBadgeHTML(demo) {
    if (!demo.product) return "";
    return `<span class="product-badge" title="Named packaged product per HGS positioning docs">${esc(demo.product)}</span>`;
  }

  function demoCardHTML(demo, opts) {
    opts = opts || {};
    const sub = subcategoryOf(demo);
    const cat = categoryOf(demo);
    return `
    <div class="demo-card" data-goto="demo" data-demo="${esc(demo.id)}">
      <div class="demo-card-top">
        <div style="min-width:0;">
          ${opts.showCategory ? `<div class="demo-cat-label">${esc(cat.name)} · ${esc(sub.name)}</div>` : ""}
          <div class="demo-title">${esc(demo.title)}</div>
        </div>
        ${statusBadgeHTML(demo)}
      </div>
      <p class="demo-tagline">${esc(demo.tagline)}</p>
      ${miniTagsHTML(demo)}
    </div>`;
  }

  function demoGridHTML(demos, opts) {
    if (!demos.length) {
      return `<div class="empty-state">No products match this filter yet.</div>`;
    }
    return `<div class="demo-grid">${demos.map((d) => demoCardHTML(d, opts)).join("")}</div>`;
  }

  // Home's category/subcategory/demo overview, laid out as a 3-tier matrix —
  // same mechanism as the Services Portfolio/Strategic-Play/Project matrix.
  const CATEGORY_ACCENT_RGB = { "agentic-cx": "171,207,2", "non-cx-agentic": "61,155,153" };
  const CATEGORY_ACCENT_SOLID = { "agentic-cx": "#ABCF02", "non-cx-agentic": "#3D9B99" };
  const MATRIX_ROWS = Math.max(...SUBCATEGORIES.map((s) => demosInSubcategory(s.id).length));

  function renderProductsMatrix() {
    const cols = SUBCATEGORIES; // already ordered category-by-category

    const catCellsHTML = CATEGORIES.map((cat) => {
      const span = subcategoriesIn(cat.id).length;
      return `<div class="matrix-cat-cell" style="grid-column:span ${span}" data-goto="category" data-cat="${esc(cat.id)}">
        <div class="cat-cell-name">${esc(cat.name)}</div>
        <div class="cat-cell-count">${demosInCategory(cat.id).length} products</div>
      </div>`;
    }).join("");

    const subCellsHTML = cols
      .map((sub) => `<div class="matrix-sub-cell" data-goto="category" data-cat="${esc(sub.categoryId)}">${esc(sub.name)}</div>`)
      .join("");

    let demoCellsHTML = "";
    cols.forEach((sub, colIdx) => {
      const demos = demosInSubcategory(sub.id);
      const isFirstColOfCat = colIdx === 0 || cols[colIdx - 1].categoryId !== sub.categoryId;
      const isLastColOfCat = colIdx === cols.length - 1 || cols[colIdx + 1].categoryId !== sub.categoryId;
      const tint = CATEGORY_ACCENT_RGB[sub.categoryId];
      const solid = CATEGORY_ACCENT_SOLID[sub.categoryId];
      demos.forEach((demo, rowIdx) => {
        const isLastRow = rowIdx === demos.length - 1;
        const gridColumn = colIdx + 2; // +1 for the label column, +1 for 1-indexing
        const gridRow = rowIdx + 3; // rows 1-2 are the category/subcategory headers
        const style = [
          `grid-column:${gridColumn}`,
          `grid-row:${gridRow}`,
          `background:rgba(${tint},0.09)`,
          `border-left:${isFirstColOfCat ? `2px solid ${solid}` : "1px solid #DCE6ED"}`,
          `border-right:${isLastColOfCat ? `2px solid ${solid}` : "1px solid #DCE6ED"}`,
          `border-bottom:${isLastRow ? `2px solid ${solid}` : "1px solid #DCE6ED"}`,
        ].join(";");
        demoCellsHTML += `<div class="matrix-demo-cell" style="${style}" data-goto="demo" data-demo="${esc(demo.id)}">${esc(demo.title)}</div>`;
      });
    });

    return `
    <div class="matrix-panel">
      <div class="matrix-scroll">
        <div class="matrix-grid" style="grid-template-columns:140px repeat(${cols.length},minmax(0,1fr));min-width:${140 + cols.length * 150}px;">
          <div class="matrix-label cat-label">Portfolio Plays</div>
          ${catCellsHTML}
          <div class="matrix-label sub-label">Strategic Plays</div>
          ${subCellsHTML}
          <div class="matrix-label demo-label" style="grid-row:span ${MATRIX_ROWS}">Products</div>
          ${demoCellsHTML}
        </div>
      </div>
    </div>`;
  }

  function renderProductsMobileNav() {
    return `
    <div class="mobile-nav-panel">
      ${CATEGORIES.map(
        (cat) => `
      <div class="mobile-cat-group">
        <div class="mobile-cat-head" data-goto="category" data-cat="${esc(cat.id)}">
          <div>
            <div class="mobile-cat-name">${esc(cat.name)}</div>
            <div class="mobile-cat-count">${demosInCategory(cat.id).length} products</div>
          </div>
          <span class="mobile-cat-arrow">→</span>
        </div>
        <div class="mobile-sub-list">
          ${subcategoriesIn(cat.id)
            .map(
              (sub) => `
            <div class="mobile-sub-row" data-goto="category" data-cat="${esc(cat.id)}">
              <span class="mobile-sub-name">${esc(sub.name)}</span>
              <span class="mobile-sub-count">${demosInSubcategory(sub.id).length}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`
      ).join("")}
    </div>`;
  }

  function renderProductsHome() {
    return `
    <div class="page-pad">
      <div class="hero-banner">
        <img class="hero-art" src="assets/hero-art.svg" alt="">
        <div class="hero-inner">
          <div class="hero-eyebrow">Experience Intelligence</div>
          <h1 class="hero-title">Product Portfolio</h1>
          <p class="hero-desc">Portfolio, strategic and product plays — browse or filter by industry.</p>
        </div>
      </div>

      <div id="home-browse">
        ${renderProductsMatrix()}
        ${renderProductsMobileNav()}

        <div class="section-title">Browse by industry</div>
        <div class="tag-row">
          ${INDUSTRY_TAGS.map((t) => tagChipHTML(t.id, null)).join("")}
        </div>
      </div>
    </div>`;
  }

  function renderCategory() {
    const cat = categoriesById[state.categoryId];
    if (!cat) return renderProductsHome();
    const allInCat = demosInCategory(cat.id);
    const availableTags = tagsPresentIn(allInCat);

    const sections = subcategoriesIn(cat.id)
      .map((sub) => {
        const subDemos = demosInSubcategory(sub.id);
        const filtered = state.tag ? subDemos.filter((d) => d.industryTags.includes(state.tag)) : subDemos;
        if (!filtered.length) return ""; // hide empty sections rather than show a blank grid
        return `
        <div class="subcategory-section">
          <div class="subcategory-head">
            <div class="subcategory-name">${esc(sub.name)}</div>
            <p class="subcategory-blurb">${esc(sub.blurb)}</p>
          </div>
          ${demoGridHTML(filtered, { showCategory: false })}
        </div>`;
      })
      .join("");

    const anyVisible = subcategoriesIn(cat.id).some((sub) => {
      const subDemos = demosInSubcategory(sub.id);
      return state.tag ? subDemos.some((d) => d.industryTags.includes(state.tag)) : subDemos.length;
    });

    return `
    <div class="page-pad">
      ${renderProductCrumbs([{ label: "Home", goto: "home" }, { label: cat.name }])}
      <div class="hero-banner">
        <img class="hero-art" src="assets/hero-art.svg" alt="">
        <div class="hero-inner">
          <div class="hero-eyebrow">Portfolio Play</div>
          <h1 class="hero-title">${esc(cat.name)}</h1>
          <p class="hero-desc">${esc(cat.blurb)}</p>
        </div>
      </div>

      ${
        availableTags.length > 1
          ? `<div class="tag-row">
              <button class="tag-chip clear${!state.tag ? " active" : ""}" data-goto="category" data-cat="${esc(cat.id)}">All industries</button>
              ${availableTags.map((t) => tagChipHTMLScoped(t.id, cat.id, state.tag)).join("")}
            </div>`
          : ""
      }

      ${anyVisible ? sections : `<div class="empty-state">No products match this filter yet.</div>`}
    </div>`;
  }

  // A tag chip that filters *within* the current category — still just a
  // "category" navigation, with both categoryId and tag set at once.
  function tagChipHTMLScoped(tagId, categoryId, activeTag) {
    const tag = tagsById[tagId];
    const active = activeTag === tagId;
    return `<button class="tag-chip${active ? " active" : ""}" data-goto="category" data-cat="${esc(categoryId)}" data-tag="${esc(tagId)}">${esc(tag.name)}</button>`;
  }

  function renderBrowse() {
    const tag = tagsById[state.tag];
    if (!tag) return renderProductsHome();
    const matches = demosByTag(tag.id);

    return `
    <div class="page-pad">
      ${renderProductCrumbs([{ label: "Home", goto: "home" }, { label: tag.name }])}
      <div class="hero-banner">
        <img class="hero-art" src="assets/hero-art.svg" alt="">
        <div class="hero-inner">
          <div class="hero-eyebrow">Industry</div>
          <h1 class="hero-title">${esc(tag.name)}</h1>
          <p class="hero-desc">${matches.length} product${matches.length === 1 ? "" : "s"} tagged “${esc(tag.name)}”, across every category.</p>
        </div>
      </div>
      ${demoGridHTML(matches, { showCategory: true })}
    </div>`;
  }

  function caseStudiesHTML(demo) {
    if (!demo.caseStudies || !demo.caseStudies.length) return "";
    return `
    <div class="card">
      <div class="card-eyebrow">Proven results</div>
      <ul class="bullet-list">
        ${demo.caseStudies
          .map(
            (cs) =>
              `<li class="bullet-row"><span class="bullet-dot result-dot"></span><span class="bullet-text"><strong>${esc(cs.client)}</strong> — ${esc(cs.result)}</span></li>`
          )
          .join("")}
      </ul>
    </div>`;
  }

  function renderDemo() {
    const demo = byId(DEMOS)[state.demoId];
    if (!demo) return renderProductsHome();
    const sub = subcategoryOf(demo);
    const cat = categoryOf(demo);
    const siblings = demosInSubcategory(sub.id).filter((d) => d.id !== demo.id);
    const variant = demo.variants[state.variantIdx] || demo.variants[0];

    return `
    <div class="page-pad">
      ${renderProductCrumbs([{ label: "Home", goto: "home" }, { label: cat.name, goto: "category", cat: cat.id }, { label: demo.title }])}

      <div class="detail-layout">
        <div class="detail-main">
          <div class="detail-head">
            <div>
              <div class="pill-crumbs">
                <span class="pill-crumb pill-crumb-cat" data-goto="category" data-cat="${esc(cat.id)}">${esc(cat.name)}</span>
                <span class="pill-crumb pill-crumb-sub" data-goto="category" data-cat="${esc(cat.id)}">${esc(sub.name)}</span>
              </div>
              <h1 class="detail-title">${esc(demo.title)}</h1>
              <p class="detail-tagline">${esc(demo.tagline)}</p>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
              ${productBadgeHTML(demo)}
              ${statusBadgeHTML(demo)}
            </div>
          </div>

          <div class="video-card">
            ${
              demo.variants.length > 1
                ? `<div class="video-variant-tabs">
                    ${demo.variants
                      .map(
                        (v, i) =>
                          `<button class="video-variant-tab${i === state.variantIdx ? " active" : ""}" data-variant="${i}">${esc(v.label)}</button>`
                      )
                      .join("")}
                  </div>`
                : ""
            }
            <div class="video-placeholder">
              <div class="play-badge">▶</div>
              <div class="vp-title">Video coming soon${demo.variants.length > 1 ? " — " + esc(variant.label) : ""}</div>
              <div class="vp-sub">Video sourcing &amp; hosting is planned for the next phase of this project.</div>
            </div>
          </div>

          <div class="card">
            <div class="card-eyebrow">What we're solving for</div>
            <ul class="bullet-list">
              ${demo.problem.map((p) => `<li class="bullet-row"><span class="bullet-dot problem-dot"></span><span class="bullet-text">${esc(p)}</span></li>`).join("")}
            </ul>
          </div>

          <div class="card">
            <div class="card-eyebrow">What you'll see</div>
            <ul class="bullet-list">
              ${demo.whatYouSee.map((p) => `<li class="bullet-row"><span class="bullet-dot"></span><span class="bullet-text">${esc(p)}</span></li>`).join("")}
            </ul>
          </div>

          ${caseStudiesHTML(demo)}
        </div>

        <div class="detail-side">
          <div class="side-card">
            <div class="side-eyebrow">Details</div>
            <div class="side-field">
              <div class="field-label">Portfolio Play</div>
              <div class="field-value-link" data-goto="category" data-cat="${esc(cat.id)}">${esc(cat.name)}</div>
            </div>
            <div class="side-field">
              <div class="field-label">Strategic Play</div>
              <div class="field-value">${esc(sub.name)}</div>
            </div>
            ${
              demo.product
                ? `<div class="side-field">
                    <div class="field-label">Packaged product</div>
                    <div class="field-value">${esc(demo.product)}</div>
                  </div>`
                : ""
            }
            <div class="side-field">
              <div class="field-label">Industry</div>
              <div class="side-tag-list">
                ${demo.industryTags.map((t) => tagChipHTML(t, null)).join("")}
              </div>
            </div>
            ${
              demo.variants.length > 1
                ? `<div class="side-field">
                    <div class="field-label">Variants</div>
                    <div class="field-value">${demo.variants.map((v) => esc(v.label)).join(", ")}</div>
                  </div>`
                : ""
            }
          </div>

          ${
            siblings.length
              ? `<div class="side-card">
                  <div class="side-eyebrow">More in ${esc(sub.name)}</div>
                  <div class="scope-list" style="display:flex;flex-direction:column;gap:4px;">
                    ${siblings
                      .slice(0, 5)
                      .map(
                        (s) =>
                          `<div class="field-value-link" style="padding:6px 0;" data-goto="demo" data-demo="${esc(s.id)}">${esc(s.title)}</div>`
                      )
                      .join("")}
                  </div>
                </div>`
              : ""
          }
        </div>
      </div>
    </div>`;
  }

  function renderProductsBody() {
    if (state.pdView === "category") return renderCategory();
    if (state.pdView === "browse") return renderBrowse();
    if (state.pdView === "demo") return renderDemo();
    return renderProductsHome();
  }

  /* =========================================================================
     HEADER SEARCH — one box, searches Services and Products together
     ========================================================================= */

  // Built once: every portfolio/strategic/project play, plus every products
  // category and product, flattened into one list of {kind, label, sub, goto
  // attrs}. "Portfolio Play" is used for both Services portfolios and
  // Products categories on purpose — same matrix tier, same label.
  const searchIndex = [];
  tree.forEach((pf) => {
    searchIndex.push({ kind: "Portfolio Play", label: pf.name, sub: pf.tag, section: "services", goto: "portfolio", pf: pf.id });
    pf.strategics.forEach((sp) => {
      searchIndex.push({ kind: "Strategic Play", label: sp.name, sub: sp.promise, section: "services", goto: "strategic", pf: pf.id, sp: sp.id });
      sp.projects.forEach((pj) => {
        searchIndex.push({ kind: "Project Play", label: pj.name, sub: pj.blurb, section: "services", goto: "project", pf: pf.id, sp: sp.id, pj: pj.id });
      });
    });
  });
  CATEGORIES.forEach((cat) => {
    searchIndex.push({ kind: "Portfolio Play", label: cat.name, sub: cat.blurb, section: "products", goto: "category", cat: cat.id });
  });
  DEMOS.forEach((demo) => {
    const extra = [subcategoryOf(demo).name, ...demo.problem, ...demo.whatYouSee].join(" ");
    searchIndex.push({ kind: "Product", label: demo.title, sub: demo.tagline, extra, section: "products", goto: "demo", demo: demo.id });
  });

  const HEADER_SEARCH_LIMIT = 8;

  function searchResultAttrs(item) {
    return [
      `data-goto="${esc(item.goto)}"`,
      `data-section="${esc(item.section)}"`,
      item.pf ? `data-pf="${esc(item.pf)}"` : "",
      item.sp ? `data-sp="${esc(item.sp)}"` : "",
      item.pj ? `data-pj="${esc(item.pj)}"` : "",
      item.cat ? `data-cat="${esc(item.cat)}"` : "",
      item.demo ? `data-demo="${esc(item.demo)}"` : "",
    ].join(" ");
  }

  function headerSearchResultsBox() {
    return document.getElementById("header-search-results");
  }

  function openHeaderSearch(html) {
    const box = headerSearchResultsBox();
    if (!box) return;
    box.innerHTML = html;
    box.classList.add("open");
  }

  function closeHeaderSearch() {
    const box = headerSearchResultsBox();
    if (!box) return;
    box.classList.remove("open");
    box.innerHTML = "";
  }

  function runHeaderSearch(rawQuery) {
    const q = rawQuery.trim().toLowerCase();
    if (!q) {
      closeHeaderSearch();
      return;
    }
    const matches = searchIndex
      .filter((item) => `${item.label} ${item.sub} ${item.extra || ""}`.toLowerCase().includes(q))
      .slice(0, HEADER_SEARCH_LIMIT);

    if (!matches.length) {
      openHeaderSearch(`<div class="header-search-empty">No matches for “${esc(rawQuery.trim())}”</div>`);
      return;
    }
    openHeaderSearch(`
      <div class="header-search-hint">${matches.length} result${matches.length === 1 ? "" : "s"}</div>
      ${matches
        .map(
          (item) => `
        <div class="header-search-result" ${searchResultAttrs(item)}>
          <span class="hsr-kind">${esc(item.kind)}</span>
          <span class="hsr-title">${esc(item.label)}</span>
          <span class="hsr-sub">${esc(item.sub)}</span>
        </div>`
        )
        .join("")}
    `);
  }

  // Delegated on root (survives header re-renders — the input element
  // itself is destroyed/recreated on every navigation, so we never bind
  // straight to it).
  root.addEventListener("input", (e) => {
    if (e.target.id !== "header-search-input") return;
    runHeaderSearch(e.target.value);
  });
  root.addEventListener("focus", (e) => {
    if (e.target.id !== "header-search-input") return;
    if (e.target.value.trim()) runHeaderSearch(e.target.value);
  }, true);
  root.addEventListener("keydown", (e) => {
    if (e.target.id !== "header-search-input") return;
    if (e.key === "Escape") {
      closeHeaderSearch();
      e.target.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest("#header-search")) return;
    closeHeaderSearch();
  });

  /* =========================================================================
     SHARED SHELL — header, footer, root render
     ========================================================================= */

  function renderHeader() {
    return `
    <div class="hgs-header-wrap">
      <div class="hgs-header">
        <div class="logo-btn" data-goto="home" data-section="services">
          <img src="assets/hgs-logo-white.svg" alt="HGS">
          <span class="app-name">Portfolio</span>
        </div>
        <div class="divider"></div>
        <div class="nav-items">
          <button class="nav-item${state.section === "services" ? " active" : ""}" data-goto="home" data-section="services">Services</button>
          <button class="nav-item${state.section === "products" ? " active" : ""}" data-goto="home" data-section="products">Products</button>
        </div>
        <div class="spacer"></div>
        <div class="header-search" id="header-search">
          <span class="header-search-icon">⌕</span>
          <input id="header-search-input" type="text" placeholder="Search plays, products…" autocomplete="off">
          <div class="header-search-results" id="header-search-results"></div>
        </div>
        <div class="nav-badge">Internal Navigator</div>
      </div>
    </div>`;
  }

  function renderFooter() {
    const tagline =
      state.section === "products"
        ? "Packaged Products Portfolio — internal showcase, adapted from AI-Demos-MAIN.pptx and the HGS AgentX positioning docs"
        : "Portfolio · Strategic · Project Plays — internal navigator";
    return `
    <div class="footer-wrap">
      <div class="footer-bar">
        <img src="assets/hgs-logo-white.svg" alt="HGS">
        <span>${tagline}</span>
      </div>
    </div>`;
  }

  function render() {
    const body = state.section === "products" ? renderProductsBody() : renderServicesBody();
    root.innerHTML = `<div class="hgs-app">${renderHeader()}${body}${renderFooter()}</div>`;
  }

  render();
})();
