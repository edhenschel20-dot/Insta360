// Trip planner for the Storage & Batteries page.
// Works out card space and batteries for a list of activities.
// Saves to this browser only (localStorage); Reset clears it.
(function () {
  const root = document.getElementById("trip-planner");
  if (!root) return;

  const STORE = "x5-trip-planner-v1";

  // Official X5 lab runtimes (Insta360 manual). GB/hr is the worst case at the 180 Mbps max bitrate.
  const MODES = {
    "8k30": { label: "8K 30fps", minutes: 93 },
    "57k30": { label: "5.7K 30fps (recommended)", minutes: 135 },
    "57k24": { label: "5.7K 24fps", minutes: 208 },
    "endurance": { label: "5.7K 24fps Endurance (Ultra Battery)", minutes: 235 },
  };

  const ACTIVITIES = {
    town: { label: "Walking around / town", hours: 1 },
    beach: { label: "Beach day", hours: 1 },
    dive: { label: "Dive (in dive case)", hours: 1.5 },
    snorkel: { label: "Snorkelling", hours: 1 },
    golf: { label: "Golf round", hours: 1.5 },
    event: { label: "Evening event (luau, parade)", hours: 1.5 },
    drive: { label: "Scenic drive", hours: 2 },
    timeshift: { label: "Drive as TimeShift (much smaller files)", hours: 2, factor: 0.1 },
    flight: { label: "Helicopter / boat tour", hours: 1 },
    park: { label: "Theme park / rides", hours: 2 },
    other: { label: "Other", hours: 1 },
  };

  const EXAMPLE = {
    mode: "57k30", gbPerHour: 81, batteries: 2, cardGb: 256,
    rows: [
      { act: "dive", hours: 1.5, times: 3 },
      { act: "snorkel", hours: 1, times: 3 },
      { act: "golf", hours: 1.5, times: 3 },
      { act: "beach", hours: 0.75, times: 6 },
      { act: "event", hours: 1.5, times: 1 },
      { act: "drive", hours: 1, times: 1 },
      { act: "timeshift", hours: 2, times: 1 },
      { act: "flight", hours: 1, times: 1 },
      { act: "town", hours: 0.5, times: 10 },
    ],
  };

  const BLANK = { mode: "57k30", gbPerHour: 81, batteries: 1, cardGb: 0, rows: [{ act: "town", hours: 1, times: 1 }] };

  let state = load() || structuredClone(BLANK);

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)); } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* storage blocked: still works, just not remembered */ }
  }

  function options(map, selected) {
    return Object.entries(map)
      .map(([k, v]) => `<option value="${k}"${k === selected ? " selected" : ""}>${v.label}</option>`)
      .join("");
  }

  function render() {
    root.innerHTML = `
      <div class="tp-grid">
        <label>Recording mode
          <select data-f="mode">${options(MODES, state.mode)}</select></label>
        <label>GB per hour <small>(81 = worst case; use your measured number)</small>
          <input type="number" min="1" step="1" data-f="gbPerHour" value="${state.gbPerHour}"></label>
        <label>Batteries you own
          <input type="number" min="1" step="1" data-f="batteries" value="${state.batteries}"></label>
        <label>Card space you have: <strong>${fmtGb(state.cardGb)}</strong>
          <span class="tp-chips">
            ${[128, 256, 512, 1000].map((g) => `<button type="button" data-add="${g}">+${g === 1000 ? "1TB" : g + "GB"}</button>`).join("")}
            <button type="button" data-add="clear">clear</button>
          </span></label>
      </div>
      <div class="tp-result">${results()}</div>
      <p class="tp-heading"><b>Activities</b> <small>(hours each × how many times)</small></p>
      <div class="tp-rows">
        ${state.rows.map((r, i) => `
          <div class="tp-row">
            <select data-row="${i}" data-k="act">${options(ACTIVITIES, r.act)}</select>
            <label>hrs <input type="number" min="0" step="0.25" data-row="${i}" data-k="hours" value="${r.hours}"></label>
            <label>× <input type="number" min="0" step="1" data-row="${i}" data-k="times" value="${r.times}"></label>
            <button type="button" class="tp-x" data-del="${i}" aria-label="Remove">✕</button>
          </div>`).join("")}
      </div>
      <p class="tp-actions">
        <button type="button" data-act="add">+ Add activity</button>
        <button type="button" data-act="example">Load Maui example</button>
        <button type="button" data-act="reset">Reset</button>
      </p>`;
  }

  function fmtGb(gb) {
    return gb >= 1000 ? `${(gb / 1000).toFixed(gb % 1000 ? 2 : 0)} TB` : `${Math.round(gb)} GB`;
  }

  function results() {
    const mode = MODES[state.mode];
    let hours = 0, gb = 0;
    const warnings = [];
    state.rows.forEach((r) => {
      const a = ACTIVITIES[r.act] || ACTIVITIES.other;
      const h = (+r.hours || 0) * (+r.times || 0);
      hours += h;
      gb += h * state.gbPerHour * (a.factor || 1);
      const perOuting = Math.ceil(((+r.hours || 0) * 60) / mode.minutes);
      if (r.act === "dive" && perOuting > 1)
        warnings.push(`<b>${a.label}:</b> ${r.hours} hrs is more than one battery (~${mode.minutes} min), and you can't swap inside the dive case.`);
      else if (perOuting > state.batteries)
        warnings.push(`<b>${a.label}:</b> needs ${perOuting} batteries per outing; you have ${state.batteries}. Add a battery or a power bank (80% in ~20 min).`);
    });

    const short = gb - state.cardGb;
    const cardLine = short > 0
      ? `❌ Short by <b>${fmtGb(short)}</b>, e.g. add <b>${Math.ceil(short / 1000)} × 1TB</b> card${Math.ceil(short / 1000) > 1 ? "s" : ""}.`
      : `✅ Enough card space (${fmtGb(-short)} to spare).`;
    const batteryLine = warnings.length
      ? warnings.map((w) => `⚠️ ${w}`).join("<br>")
      : `✅ Batteries cover every outing (${mode.minutes} min each in this mode).`;

    return `
      <p><b>Total footage:</b> ${hours.toFixed(1)} hrs · <b>Storage needed:</b> ${fmtGb(gb)}
      <small>(at ${state.gbPerHour} GB/hr)</small></p>
      <p>${cardLine}</p>
      <p>${batteryLine}</p>
      <p><small>Worst-case estimate. Hot sun can cause heat shutdowns after roughly an hour of continuous recording. Saved on this device only.</small></p>`;
  }

  function update() { save(); render(); }

  root.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.f) state[t.dataset.f] = t.dataset.f === "mode" ? t.value : Math.max(0, +t.value || 0);
    if (t.dataset.row !== undefined) {
      const row = state.rows[+t.dataset.row];
      if (t.dataset.k === "act") {
        row.act = t.value;
        row.hours = ACTIVITIES[t.value].hours;
      } else {
        row[t.dataset.k] = Math.max(0, +t.value || 0);
      }
    }
    update();
  });

  root.addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    if (t.dataset.add) state.cardGb = t.dataset.add === "clear" ? 0 : state.cardGb + +t.dataset.add;
    else if (t.dataset.del !== undefined) state.rows.splice(+t.dataset.del, 1);
    else if (t.dataset.act === "add") state.rows.push({ act: "other", hours: 1, times: 1 });
    else if (t.dataset.act === "example") state = structuredClone(EXAMPLE);
    else if (t.dataset.act === "reset") {
      state = structuredClone(BLANK);
      try { localStorage.removeItem(STORE); } catch (err) { /* ignore */ }
      render();
      return;
    }
    update();
  });

  render();
})();
