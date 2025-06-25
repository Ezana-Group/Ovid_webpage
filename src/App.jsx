import { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import InteractiveShadows from './components/InteractiveShadows'
import { initAnalytics, trackSectionView } from './utils/analytics'
import { initImageOptimizations, preloadCriticalImagesList } from './utils/imageOptimization'
import { initPerformanceMonitoring } from './utils/performance'

// Lazy load non-critical components for better performance
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20" role="status" aria-label="Loading section">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    <span className="sr-only">Loading...</span>
  </div>
)

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Initialize all performance and analytics systems
    initAnalytics()
    initImageOptimizations()
    initPerformanceMonitoring()
    preloadCriticalImagesList()
    
    // Track initial page load
    window.addEventListener('load', () => {
      // Track page load completion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_fully_loaded', {
          event_category: 'performance',
          event_label: 'initial_load'
        })
      }
    })
    
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Skip to main content for accessibility
  const skipToMain = (e) => {
    e.preventDefault()
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        onClick={skipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <InteractiveShadows />
      <CustomCursor />
      
      {/* Navigation */}
      <header role="banner">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      
      {/* Main Content */}
      <motion.main
        id="main-content"
        role="main"
        tabIndex="-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="focus:outline-none"
      >
        {/* Hero Section - Critical, not lazy loaded */}
        <section id="hero" aria-label="Hero section" className="lazy-section">
          <Hero />
        </section>
        
        {/* Lazy loaded sections with loading fallbacks */}
        <Suspense fallback={<SectionLoader />}>
          <section id="about" aria-label="About us section" className="lazy-section">
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="services" aria-label="Our services section" className="lazy-section">
            <Services />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="why-choose-us" aria-label="Why choose us section" className="lazy-section">
            <WhyChooseUs />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="portfolio" aria-label="Our portfolio section" className="lazy-section">
            <Portfolio />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="contact" aria-label="Contact us section" className="lazy-section">
            <Contact />
          </section>
        </Suspense>
      </motion.main>
      
      {/* Footer */}
      <Suspense fallback={<SectionLoader />}>
        <footer role="contentinfo" className="lazy-section">
          <Footer />
        </footer>
      </Suspense>
    </div>
  )
}

export default App 