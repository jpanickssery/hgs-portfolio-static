(function () {
  "use strict";

  const PIN = "hgs";
  const SESSION_KEY = "hgsPlaysUnlocked";

  const gate = document.getElementById("pin-gate");
  const form = document.getElementById("pin-form");
  const input = document.getElementById("pin-input");
  const errorMsg = document.getElementById("pin-error");

  function unlock() {
    document.body.classList.remove("pin-locked");
    gate.style.display = "none";
  }

  function showError() {
    input.classList.add("pin-error");
    errorMsg.textContent = "Incorrect PIN. Please try again.";
    input.value = "";
    input.focus();
  }

  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    unlock();
  } else {
    input.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = input.value.trim().toLowerCase();
    if (value === PIN) {
      sessionStorage.setItem(SESSION_KEY, "1");
      unlock();
    } else {
      showError();
    }
  });

  input.addEventListener("input", function () {
    input.classList.remove("pin-error");
    errorMsg.textContent = "";
  });
})();
