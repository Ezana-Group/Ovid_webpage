import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const InteractiveShadows = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  // Calculate shadow positions based on mouse movement
  const shadow1X = (mousePosition.x / windowSize.width) * 100
  const shadow1Y = (mousePosition.y / windowSize.height) * 100
  const shadow2X = ((windowSize.width - mousePosition.x) / windowSize.width) * 100
  const shadow2Y = ((windowSize.height - mousePosition.y) / windowSize.height) * 100
  const shadow3X = (mousePosition.x / windowSize.width) * 50 + 25
  const shadow3Y = (mousePosition.y / windowSize.height) * 50 + 25

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Shadow - Blue/Cyan */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #00B4D8, #0077B6, #023E8A)',
          left: `${shadow1X}%`,
          top: `${shadow1Y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Shadow - Purple/Pink */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #7209B7, #A663CC, #F72585)',
          left: `${shadow2X}%`,
          top: `${shadow2Y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Tertiary Shadow - Orange/Yellow */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-12 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #FF6B35, #F7931E, #FFD23F)',
          left: `${shadow3X}%`,
          top: `${shadow3Y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Quaternary Shadow - Green/Teal */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #06FFA5, #00CC88, #007F5F)',
          left: `${100 - shadow1X}%`,
          top: `${100 - shadow1Y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1.2, 0.7, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Mouse Follower Shadow - Dynamic Color */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-25 blur-xl"
        style={{
          background: `radial-gradient(circle, 
            hsl(${(mousePosition.x / windowSize.width) * 360}, 70%, 60%) 0%, 
            hsl(${(mousePosition.y / windowSize.height) * 360}, 80%, 50%) 50%, 
            transparent 100%)`,
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ambient Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full opacity-30 blur-sm"
          style={{
            background: `hsl(${(i * 45 + (mousePosition.x / 10)) % 360}, 70%, 60%)`,
            left: `${10 + (i * 12) + (mousePosition.x / windowSize.width) * 20}%`,
            top: `${10 + (i * 8) + (mousePosition.y / windowSize.height) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}

      {/* Corner Accents */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-8 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #1D2D50, #00B4D8)',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-8 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #00B4D8, #7209B7)',
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  )
}

export default InteractiveShadows 