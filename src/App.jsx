import { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import { initAnalytics, trackSectionView } from './utils/analytics'
import { initImageOptimizations, preloadCriticalImagesList } from './utils/imageOptimization'
import { initPerformanceMonitoring } from './utils/performance'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Lazy load ALL non-critical components for maximum performance
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./components/TermsOfService'))

// Lazy load heavy 3D components only when needed
const ThreeBackground = lazy(() => import('./components/ThreeBackground'))
const GlassLensDemo2 = lazy(() => import('./components/GlassLensDemo2'))
const InteractiveShadows = lazy(() => import('./components/InteractiveShadows'))
const CustomCursor = lazy(() => import('./components/CustomCursor'))

// Optimized loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20" role="status" aria-label="Loading section">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    <span className="sr-only">Loading...</span>
  </div>
)

// Performance-optimized page wrapper
const PageWrapper = ({ children, darkMode, showBackground = false }) => (
  <div className={`App ${darkMode ? 'dark' : ''}`}>
    {showBackground && (
      <div className="pointer-events-none select-none fixed top-0 left-1/2 -translate-x-1/2 z-0 w-[120vw] h-[90vh] md:w-[100vw] md:h-[120vh] bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 rounded-full blur-[120px] opacity-15 md:opacity-20" style={{ filter: 'blur(120px)' }} aria-hidden="true"></div>
    )}
    {children}
  </div>
)

function ScrollToSectionOnHome() {
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search)
      const scrollTo = params.get('scrollTo')
      if (scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(scrollTo) || document.querySelector(`#${scrollTo}`)
          if (element) {
            const offset = 80
            const elementPosition = element.offsetTop - offset
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }
  }, [location])
  return null
}

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
    <Router>
      <ScrollToSectionOnHome />
      <Routes>
        {/* Homepage - Optimized for performance */}
        <Route path="/" element={
          <PageWrapper darkMode={darkMode} showBackground={true}>
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            {/* Main Content - Lazy loaded for better performance */}
            <main className="pt-16">
              <Hero />
              <Suspense fallback={<SectionLoader />}><About /></Suspense>
              <Suspense fallback={<SectionLoader />}><Services /></Suspense>
              <Suspense fallback={<SectionLoader />}><WhyChooseUs /></Suspense>
              <Suspense fallback={<SectionLoader />}><Portfolio /></Suspense>
              <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
          </PageWrapper>
        } />
        {/* Website Page - Alternative layout */}
        <Route path="/website" element={
          <PageWrapper darkMode={darkMode} showBackground={true}>
            <Suspense fallback={<SectionLoader />}><InteractiveShadows /></Suspense>
            <Suspense fallback={<SectionLoader />}><CustomCursor /></Suspense>
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            {/* Main Content */}
            <main id="main-content" className="pt-16">
              <Hero />
              <Suspense fallback={<SectionLoader />}><About /></Suspense>
              <Suspense fallback={<SectionLoader />}><Services /></Suspense>
              <Suspense fallback={<SectionLoader />}><WhyChooseUs /></Suspense>
              <Suspense fallback={<SectionLoader />}><Portfolio /></Suspense>
              <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
          </PageWrapper>
        } />
        {/* Legal Pages - Separate chunks for better performance */}
        <Route path="/privacy-policy" element={
          <PageWrapper darkMode={darkMode}>
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            {/* Privacy Policy Content */}
            <main className="pt-16">
              <Suspense fallback={<SectionLoader />}><PrivacyPolicy /></Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
          </PageWrapper>
        } />
        <Route path="/terms-of-service" element={
          <PageWrapper darkMode={darkMode}>
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            {/* Terms of Service Content */}
            <main className="pt-16">
              <Suspense fallback={<SectionLoader />}><TermsOfService /></Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
          </PageWrapper>
        } />
      </Routes>
    </Router>
  )
}

export default App 