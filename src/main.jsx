import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import performance utilities
import { initPerformanceMonitoring } from './utils/performance.js'
import { initImageOptimizations } from './utils/imageOptimization.js'

// Polyfill for requestIdleCallback
const requestIdleCallbackPolyfill = (callback) => {
  const start = Date.now()
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    })
  }, 1)
}

// Use requestIdleCallback if available, otherwise use polyfill
const safeRequestIdleCallback = window.requestIdleCallback || requestIdleCallbackPolyfill

// Performance optimizations
const initPerformanceOptimizations = () => {
  // Initialize performance monitoring
  initPerformanceMonitoring()
  
  // Initialize image optimizations
  safeRequestIdleCallback(() => {
    initImageOptimizations()
  })
  
  // Preload critical resources (only if needed immediately)
  // Removed logo preload as it's not used immediately and causes warnings
}

// Register service worker for offline support and caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Initialize performance optimizations first
    initPerformanceOptimizations()
    
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope)
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              console.log('New content is available')
              // You can show a notification to the user here
            }
          })
        })
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error)
      })
  })
} else {
  // Initialize performance optimizations even without service worker
  window.addEventListener('load', initPerformanceOptimizations)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 