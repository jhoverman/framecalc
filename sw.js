self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('frame-calculator-v1').then(cache =>
      cache.addAll([
        './',
        './frame_calculator.html',
        './manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  );
});