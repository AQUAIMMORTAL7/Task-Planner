const CACHE_NAME = 'mission-control-v2.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
];

// --- INSTALL: Caching the App Shell ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Pre-caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      // Forces the waiting service worker to become the active service worker
      return self.skipWaiting();
    })
  );
});

// --- ACTIVATE: Cleaning up Old Data ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('SW: Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      // Allows the SW to start controlling the page immediately without a reload
      return self.clients.claim();
    })
  );
});

// --- FETCH: Stale-While-Revalidate Strategy ---
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests like Firebase Realtime Database (which uses WebSockets/POST)
  // We only want to cache our static assets (HTML, CSS, JS, Fonts)
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Update the cache with the new version from the network
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });

      // Return the cached response immediately, or wait for the network if not cached
      return cachedResponse || fetchPromise;
    })
  );
});
