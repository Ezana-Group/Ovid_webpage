import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Home', href: '#hero', ariaLabel: 'Go to home section' },
    { name: 'About', href: '#about', ariaLabel: 'Go to about us section' },
    { name: 'Services', href: '#services', ariaLabel: 'Go to our services section' },
    { name: 'Why Choose Us', href: '#why-choose-us', ariaLabel: 'Go to why choose us section' },
    { name: 'Portfolio', href: '#portfolio', ariaLabel: 'Go to our portfolio section' },
    { name: 'Contact', href: '#contact', ariaLabel: 'Go to contact us section' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href, event) => {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      // Announce navigation to screen readers
      const announcement = `Navigating to ${element.getAttribute('aria-label') || href.replace('#', '')} section`
      const ariaLive = document.createElement('div')
      ariaLive.setAttribute('aria-live', 'polite')
      ariaLive.setAttribute('aria-atomic', 'true')
      ariaLive.className = 'sr-only'
      ariaLive.textContent = announcement
      document.body.appendChild(ariaLive)
      setTimeout(() => document.body.removeChild(ariaLive), 1000)
    }
    setIsMobileMenuOpen(false)
  }

  const handleMenuClick = (item, event) => {
    if (item.href.startsWith('/')) {
      setIsMobileMenuOpen(false)
    } else if (item.href.startsWith('#')) {
      const section = item.href.replace('#', '')
      event.preventDefault()
      navigate(`/?scrollTo=${section}`)
      setIsMobileMenuOpen(false)
    }
  }

  // Scroll to section after navigation if needed
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const href = location.state.scrollTo
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          const offset = 80
          const elementPosition = element.offsetTop - offset
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100) // Wait for DOM to update
    }
  }, [location])

  const renderMenuItem = (item, index, isMobile = false) => {
    const isRouterLink = item.href.startsWith('/')
    if (isRouterLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`transition-colors duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-3 py-2 text-sm ${
            isScrolled 
              ? 'text-white/95 hover:text-white' 
              : 'text-white/90 hover:text-white'
          } ${isMobile ? 'w-full text-left px-4 py-3 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg min-h-[48px]' : ''}`}
          initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
          animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: index * (isMobile ? 0.1 : 0.05), duration: 0.3 }}
          whileHover={isMobile ? {} : { y: -1 }}
          aria-label={item.ariaLabel}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
          {!isMobile && (
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
              isScrolled 
                ? 'bg-white' 
                : 'bg-cyan-400'
            }`}></span>
          )}
        </Link>
      )
    } else {
      return (
        <motion.button
          key={item.name}
          onClick={(e) => handleMenuClick(item, e)}
          className={`transition-colors duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-3 py-2 text-sm ${
            isScrolled 
              ? 'text-white/95 hover:text-white' 
              : 'text-white/90 hover:text-white'
          } ${isMobile ? 'w-full text-left px-4 py-3 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg min-h-[48px]' : ''}`}
          initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
          animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: index * (isMobile ? 0.1 : 0.05), duration: 0.3 }}
          whileHover={isMobile ? {} : { y: -1 }}
          aria-label={item.ariaLabel}
        >
          {item.name}
          {!isMobile && (
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
              isScrolled 
                ? 'bg-white' 
                : 'bg-cyan-400'
            }`}></span>
          )}
        </motion.button>
      )
    }
  }

  return (
    <motion.nav
      role="banner"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 container-max">
        <div className="flex items-center justify-between h-14">
          <motion.button
            className="flex items-center space-x-2 text-left"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => scrollToSection('#hero', e)}
            aria-label="Go to homepage - Ovid International"
          >
            <div className="w-8 h-8">
              <img 
                src="/assets/ovid-logo.svg" 
                alt="Ovid International Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-bold text-lg">
              <span className={`transition-all duration-500 ${
                isScrolled 
                  ? 'text-white' 
                  : 'gradient-text'
              }`}>OVID</span>
              <span className={`block text-xs font-medium -mt-1 transition-all duration-500 ${
                isScrolled 
                  ? 'text-white/80' 
                  : 'text-cyan-400'
              }`}>International</span>
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </div>

          <div className="flex items-center space-x-3">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isScrolled 
                  ? 'bg-white/20 hover:bg-white/30' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-yellow-300" />
              ) : (
                <Moon className="w-4 h-4 text-blue-300" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isScrolled 
                  ? 'bg-white/20 hover:bg-white/30' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} navigation menu`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden fixed top-16 left-0 right-0 z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {/* Mobile Glass Background */}
            <div className={`absolute inset-0 ${
              isScrolled 
                ? 'stained-glass-mobile' 
                : 'glass-navbar glass-effect glass-refraction bg-white/15 dark:bg-gray-900/25'
            }`}>
              {/* Mobile Backdrop Blur */}
              <div className="absolute inset-0 backdrop-blur-xl"></div>
              
              {/* Mobile Glass Edges */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              
              {/* Mobile Inner Reflection */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/8 via-transparent to-white/4"></div>
              
              {/* Mobile Shadow */}
              <div className="absolute inset-0 shadow-xl shadow-black/20"></div>
            </div>
            
            {/* Mobile Menu Content */}
            <div className="relative z-10 container-max section-padding py-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => renderMenuItem(item, index, true))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar