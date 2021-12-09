// Caution! Be sure you understand the caveats before publishing an application with
// offline support. See https://aka.ms/blazor-offline-considerations

//self.importScripts('./service-worker-assets.js');
self.addEventListener('install', event => event.waitUntil(onInstall(event)));
self.addEventListener('activate', event => event.waitUntil(onActivate(event)));
self.addEventListener('fetch', event => event.respondWith(onFetch(event)));

const cacheNamePrefix = 'offline-cache-';
const cacheName = `${cacheNamePrefix}_001`;
const offlineAssetsInclude = [/\.dll$/, /\.pdb$/, /\.wasm/, /\.html/, /\.js$/, /\.json$/, /\.css$/, /\.woff$/, /\.png$/, /\.jpe?g$/, /\.gif$/, /\.ico$/, /\.blat$/, /\.dat$/];
const offlineAssetsExclude = [/^service-worker\.js$/, /^appsettings.json$/];

async function onInstall(event) {
  console.info('Service worker: Install');

  // Fetch and cache all matching items from the assets manifest
  //const assetsRequests = self.assetsManifest.assets
  //  .filter(asset => offlineAssetsInclude.some(pattern => pattern.test(asset.url)))
  //  .filter(asset => !offlineAssetsExclude.some(pattern => pattern.test(asset.url)))
  //  .map(asset => new Request(asset.url, { integrity: asset.hash, cache: 'no-cache' }));
  //await caches.open(cacheName).then(cache => cache.addAll(assetsRequests));

}

async function onActivate(event) {
  console.info('Service worker: Activate');

  // Delete unused caches
  const cacheKeys = await caches.keys();
  await Promise.all(cacheKeys
    .filter(key => key.startsWith(cacheNamePrefix) && key !== cacheName)
    .map(key => caches.delete(key)));
}

async function onFetch(event) {
  let cachedResponse = null;
  if (event.request.method === 'GET') {
    // For all navigation requests, try to serve index.html from cache
    // If you need some URLs to be server-rendered, edit the following check to exclude those URLs
    const shouldServeIndexHtml = event.request.mode === 'navigate';

    const request = event.request;
    const cache = await caches.open(cacheName);
    cachedResponse = await cache.match(request);
    if (!cachedResponse) {
      var response = await fetch(event.request);
      if (response) {
        updateFetch(request, cache, response)
        return response;
      }
    }
    updateFetch2(request, cache, () => fetch(request));
    return cachedResponse
  }
  return
}

async function match(request, caches) {
  return await caches.match(request);
}

function put(request, caches, networkResponse) {
  caches.put(request, networkResponse);
  //localStorage.getItem(JSON.stringify(request), JSON.stringify(networkResponse));
}

function updateFetch(request, caches, networkResponse) {
  put(request, caches, networkResponse.clone());
}
async function updateFetch2(request, caches, networkResponse) {
  var response = await networkResponse();
  if (response) {
    put(request, caches, response);
  }
}
