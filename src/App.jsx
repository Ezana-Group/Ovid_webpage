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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load non-critical components for better performance
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Lazy load service pages
const SoftwareDevelopment = lazy(() => import('./components/services/SoftwareDevelopment'))
const ThreeDDesignPrinting = lazy(() => import('./components/services/3DDesignPrinting'))
const WebMobileDevelopment = lazy(() => import('./components/services/WebMobileDevelopment'))
const ITHardwareMaintenance = lazy(() => import('./components/services/ITHardwareMaintenance'))
const DataRecovery = lazy(() => import('./components/services/DataRecovery'))
const ComputerNetworking = lazy(() => import('./components/services/ComputerNetworking'))
const LowCodeAutomation = lazy(() => import('./components/services/LowCodeAutomation'))
const SoftwareInstallation = lazy(() => import('./components/services/SoftwareInstallation'))

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
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>            
            {/* Shared Flowing Background Blob */}
            <div className="pointer-events-none select-none fixed top-0 left-1/2 -translate-x-1/2 z-0 w-[120vw] h-[90vh] md:w-[100vw] md:h-[120vh] bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 rounded-full blur-[120px] opacity-15 md:opacity-20" style={{ filter: 'blur(120px)' }} aria-hidden="true"></div>
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            {/* Hero Content */}
            <main className="pt-16">
              <Hero />
              
              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Services />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <WhyChooseUs />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Portfolio />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </main>
            
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </div>
        } />
        
        <Route path="/website" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            {/* Main Content */}
            <main id="main-content" className="pt-16">
              <Hero />
              
              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Services />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <WhyChooseUs />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Portfolio />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </main>
            
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </div>
        } />
        
        {/* Service Pages */}
        <Route path="/services/software-development" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <SoftwareDevelopment />
            </Suspense>
          </div>
        } />
        
        <Route path="/services/3d-design-printing" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <ThreeDDesignPrinting />
            </Suspense>
          </div>
        } />

        <Route path="/services/web-mobile-development" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <WebMobileDevelopment />
            </Suspense>
          </div>
        } />

        <Route path="/services/it-hardware-maintenance" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <ITHardwareMaintenance />
            </Suspense>
          </div>
        } />

        <Route path="/services/data-recovery" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <DataRecovery />
            </Suspense>
          </div>
        } />

        <Route path="/services/computer-networking" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <ComputerNetworking />
            </Suspense>
          </div>
        } />

        <Route path="/services/low-code-automation" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <LowCodeAutomation />
            </Suspense>
          </div>
        } />

        <Route path="/services/software-installation" element={
          <div className={`App ${darkMode ? 'dark' : ''}`}>
            <InteractiveShadows />
            <CustomCursor />
            
            {/* Navigation */}
            <header role="banner">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            
            <Suspense fallback={<SectionLoader />}>
              <SoftwareInstallation />
            </Suspense>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App 