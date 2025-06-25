import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Cpu, Zap } from 'lucide-react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 3
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] -top-1/2 -left-1/2 bg-gradient-to-br from-primary-500/15 via-accent-blue/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-1/2 -right-1/2 bg-gradient-to-tl from-accent-blue/20 via-cyan-400/15 to-transparent rounded-full blur-3xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 0.7, 1.2],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-blue rounded-full opacity-60"
            style={{
              left: `${15 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B4D8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='0' cy='30' r='1'/%3E%3Ccircle cx='60' cy='30' r='1'/%3E%3Ccircle cx='30' cy='0' r='1'/%3E%3Ccircle cx='30' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Enhanced Logo */}
        <motion.div
          className="relative w-28 h-28 bg-gradient-to-br from-primary-500 via-accent-blue to-cyan-400 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          {/* Inner glow rings */}
          <div className="absolute inset-2 border border-white/20 rounded-2xl"></div>
          <div className="absolute inset-4 border border-white/10 rounded-xl"></div>
          
          {/* Rotating CPU icon */}
          <motion.div
            className="relative z-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-12 h-12 text-white drop-shadow-lg" />
          </motion.div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-blue rounded-3xl opacity-0"
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          {/* Corner accents */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

        {/* Enhanced Company Name */}
        <motion.h1
          className="text-5xl font-bold text-white mb-3 text-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span 
            className="block"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            OVID
          </motion.span>
          <motion.span 
            className="block gradient-text text-4xl"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            INTERNATIONAL
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl text-cyan-100 mb-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>Empowering Africa Through Technology</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-5 h-5 text-cyan-400" />
          </motion.div>
        </motion.p>

        {/* Enhanced Progress Bar */}
        <div className="w-80 mx-auto">
          <motion.div
            className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-6 backdrop-blur-sm border border-white/20"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-blue to-cyan-400 rounded-full relative overflow-hidden"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-blue/20 to-cyan-400/20 blur-sm"></div>
          </motion.div>
          
          <motion.div
            className="flex justify-between items-center text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-sm font-medium">Loading Experience...</span>
            <motion.span
              className="text-lg font-bold gradient-text"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.floor(Math.min(progress, 100))}%
            </motion.span>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent-blue rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen 