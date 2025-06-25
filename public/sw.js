// Service Worker for Ovid International - Advanced Caching & Performance

const CACHE_NAME = 'ovid-international-v1.0.0'
const STATIC_CACHE = 'ovid-static-v1.0.0'
const DYNAMIC_CACHE = 'ovid-dynamic-v1.0.0'

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/assets/ovid-logo.svg',
  '/favicon.svg'
]

// Static assets to cache
const STATIC_ASSETS = [
  '/assets/',
  '/src/',
  '/static/'
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching critical resources')
        return cache.addAll(CRITICAL_RESOURCES)
      })
      .then(() => {
        console.log('Service Worker installed successfully')
        return self.skipWaiting()
      })
      .catch(error => {
        console.error('Service Worker installation failed:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
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

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  }

  // Handle different types of requests
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request))
  } else if (isAPIRequest(url)) {
    event.respondWith(networkFirst(request))
  } else {
    event.respondWith(staleWhileRevalidate(request))
  }
})

// Cache First strategy for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error('Cache First failed:', error)
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Network First strategy for API requests
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    return new Response('API offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Stale While Revalidate strategy for HTML pages
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE)
  const cachedResponse = await cache.match(request)
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  }).catch(() => {
    // Network failed, return cached response if available
    return cachedResponse || new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  })

  return cachedResponse || fetchPromise
}

// Check if request is for static assets
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.pathname.startsWith(asset)) ||
         url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
}

// Check if request is for API
function isAPIRequest(url) {
  return url.pathname.startsWith('/api/') ||
         url.hostname.includes('api.') ||
         url.searchParams.has('api')
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Perform background sync tasks
    console.log('Performing background sync')
    
    // Example: Sync form submissions
    const formData = await getStoredFormData()
    for (const data of formData) {
      await submitFormData(data)
      await removeStoredFormData(data.id)
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/favicon.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.svg'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Ovid International', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
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

// Utility functions for background sync
async function getStoredFormData() {
  // Implementation for getting stored form data
  return []
}

async function submitFormData(data) {
  // Implementation for submitting form data
  console.log('Submitting form data:', data)
}

async function removeStoredFormData(id) {
  // Implementation for removing stored form data
  console.log('Removing stored form data:', id)
}

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