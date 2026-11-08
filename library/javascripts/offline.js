// Registers the offline helper (sw.js) and runs the "Use it offline" page.
(function () {
  if (!("serviceWorker" in navigator)) return;

  var manifest = document.querySelector('link[rel="manifest"]');
  if (!manifest) return;
  var base = new URL(".", manifest.href).href; // site root
  var KEY = "guide-offline-last-save";

  function lastSave() {
    try { return Number(localStorage.getItem(KEY)) || 0; } catch (e) { return 0; }
  }
  function markSaved() {
    try { localStorage.setItem(KEY, String(Date.now())); } catch (e) { /* ignore */ }
  }

  function askToSave() {
    return navigator.serviceWorker.ready.then(function (reg) {
      if (reg.active) reg.active.postMessage("save-all");
    });
  }

  navigator.serviceWorker.register(base + "sw.js").then(function () {
    // Refresh the offline copy once a day while online.
    if (navigator.onLine && Date.now() - lastSave() > 24 * 3600 * 1000) {
      markSaved();
      askToSave();
    }
  });

  // --- The "Use it offline" page ---
  var status = document.getElementById("offline-status");
  var button = document.getElementById("offline-save");

  function show(text) { if (status) status.textContent = text; }

  function showSaved() {
    if (!status || !("caches" in window)) return;
    caches.open("guide-offline-v1")
      .then(function (c) { return c.match(base + "__offline-meta__"); })
      .then(function (r) { return r ? r.json() : null; })
      .then(function (m) {
        if (!m) { show("Not saved yet. Tap the button while you have signal."); return; }
        var when = new Date(m.savedAt).toLocaleString();
        show("✅ Saved for offline: " + m.pages + " pages, on " + when +
          (m.failed ? " (" + m.failed + " pages failed; tap again to retry)" : "") + ".");
      })
      .catch(function () { show("Couldn't check the offline copy."); });
  }

  navigator.serviceWorker.startMessages && navigator.serviceWorker.startMessages();
  navigator.serviceWorker.addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "offline-progress") show("Saving… " + d.done + " of " + d.total + " pages");
    if (d.type === "offline-done") { markSaved(); showSaved(); if (button) button.disabled = false; }
    if (d.type === "offline-error") { show("Saving failed. Check you have signal, then try again."); if (button) button.disabled = false; }
  });

  if (button) {
    button.addEventListener("click", function () {
      if (!navigator.onLine) { show("You're offline. Try again when you have signal."); return; }
      button.disabled = true;
      show("Starting…");
      if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
      markSaved();
      askToSave();
    });
  }
  showSaved();
})();
