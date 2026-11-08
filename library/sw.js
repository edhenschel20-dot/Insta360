// Offline support for the guide. Saves every page listed in sitemap.xml,
// plus the search index and the theme's files, so the whole guide works
// with no signal. Pages are refreshed from the network when online.

const CACHE = "guide-offline-v1";
const SCOPE = self.registration.scope; // e.g. https://host/Insta360/
const META = SCOPE + "__offline-meta__";
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];
// Any quoted file path in a page (attributes, plus the theme's config such as
// the search worker), filtered to this site below.
const ASSET_RE = /["']([^"'\s#?<>]+\.(?:css|js|png|svg|ico|woff2?|webmanifest|json))(?:\?[^"']*)?["']/g;

let saving = null;

async function tell(msg) {
  const all = await self.clients.matchAll({ includeUncontrolled: true });
  all.forEach((c) => c.postMessage(msg));
}

async function pageUrls() {
  const res = await fetch(SCOPE + "sitemap.xml", { cache: "no-store" });
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!locs.length) return [SCOPE];
  // The shortest address in the sitemap is the site root (site_url).
  const root = locs.reduce((a, b) => (b.length < a.length ? b : a));
  const urls = new Set([SCOPE]);
  for (const loc of locs) {
    if (loc.startsWith(root)) urls.add(new URL(loc.slice(root.length), SCOPE).href);
  }
  return [...urls];
}

async function saveAll() {
  const cache = await caches.open(CACHE);
  const pages = await pageUrls();
  const assets = new Set([SCOPE + "search/search_index.json", SCOPE + "manifest.webmanifest"]);
  let done = 0;
  let failed = 0;
  const total = pages.length;
  const queue = pages.slice();

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(res.status);
        const html = await res.clone().text();
        await cache.put(url, res);
        for (const m of html.matchAll(ASSET_RE)) {
          const a = new URL(m[1], url);
          if (a.origin === self.location.origin) assets.add(a.href);
        }
      } catch (e) {
        failed++;
      }
      done++;
      if (done % 10 === 0 || done === total) tell({ type: "offline-progress", done, total });
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);

  for (const a of assets) {
    try {
      const res = await fetch(a, { cache: "no-store" });
      if (res.ok) await cache.put(a, res);
    } catch (e) {
      /* skip */
    }
  }

  const meta = { savedAt: new Date().toISOString(), pages: total - failed, failed };
  await cache.put(META, new Response(JSON.stringify(meta), { headers: { "Content-Type": "application/json" } }));
  tell({ type: "offline-done", ...meta });
  return meta;
}

function saveAllOnce() {
  if (!saving) saving = saveAll().finally(() => (saving = null));
  return saving;
}

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "save-all") event.waitUntil(saveAllOnce().catch(() => tell({ type: "offline-error" })));
});

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  return (await cache.match(request, { ignoreSearch: true })) || null;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([
      fetch(request),
      new Promise((_, reject) => setTimeout(() => reject(new Error("slow")), 5000)),
    ]);
    if (res.ok) cache.put(request, res.clone());
    return res;
  } catch (e) {
    return (await fromCache(request)) || (await fromCache(SCOPE)) || Response.error();
  }
}

async function cacheFirst(request) {
  const hit = await fromCache(request);
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok || res.type === "opaque") {
    const cache = await caches.open(CACHE);
    cache.put(request, res.clone());
  }
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (!req.url.startsWith(SCOPE)) return;
    if (req.mode === "navigate") event.respondWith(networkFirst(req));
    else event.respondWith(cacheFirst(req));
  } else if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req));
  }
});
