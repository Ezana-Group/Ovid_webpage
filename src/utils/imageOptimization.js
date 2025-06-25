// Enhanced Image optimization utilities for maximum performance

// Check if WebP is supported
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

// Check if AVIF is supported
export const supportsAVIF = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
}

// Get optimal image format with fallback
export const getOptimalImageFormat = (originalUrl) => {
  const extension = originalUrl.split('.').pop().toLowerCase()
  const baseName = originalUrl.replace(`.${extension}`, '')
  
  if (supportsAVIF()) {
    return `${baseName}.avif`
  } else if (supportsWebP()) {
    return `${baseName}.webp`
  }
  
  return originalUrl
}

// Generate responsive image srcSet with multiple formats
export const generateResponsiveSrcSet = (imagePath, sizes = [480, 768, 1024, 1440, 1920]) => {
  const extension = imagePath.split('.').pop()
  const baseName = imagePath.replace(`.${extension}`, '')
  
  const formats = supportsAVIF() ? ['avif', 'webp', extension] : 
                  supportsWebP() ? ['webp', extension] : 
                  [extension]
  
  return formats.map(format => {
    const srcSet = sizes.map(size => `${baseName}-${size}w.${format} ${size}w`).join(', ')
    return { format, srcSet }
  })
}

// Generate responsive image sizes attribute
export const generateSizes = (breakpoints = {
  mobile: '100vw',
  tablet: '50vw',
  desktop: '33vw'
}) => {
  return `(max-width: 768px) ${breakpoints.mobile}, (max-width: 1024px) ${breakpoints.tablet}, ${breakpoints.desktop}`
}

// Advanced lazy loading observer with intersection threshold
export const createAdvancedLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px 0px',
    threshold: [0, 0.1, 0.5, 1.0]
  }
  
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

// Preload critical images with priority hints
export const preloadCriticalImages = (imageUrls) => {
  if (typeof window === 'undefined') return Promise.resolve()
  
  const promises = imageUrls.map(src => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      
      link.onload = resolve
      link.onerror = reject
      
      document.head.appendChild(link)
    })
  })
  
  return Promise.all(promises)
}

// Progressive image loading with blur placeholder
export const createProgressiveImageLoader = (lowQualitySrc, highQualitySrc, onLoad) => {
  // Load low quality first
  const lowQualityImg = new Image()
  lowQualityImg.onload = () => {
    onLoad(lowQualitySrc, false) // false = not high quality
    
    // Then load high quality
    const highQualityImg = new Image()
    highQualityImg.onload = () => {
      onLoad(highQualitySrc, true) // true = high quality
    }
    highQualityImg.src = highQualitySrc
  }
  lowQualityImg.src = lowQualitySrc
}

// Optimize image loading for performance
export const optimizeImageLoading = () => {
  // Add loading="lazy" to all images that don't have it
  const images = document.querySelectorAll('img:not([loading])')
  images.forEach(img => {
    // Don't lazy load images that are likely above the fold
    const rect = img.getBoundingClientRect()
    if (rect.top > window.innerHeight) {
      img.loading = 'lazy'
    }
  })
  
  // Add decoding="async" for better performance
  const allImages = document.querySelectorAll('img:not([decoding])')
  allImages.forEach(img => {
    img.decoding = 'async'
  })
  
  // Add fetchpriority for critical images
  const criticalImages = document.querySelectorAll('img[data-critical="true"]')
  criticalImages.forEach(img => {
    img.fetchPriority = 'high'
  })
}

// Monitor image loading performance with detailed metrics
export const trackImagePerformance = (imageSrc, startTime = Date.now()) => {
  const img = new Image()
  
  img.onload = () => {
    const loadTime = Date.now() - startTime
    const imageSize = img.naturalWidth * img.naturalHeight
    
    // Track via analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_time', {
        event_category: 'performance',
        event_label: imageSrc,
        value: loadTime,
        custom_parameter_1: imageSize
      })
    }
    
    console.log(`Image loaded in ${loadTime}ms:`, imageSrc, `(${imageSize} pixels)`)
  }
  
  img.onerror = () => {
    console.error('Failed to load image:', imageSrc)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_error', {
        event_category: 'error',
        event_label: imageSrc
      })
    }
  }
  
  img.src = imageSrc
}

// Create optimized image attributes with advanced features
export const createOptimizedImageProps = (src, alt, options = {}) => {
  const {
    sizes = generateSizes(),
    loading = 'lazy',
    decoding = 'async',
    fetchpriority,
    responsive = true,
    critical = false
  } = options
  
  const props = {
    src: getOptimalImageFormat(src),
    alt,
    loading,
    decoding
  }
  
  if (responsive) {
    props.srcSet = generateResponsiveSrcSet(src)[0]?.srcSet || src
    props.sizes = sizes
  }
  
  if (fetchpriority) {
    props.fetchpriority = fetchpriority
  }
  
  if (critical) {
    props['data-critical'] = 'true'
  }
  
  return props
}

// Initialize image optimizations with enhanced features
export const initImageOptimizations = () => {
  if (typeof window === 'undefined') return
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImageLoading()
    })
  } else {
    optimizeImageLoading()
  }
  
  // Re-optimize when new images are added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          if (node.tagName === 'IMG') {
            if (!node.loading) node.loading = 'lazy'
            if (!node.decoding) node.decoding = 'async'
          } else {
            const images = node.querySelectorAll?.('img:not([loading])')
            images?.forEach(img => {
              img.loading = 'lazy'
              img.decoding = 'async'
            })
          }
        }
      })
    })
  })
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// Image compression utility (client-side)
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      // Calculate dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height)
      canvas.width = img.width * ratio
      canvas.height = img.height * ratio
      
      // Draw and compress
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      canvas.toBlob((blob) => {
        resolve(blob)
      }, 'image/jpeg', quality)
    }
    
    img.src = URL.createObjectURL(file)
  })
}

// Critical image preloading for above-the-fold content
export const preloadCriticalImagesList = () => {
  const criticalImages = [
    '/assets/ovid-logo.svg',
    // Add other critical images here
  ]
  
  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    link.fetchPriority = 'high'
    document.head.appendChild(link)
  })
}

// Image format detection and optimization
export const optimizeImageFormats = () => {
  // Add format detection to existing images
  const images = document.querySelectorAll('img[data-optimize="true"]')
  
  images.forEach(img => {
    const originalSrc = img.src
    const optimizedSrc = getOptimalImageFormat(originalSrc)
    
    if (optimizedSrc !== originalSrc) {
      // Create picture element for format fallback
      const picture = document.createElement('picture')
      
      if (supportsAVIF()) {
        const avifSource = document.createElement('source')
        avifSource.srcset = originalSrc.replace(/\.[^.]+$/, '.avif')
        avifSource.type = 'image/avif'
        picture.appendChild(avifSource)
      }
      
      if (supportsWebP()) {
        const webpSource = document.createElement('source')
        webpSource.srcset = originalSrc.replace(/\.[^.]+$/, '.webp')
        webpSource.type = 'image/webp'
        picture.appendChild(webpSource)
      }
      
      picture.appendChild(img.cloneNode(true))
      img.parentNode.replaceChild(picture, img)
    }
  })
} 