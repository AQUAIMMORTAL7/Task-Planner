const CACHE_NAME = 'mission-control-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'
];

// Install & Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate & Cleanup
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

// Smart Fetch: Network First, falling back to Cache
self.addEventListener('fetch', (event) => {
  // Skip Firebase Realtime Database calls (Firebase handles its own long-polling/websockets)
  if (event.request.url.includes('firebasedatabase.app')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If successful, update the cache
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return response;
      })
      .catch(() => caches.match(event.request)) // If network fails, use cache
  );
});
