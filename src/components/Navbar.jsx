import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <motion.nav
      role="banner"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glass Background with Edge Effects */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'stained-glass' 
          : 'glass-navbar glass-effect glass-refraction glass-magnify glass-edge-glow glass-distortion bg-white/8 dark:bg-gray-900/15'
      }`}>
        {/* Backdrop Blur */}
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        
        {/* Glass Refraction Effect - Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        
        {/* Glass Refraction Effect - Bottom Edge */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60' 
            : 'bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40'
        }`}></div>
        
        {/* Side Glass Effects */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        {/* Magnifying Glass Effect - Curved Edges */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        
        {/* Inner Glass Reflection */}
        <div className={`absolute inset-2 rounded-lg transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-br from-white/10 via-transparent to-white/5' 
            : 'bg-gradient-to-br from-white/5 via-transparent to-white/3'
        }`}></div>
        
        {/* Glass Noise Texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Advanced Shadow Effects */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'shadow-lg shadow-black/5' 
          : 'shadow-md shadow-black/3'
      }`}></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.button
            className="flex items-center space-x-3 text-left"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection('#hero', e)}
            aria-label="Go to homepage - Ovid International"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14">
              <img 
                src="/assets/ovid-logo.svg" 
                alt="Ovid International Logo" 
                className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              />
            </div>
            <div className="font-bold text-xl lg:text-2xl">
              <span className={`transition-all duration-500 ${
                isScrolled 
                  ? 'text-white drop-shadow-md' 
                  : 'gradient-text'
              }`}>OVID</span>
              <span className={`block text-xs lg:text-sm font-medium -mt-1 transition-all duration-500 ${
                isScrolled 
                  ? 'text-white/80 drop-shadow-sm' 
                  : 'text-primary-600 dark:text-primary-400'
              }`}>International</span>
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={(e) => scrollToSection(item.href, e)}
                className={`transition-colors duration-500 font-medium relative group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md px-2 py-1 min-h-[44px] ${
                  isScrolled 
                    ? 'text-white/95 hover:text-white drop-shadow-sm' 
                    : 'text-white/90 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                aria-label={item.ariaLabel}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-white shadow-sm' 
                    : 'bg-primary-500'
                }`}></span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] min-w-[44px] ${
                isScrolled 
                  ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <Sun className={`w-5 h-5 ${isScrolled ? 'text-yellow-300 drop-shadow-sm' : 'text-yellow-400'}`} />
              ) : (
                <Moon className={`w-5 h-5 ${isScrolled ? 'text-white drop-shadow-sm' : 'text-blue-300'}`} />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] min-w-[44px] ${
                isScrolled 
                  ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} navigation menu`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-white drop-shadow-sm' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-white drop-shadow-sm' : 'text-white'}`} />
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
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={(e) => scrollToSection(item.href, e)}
                    className="w-full text-left px-4 py-3 text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[48px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    role="menuitem"
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar