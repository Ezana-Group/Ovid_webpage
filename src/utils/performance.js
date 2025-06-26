// Advanced Performance Monitoring and Optimization

// Performance monitoring class
class PerformanceMonitor {
  constructor() {
    this.metrics = {}
    this.observers = []
    this.init()
  }

  init() {
    this.setupCoreWebVitals()
    this.setupResourceTiming()
    this.setupLongTasks()
    this.setupLayoutShifts()
    this.setupFirstPaint()
    this.setupBundleSizeTracking()
  }

  // Core Web Vitals monitoring
  setupCoreWebVitals() {
    if (typeof window === 'undefined') return

    // Largest Contentful Paint (LCP)
    this.observeLCP()
    
    // First Input Delay (FID)
    this.observeFID()
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS()
    
    // First Contentful Paint (FCP)
    this.observeFCP()
    
    // Time to First Byte (TTFB)
    this.observeTTFB()
  }

  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
        this.reportMetric('LCP', lastEntry.startTime)
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    }
  }

  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          this.metrics.fid = entry.processingStart - entry.startTime
          this.reportMetric('FID', this.metrics.fid)
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    }
  }

  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            this.metrics.cls = clsValue
            this.reportMetric('CLS', clsValue)
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    }
  }

  observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const firstEntry = entries[0]
        this.metrics.fcp = firstEntry.startTime
        this.reportMetric('FCP', firstEntry.startTime)
      })
      observer.observe({ entryTypes: ['first-contentful-paint'] })
      this.observers.push(observer)
    }
  }

  observeTTFB() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            this.metrics.ttfb = entry.responseStart - entry.requestStart
            this.reportMetric('TTFB', this.metrics.ttfb)
          }
        })
      })
      observer.observe({ entryTypes: ['navigation'] })
      this.observers.push(observer)
    }
  }

  // Resource timing monitoring
  setupResourceTiming() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          this.analyzeResource(entry)
        })
      })
      observer.observe({ entryTypes: ['resource'] })
      this.observers.push(observer)
    }
  }

  analyzeResource(entry) {
    const loadTime = entry.responseEnd - entry.fetchStart
    const resourceType = entry.initiatorType
    
    // Track slow resources
    if (loadTime > 1000) {
      this.reportMetric('slow_resource', {
        name: entry.name,
        type: resourceType,
        loadTime: loadTime
      })
    }
    
    // Track resource types
    if (!this.metrics.resourceTypes) {
      this.metrics.resourceTypes = {}
    }
    if (!this.metrics.resourceTypes[resourceType]) {
      this.metrics.resourceTypes[resourceType] = []
    }
    this.metrics.resourceTypes[resourceType].push(loadTime)
  }

  // Long tasks monitoring
  setupLongTasks() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (entry.duration > 50) {
            this.reportMetric('long_task', {
              duration: entry.duration,
              startTime: entry.startTime
            })
          }
        })
      })
      observer.observe({ entryTypes: ['longtask'] })
      this.observers.push(observer)
    }
  }

  // Layout shifts monitoring
  setupLayoutShifts() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (entry.value > 0.1) {
            this.reportMetric('layout_shift', {
              value: entry.value,
              sources: entry.sources
            })
          }
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    }
  }

  // First paint monitoring
  setupFirstPaint() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          this.metrics.fp = entry.startTime
          this.reportMetric('FP', entry.startTime)
        })
      })
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    }
  }

  // Bundle size tracking
  setupBundleSizeTracking() {
    if (typeof window !== 'undefined') {
      // Track JavaScript bundle sizes
      const scripts = document.querySelectorAll('script[src]')
      let totalJSSize = 0
      
      scripts.forEach(script => {
        const src = script.src
        if (src.includes('assets/') && src.includes('.js')) {
          // Estimate size based on URL patterns
          if (src.includes('three-vendor')) {
            totalJSSize += 691 // Known Three.js bundle size
          } else if (src.includes('react-vendor')) {
            totalJSSize += 376 // Known React bundle size
          } else if (src.includes('motion-vendor')) {
            totalJSSize += 80 // Known Framer Motion bundle size
          }
        }
      })
      
      this.metrics.totalBundleSize = totalJSSize
      this.reportMetric('bundle_size', totalJSSize)
    }
  }

  // Report metrics to analytics
  reportMetric(name, value) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: name,
        value: Math.round(value),
        custom_parameter_1: JSON.stringify(this.metrics)
      })
    }
    
    console.log(`Performance Metric - ${name}:`, value)
  }

  // Get performance summary
  getPerformanceSummary() {
    return {
      ...this.metrics,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      } : null
    }
  }

  // Cleanup observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Performance optimization utilities
export const optimizePerformance = () => {
  // Preload critical resources
  preloadCriticalResources()
  
  // Optimize images
  optimizeImages()
  
  // Optimize fonts
  optimizeFonts()
  
  // Optimize third-party scripts
  optimizeThirdPartyScripts()
}

// Preload critical resources
const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/ovid-logo.svg',
    // Add other critical resources
  ]
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.css') ? 'style' : 'fetch'
    document.head.appendChild(link)
  })
}

// Optimize images
const optimizeImages = () => {
  const images = document.querySelectorAll('img')
  images.forEach(img => {
    // Add loading="lazy" for images below the fold
    if (img.getBoundingClientRect().top > window.innerHeight) {
      img.loading = 'lazy'
    }
    
    // Add decoding="async"
    img.decoding = 'async'
    
    // Add fetchpriority for critical images
    if (img.dataset.critical === 'true') {
      img.fetchPriority = 'high'
    }
  })
}

// Optimize fonts
const optimizeFonts = () => {
  // Add font-display: swap to Google Fonts
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
  fontLinks.forEach(link => {
    if (!link.href.includes('display=swap')) {
      link.href += '&display=swap'
    }
  })
}

// Optimize third-party scripts
const optimizeThirdPartyScripts = () => {
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer="true"]')
  scripts.forEach(script => {
    script.defer = true
  })
}

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    setInterval(() => {
      const memory = performance.memory
      if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
        console.warn('High memory usage detected:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB'
        })
      }
    }, 10000) // Check every 10 seconds
  }
}

// Network performance monitoring
export const monitorNetworkPerformance = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection
    
    // Monitor connection changes
    connection.addEventListener('change', () => {
      console.log('Network connection changed:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      })
    })
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  const monitor = new PerformanceMonitor()
  
  // Monitor memory usage
  monitorMemoryUsage()
  
  // Monitor network performance
  monitorNetworkPerformance()
  
  // Apply performance optimizations
  optimizePerformance()
  
  return monitor
}

// Export the monitor class
export { PerformanceMonitor }

// Bundle size tracking
export const trackBundleSize = () => {
  if (typeof window === 'undefined') return
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource' && entry.name.includes('.js')) {
        const sizeKB = Math.round(entry.transferSize / 1024)
        console.log(`Bundle loaded: ${entry.name} (${sizeKB} KB)`)
        
        // Track large bundles
        if (sizeKB > 200) {
          console.warn(`Large bundle detected: ${entry.name} (${sizeKB} KB)`)
        }
      }
    })
  })
  
  observer.observe({ entryTypes: ['resource'] })
}

// Performance budget checking
export const checkPerformanceBudget = () => {
  const budgets = {
    lcp: 2500, // 2.5 seconds
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    fcp: 1800, // 1.8 seconds
    bundleSize: 500000 // 500KB
  }
  
  const metrics = window.performanceMonitor?.getPerformanceSummary()
  
  if (metrics) {
    Object.entries(budgets).forEach(([metric, budget]) => {
      const value = metrics[metric]
      if (value && value > budget) {
        console.warn(`Performance budget exceeded: ${metric} (${value} > ${budget})`)
      }
    })
  }
} 