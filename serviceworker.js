const CACHE_NAME = "plant-shelf-resources";

/**
 * A registered Service Worker reacts to certain events.
 * 
 * For our purposes, we only care about FETCH events, which 
 * occur when a resource is requested, (e.g. css/style.css, 
 * images/indoor_plants/pothos.webp, js/main.js)
*/

async function getResource(request) {
  let response = await caches.match(request);
  if (response) {
    console.log(`Found ${request.url} in cache!`);
  }
  else {
    console.log(`Fetching ${request.url} from network`);
    response = await fetch(request);

    console.log(`Caching ${request.url} for next time`); 
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", async event => 
  event.respondWith(getResource(event.request))
);