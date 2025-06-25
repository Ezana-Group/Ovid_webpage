import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'
import { ChevronDown, Rocket, Users, Zap, Globe, ChevronRight, Sparkles } from 'lucide-react'
import ThreeBackground from './ThreeBackground'

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const typewriterTexts = [
    "Empowering Africa Through Technology ⚡",
    "Building Tomorrow's Digital Solutions",
    "Innovating with Purpose and Precision"
  ]
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    let timeout
    const currentText = typewriterTexts[currentTextIndex]
    
    if (typewriterText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypewriterText(currentText.slice(0, typewriterText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypewriterText('')
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
      }, 3000)
    }
    
    return () => clearTimeout(timeout)
  }, [typewriterText, currentTextIndex])

  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTechnology = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0A0F2C 0%, #101730 100%)'
      }}
    >
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <ThreeBackground />
            {/* Floating 3D Elements */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Sphere args={[0.5, 64, 64]} position={[-4, 2, -2]}>
                <MeshDistortMaterial
                  color="#1BE7FF"
                  transparent
                  opacity={0.3}
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
              <Sphere args={[0.3, 32, 32]} position={[4, -1, -1]}>
                <MeshDistortMaterial
                  color="#FF4BC1"
                  transparent
                  opacity={0.4}
                  distort={0.5}
                  speed={3}
                />
              </Sphere>
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2C]/90 via-[#101730]/80 to-[#1a1f3a]/75 z-10"></div>
      
      {/* Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl z-15"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1BE7FF]/15 rounded-full blur-3xl z-15"></div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 z-15 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B4D8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='0' cy='30' r='1'/%3E%3Ccircle cx='60' cy='30' r='1'/%3E%3Ccircle cx='30' cy='0' r='1'/%3E%3Ccircle cx='30' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-20 text-center section-padding container-max"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Premium Logo with Advanced Effects */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-32 h-32 bg-gradient-to-br from-[#00B4D8] via-[#1BE7FF] to-[#B0FF92] rounded-3xl flex items-center justify-center shadow-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 25px 50px rgba(0, 180, 216, 0.4), 0 0 40px rgba(27, 231, 255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Glow Ring */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#1BE7FF] to-[#00B4D8] rounded-3xl opacity-30 blur-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Tech Circuit Pattern */}
              <div className="absolute inset-2 border border-white/30 rounded-2xl"></div>
              <div className="absolute inset-4 border border-white/20 rounded-xl"></div>
              
              {/* Logo Content */}
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-14 h-14 text-white drop-shadow-lg" />
              </motion.div>
              
              {/* Floating Sparkles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#1BE7FF] rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${20 + i * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading with Shimmer */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.span 
              className="block relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              OVID
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.span>
            <motion.span 
              className="block relative bg-gradient-to-r from-[#1BE7FF] via-[#00B4D8] to-[#B0FF92] bg-clip-text text-transparent text-7xl md:text-8xl lg:text-9xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient-shimmer 3s ease-in-out infinite'
              }}
            >
              INTERNATIONAL
              {/* Tech Accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-[#FF4BC1] rounded-full"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.3, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.span>
          </motion.h1>

                     {/* Typewriter Tagline */}
           <motion.div
             className="h-16 flex items-center justify-center"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.9 }}
           >
             <div className="text-2xl md:text-3xl lg:text-4xl text-[#1BE7FF] font-light flex items-center gap-3">
               <span className="font-mono">{typewriterText}</span>
               <motion.span
                 className="w-1 h-8 bg-[#1BE7FF]"
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 1, repeat: Infinity }}
               />
             </div>
           </motion.div>

          {/* Enhanced Subtitle with Animated Phrases */}
          <motion.div
            className="text-lg md:text-xl text-[#D9E1EC] mb-12 max-w-3xl mx-auto space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="leading-relaxed">
              Leading the digital transformation across East Africa with innovative solutions in 
            </p>
            <motion.div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { text: "3D design", color: "#B0FF92", delay: 0 },
                { text: "cloud systems", color: "#1BE7FF", delay: 0.2 },
                { text: "automation technology", color: "#FF4BC1", delay: 0.4 }
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm font-medium"
                  style={{ color: item.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + item.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#00B4D8] to-[#1BE7FF] text-white font-bold text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Pulse Glow Effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#00B4D8] to-[#1BE7FF] rounded-full opacity-0 blur-lg"
                whileHover={{ opacity: 0.7 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-5 h-5" />
                Discover Our Services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </span>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            <motion.button
              className="group relative flex items-center space-x-3 px-10 py-5 border-2 border-[#1BE7FF]/50 text-[#1BE7FF] font-bold text-lg rounded-full overflow-hidden backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 30px rgba(27, 231, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTechnology}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                className="flex items-center space-x-3"
                animate={isHovering ? { x: [0, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Explore Our Technology</span>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              
              {/* 3D Press Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[#1BE7FF] rounded-full opacity-0"
                whileHover={{ opacity: 0.3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

         {/* Scroll Indicator - Outside main content */}
         <motion.div
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2 }}
         >
           <motion.button
             onClick={scrollToNext}
             className="flex flex-col items-center text-[#1BE7FF] hover:text-white transition-colors"
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <span className="text-sm mb-2 font-medium">Scroll to explore</span>
             <ChevronDown className="w-6 h-6" />
           </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 