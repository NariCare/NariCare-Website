// Service Worker for image optimization and caching
const CACHE_NAME = 'naricare-images-v1';
const IMAGE_CACHE_NAME = 'naricare-images-cache-v1';

const CRITICAL_IMAGES = [
  '/image-13.png',
  '/mothers-supported.svg',
  '/years-experience.svg',
  '/support-available.svg'
];

const OTHER_IMAGES = [
  '/image-22.png',
  '/image-18.png',
  '/mask-group.png'
];

// Install event - cache critical images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME).then((cache) => {
      // Cache critical images immediately
      return cache.addAll(CRITICAL_IMAGES);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve images from cache with network fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle image requests
  if (event.request.destination === 'image' || 
      url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/i)) {
    
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            // Serve from cache
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(event.request).then((networkResponse) => {
            // Check if we received a valid response
            if (networkResponse && networkResponse.status === 200) {
              // Clone the response before caching
              const responseClone = networkResponse.clone();
              
              // Cache the image for future use
              cache.put(event.request, responseClone);
            }
            
            return networkResponse;
          }).catch(() => {
            // Network failed, return placeholder if available
            if (url.pathname.includes('image-13.png')) {
              return new Response(
                '<svg width="654" height="436" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">Loading...</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            
            return new Response('Image not available', { 
              status: 404, 
              statusText: 'Not Found' 
            });
          });
        });
      })
    );
  }
  
  // For non-image requests, use default behavior
  return;
});