// Optimized Service Worker for Ovid International
const CACHE_NAME = 'ovid-international-v1.0.0'
const STATIC_CACHE = 'ovid-static-v1.0.0'
const DYNAMIC_CACHE = 'ovid-dynamic-v1.0.0'

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/assets/ovid-logo.svg',
  '/assets/ovid-logo2.svg',
  '/favicon.svg'
]

// Static assets to cache
const STATIC_ASSETS = [
  '/assets/',
  '/src/',
  '/css/',
  '/js/'
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching critical resources')
        return cache.addAll(CRITICAL_RESOURCES)
      })
      .then(() => {
        console.log('Service Worker installed successfully')
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Handle different types of requests
  if (isStaticAsset(url.pathname)) {
    // Static assets - cache first, then network
    event.respondWith(cacheFirst(request, STATIC_CACHE))
  } else if (isAPIRequest(url.pathname)) {
    // API requests - network first, then cache
    event.respondWith(networkFirst(request, DYNAMIC_CACHE))
  } else {
    // HTML pages - network first, then cache
    event.respondWith(networkFirst(request, DYNAMIC_CACHE))
  }
})

// Cache first strategy
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Cache first failed:', error)
    return new Response('Offline content not available', { status: 503 })
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Network first failed, trying cache:', error)
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    return new Response('Offline content not available', { status: 503 })
  }
}

// Check if request is for static assets
function isStaticAsset(pathname) {
  return STATIC_ASSETS.some(asset => pathname.includes(asset)) ||
         pathname.includes('.js') ||
         pathname.includes('.css') ||
         pathname.includes('.svg') ||
         pathname.includes('.png') ||
         pathname.includes('.jpg') ||
         pathname.includes('.webp')
}

// Check if request is for API
function isAPIRequest(pathname) {
  return pathname.includes('/api/') ||
         pathname.includes('googleapis.com') ||
         pathname.includes('googletagmanager.com')
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Handle any pending offline actions
    console.log('Performing background sync')
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: '/assets/ovid-logo.svg',
      badge: '/assets/ovid-logo.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('/')
  )
})

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(STATIC_CACHE)
        .then(cache => cache.addAll(event.data.urls))
    )
  }
})

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now()
  
  event.waitUntil(
    event.response.then(response => {
      const endTime = performance.now()
      const duration = endTime - startTime
      
      // Log slow requests
      if (duration > 1000) {
        console.warn('Slow request detected:', {
          url: event.request.url,
          duration: Math.round(duration) + 'ms'
        })
      }
    }).catch(() => {
      // Request failed
      console.error('Request failed:', event.request.url)
    })
  )
}) 