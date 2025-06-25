// Analytics utility with performance monitoring and Core Web Vitals tracking

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = 'GA_MEASUREMENT_ID' // Replace with actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'section_name'
      }
    })
  }
}

// Track page views
export const trackPageView = (url = window.location.pathname) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: document.title,
      send_to: GA_TRACKING_ID
    })
  }
}

// Track user interactions
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      send_to: GA_TRACKING_ID
    })
  }
}

// Track section views (for single-page app)
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', 'navigation', sectionName)
}

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', 'form', formName)
}

// Track download/link clicks
export const trackDownload = (fileName, fileType = '') => {
  trackEvent('file_download', 'engagement', `${fileName}.${fileType}`)
}

// Track social media interactions
export const trackSocialShare = (platform, url = window.location.href) => {
  trackEvent('social_share', 'social', platform, 1)
}

// Core Web Vitals tracking
export const trackCoreWebVitals = () => {
  if (typeof window === 'undefined') return
  
  // Dynamic import with error handling
  import('web-vitals')
    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Largest Contentful Paint
      getLCP((metric) => {
        trackEvent('core_web_vitals', 'performance', 'LCP', Math.round(metric.value))
      })

      // First Input Delay
      getFID((metric) => {
        trackEvent('core_web_vitals', 'performance', 'FID', Math.round(metric.value))
      })

      // Cumulative Layout Shift
      getCLS((metric) => {
        trackEvent('core_web_vitals', 'performance', 'CLS', Math.round(metric.value * 1000))
      })

      // First Contentful Paint
      getFCP((metric) => {
        trackEvent('core_web_vitals', 'performance', 'FCP', Math.round(metric.value))
      })

      // Time to First Byte
      getTTFB((metric) => {
        trackEvent('core_web_vitals', 'performance', 'TTFB', Math.round(metric.value))
      })
    })
    .catch((error) => {
      console.warn('Web Vitals tracking not available:', error.message)
      // Fallback: track basic performance metrics
      trackBasicPerformance()
    })
}

// Fallback performance tracking without web-vitals
const trackBasicPerformance = () => {
  if (typeof window === 'undefined') return
  
  // Track page load time using Performance API
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0]
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.fetchStart
      trackEvent('page_load_time', 'performance', 'basic', Math.round(loadTime))
    }
  })
}

// Performance observer for custom metrics
export const trackCustomPerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Track loading performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          // Track page load time
          trackEvent('page_load_time', 'performance', 'navigation', Math.round(entry.loadEventEnd - entry.fetchStart))
          
          // Track DOM content loaded
          trackEvent('dom_content_loaded', 'performance', 'navigation', Math.round(entry.domContentLoadedEventEnd - entry.fetchStart))
        }
        
        if (entry.entryType === 'resource') {
          // Track resource loading times
          if (entry.name.includes('fonts.googleapis.com')) {
            trackEvent('font_load_time', 'performance', 'google_fonts', Math.round(entry.responseEnd - entry.fetchStart))
          }
        }
      })
    })

    observer.observe({ entryTypes: ['navigation', 'resource'] })
  }
}

// Track user engagement
export const trackEngagement = () => {
  let startTime = Date.now()
  let maxScroll = 0
  
  // Track scroll depth
  const trackScrollDepth = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent
      trackEvent('scroll_depth', 'engagement', `${scrollPercent}%`)
    }
  }

  // Track time on page
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    if (timeSpent > 0 && timeSpent % 30 === 0) { // Every 30 seconds
      trackEvent('time_on_page', 'engagement', `${timeSpent}s`)
    }
  }

  window.addEventListener('scroll', trackScrollDepth, { passive: true })
  setInterval(trackTimeOnPage, 30000) // Check every 30 seconds
  
  // Track when user leaves
  window.addEventListener('beforeunload', () => {
    const totalTime = Math.round((Date.now() - startTime) / 1000)
    trackEvent('session_duration', 'engagement', 'total_time', totalTime)
  })
}

// Device and browser tracking
export const trackDeviceInfo = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    const deviceInfo = {
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      device_pixel_ratio: window.devicePixelRatio || 1,
      connection_type: navigator.connection?.effectiveType || 'unknown'
    }

    window.gtag('config', GA_TRACKING_ID, {
      custom_map: deviceInfo
    })
  }
}

// Error tracking
export const trackError = (error, errorInfo = {}) => {
  trackEvent('javascript_error', 'error', error.message || 'Unknown error', 1)
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message || 'Unknown error',
      fatal: false
    })
  }
}

// Initialize all tracking
export const initAnalytics = () => {
  try {
    initGA()
    trackCoreWebVitals()
    trackCustomPerformance()
    trackEngagement()
    trackDeviceInfo()
    
    // Track initial page load
    window.addEventListener('load', () => {
      trackEvent('page_loaded', 'performance', 'initial_load')
    })
    
    // Global error handler
    window.addEventListener('error', (event) => {
      trackError(event.error || new Error(event.message))
    })
    
    window.addEventListener('unhandledrejection', (event) => {
      trackError(new Error(event.reason))
    })
    
  } catch (error) {
    console.error('Analytics initialization failed:', error)
  }
} 