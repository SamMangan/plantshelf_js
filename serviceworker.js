const CACHE_NAME = "plant-shelf-v1";

// Once a Service Worker is registered, it reacts to certain events. For our purposes, we care about the INSTALL and FETCH events.

// INSTALL event: runs 1st time user accesses app, or if the Service Worker has been uninstalled since last time
self.addEventListener("install", event => {
  console.log("Installing service worker");
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.add("/")) // Add all resources in directory to cache
    .then(self.skipWaiting())
    .catch(e => console.error(e)));
});

// FETCH event: runs every time any resource is needed, e.g. css/style.css, images/indoor_plants/pothos.webp, js/main.js
self.addEventListener("fetch", event => {
  event.respondWith((async() => {
      // Check for requested resource in cache
      let response = await caches.match(event.request);
      if (response) {
        // Found resource in cache
        console.log(`Found ${event.request.url} in cache!`);
        return response;
      } else {
        // Resource not in cache - get it from network instead
        console.log(`Fetching ${event.request.url} from network`);
        response = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone()); // Add to cache for next time
        return response;
      }
    })());
});