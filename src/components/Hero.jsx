import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Cloud,
  Settings2,
  Workflow,
  Share2,
  DownloadCloud
} from 'lucide-react'

const STAINED_TAGS = [
  { label: 'Networking', icon: Share2, bg: 'from-cyan-200/70 to-blue-200/40 dark:from-cyan-400/60 dark:to-blue-500/40', border: 'border-cyan-200/60 dark:border-cyan-300/40', text: 'text-gray-800 dark:text-white' },
  { label: 'Data Recovery', icon: DownloadCloud, bg: 'from-purple-200/70 to-pink-200/40 dark:from-purple-400/60 dark:to-pink-400/40', border: 'border-purple-200/60 dark:border-purple-300/40', text: 'text-gray-800 dark:text-white' },
  { label: '3D Design', icon: Box, bg: 'from-green-200/70 to-emerald-200/40 dark:from-green-400/60 dark:to-emerald-400/40', border: 'border-green-200/60 dark:border-green-300/40', text: 'text-gray-800 dark:text-white' },
  { label: 'Cloud Systems', icon: Cloud, bg: 'from-cyan-100/70 to-blue-100/40 dark:from-cyan-300/60 dark:to-blue-300/40', border: 'border-cyan-100/60 dark:border-cyan-200/40', text: 'text-gray-800 dark:text-white' },
  { label: 'Automation', icon: Settings2, bg: 'from-pink-200/70 to-rose-200/40 dark:from-pink-400/60 dark:to-rose-400/40', border: 'border-pink-200/60 dark:border-pink-300/40', text: 'text-gray-800 dark:text-white' },
  { label: 'Low-Code Apps', icon: Workflow, bg: 'from-blue-200/70 to-indigo-200/40 dark:from-blue-400/60 dark:to-indigo-400/40', border: 'border-blue-200/60 dark:border-blue-300/40', text: 'text-gray-800 dark:text-white' },
]

// Optimized animation variants with reduced complexity
const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.1 + i * 0.05, 
      duration: 0.4, 
      ease: 'easeOut' 
    } 
  })
}

const Hero = () => {
  // Typewriter effect for tagline - optimized
  const tagline = 'Empowering Africa Through Technology ⚡'
  const [typed, setTyped] = useState('')
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i + 1))
      i++
      if (i === tagline.length) clearInterval(interval)
    }, 50) // Slightly faster for better UX
    return () => clearInterval(interval)
  }, [])

  // For matching OVID/INTERNATIONAL width - optimized
  const ovidRef = useRef(null)
  const intlRef = useRef(null)
  const [maxWidth, setMaxWidth] = useState(undefined)
  
  useEffect(() => {
    if (ovidRef.current && intlRef.current) {
      const ovidWidth = ovidRef.current.offsetWidth
      const intlWidth = intlRef.current.offsetWidth
      setMaxWidth(Math.max(ovidWidth, intlWidth))
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#10102a]">
      {/* Optimized Background - Reduced complexity */}
      <div className="absolute inset-0">
        {/* Simplified background blobs with reduced animation */}
        <div className="absolute top-16 right-10 w-80 h-80 bg-gradient-to-r from-pink-300 to-orange-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-32 left-16 w-72 h-72 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-16 right-1/4 w-56 h-56 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-20"></div>
        {/* Glass Overlay for Softness */}
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-sm"></div>
      </div>
      
      {/* Content Row */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        {/* LEFT SIDE: Branding & Visual Identity */}
        <div className="flex-1 flex flex-col items-start justify-center py-12 w-full space-y-4 md:space-y-6">
          {/* Main Heading: OVID (top), INTERNATIONAL (bottom), same width */}
          <div className="flex flex-col items-start md:items-start" style={maxWidth ? { width: maxWidth } : {}}>
            <span
              ref={ovidRef}
              className="block text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent text-left leading-tight"
              style={maxWidth ? { width: maxWidth } : {}}
            >
              OVID
            </span>
            <span
              ref={intlRef}
              className="block text-3xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-wide text-left leading-tight"
              style={maxWidth ? { width: maxWidth } : {}}
            >
              INTERNATIONAL
            </span>
          </div>
          
          {/* Supporting Text */}
          <div className="text-lg md:text-xl text-cyan-700 dark:text-cyan-200 font-medium mb-2">
            Driven by Design. Powered by Innovation.
          </div>
          
          {/* Stained Glass Tags - Optimized animations */}
          <div className="w-full flex flex-wrap gap-3 mb-2">
            {STAINED_TAGS.map((tag, i) => {
              const Icon = tag.icon
              return (
                <motion.span
                  key={tag.label}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full border font-medium shadow-lg hover:scale-105 transition-transform cursor-pointer text-base backdrop-blur-md bg-gradient-to-br ${tag.bg} ${tag.border} ${tag.text}`}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
                >
                  <Icon className="w-5 h-5" />
                  {tag.label}
                </motion.span>
              )
            })}
          </div>
        </div>
        
        {/* RIGHT SIDE: Glassmorphism Panel */}
        <div className="flex-1 flex justify-end w-full">
          <motion.div
            className="w-full max-w-4xl min-h-[560px] rounded-3xl border border-gray-200/60 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center p-10 md:p-16 space-y-4 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Tagline (large) */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center leading-tight">
              {typed}
              <span className="inline-block w-3 h-7 align-middle">
                <span className="inline-block bg-gray-900 dark:bg-white rounded-sm w-1 h-6 ml-1 align-middle" style={{ verticalAlign: 'middle' }}></span>
              </span>
            </h2>
            
            {/* Subheading */}
            <div className="text-lg md:text-xl text-cyan-700 dark:text-cyan-200 font-medium text-center mt-1">
              Smart solutions in automation, cloud, 3D, and IT systems.
            </div>
            
            {/* Paragraph Description */}
            <p className="text-base md:text-lg text-gray-700 dark:text-blue-100 text-center max-w-2xl leading-relaxed mt-2">
              At Ovid International, we design and deploy future-ready digital solutions<br />
              to help African businesses scale with confidence — from 3D design to low-code automation.
            </p>
            
            {/* CTA Buttons - Optimized for performance */}
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
              <button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white dark:text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Services
              </button>
              <button
                className="px-8 py-4 bg-transparent border border-cyan-400 text-cyan-700 dark:text-cyan-200 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Technology
              </button>
              <button
                className="px-6 py-3 bg-gray-100/60 dark:bg-white/10 border border-gray-200/60 dark:border-white/20 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 text-base"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 