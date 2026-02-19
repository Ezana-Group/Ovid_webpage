import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { 
      icon: Target, 
      number: "150+", 
      label: "Projects Completed", 
      color: "text-primary-500",
      gradient: "from-primary-500 to-blue-600",
      bgGradient: "from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
    },
    { 
      icon: Users, 
      number: "50+", 
      label: "Happy Clients", 
      color: "text-accent-blue",
      gradient: "from-accent-blue to-cyan-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    { 
      icon: Award, 
      number: "5+", 
      label: "Years Experience", 
      color: "text-primary-600",
      gradient: "from-purple-500 to-primary-600",
      bgGradient: "from-purple-50 to-primary-50 dark:from-purple-900/20 dark:to-primary-900/20"
    },
    { 
      icon: Globe, 
      number: "10+", 
      label: "Countries Served", 
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    }
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-[#10102a] relative overflow-hidden">
      {/* Colorful Blob Background */}
      <div className="absolute inset-0">
        {/* Animated Colorful Blobs */}
        <div className="absolute top-16 right-10 w-80 h-80 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-56 h-56 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000"></div>
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-sm"></div>
      </div>

      <div ref={ref} className="container-max relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/60 dark:border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ovid International</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Founded with the vision of transforming Africa's technological landscape, 
              Ovid International Ltd stands at the forefront of innovation. We specialize 
              in delivering cutting-edge solutions that bridge the gap between traditional 
              business practices and the digital future.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 dark:text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our team of expert developers, designers, and technology consultants work 
              tirelessly to create solutions that not only meet today's challenges but 
              anticipate tomorrow's opportunities. From software development to 3D design 
              and printing, we're your complete technology partner.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { name: 'Innovation', gradient: 'from-primary-500 to-blue-600', bgGradient: 'from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20' },
                { name: 'Quality', gradient: 'from-purple-500 to-pink-600', bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' },
                { name: 'Excellence', gradient: 'from-accent-blue to-cyan-500', bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20' },
                { name: 'Reliability', gradient: 'from-green-500 to-emerald-600', bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20' }
              ].map((value, index) => (
                <motion.div
                  key={value.name}
                  className={`group relative px-6 py-3 bg-gradient-to-br ${value.bgGradient} rounded-full shadow-lg transition-all duration-500 border border-gray-200/60 dark:border-white/20 overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                  }}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <span className={`relative text-base font-semibold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent dark:text-white`}>
                    {value.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="relative text-center p-8 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-white/20 overflow-hidden group hover:bg-white/80 dark:hover:bg-white/20"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Icon with enhanced styling */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                    
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </motion.div>

                  {/* Number with counter animation */}
                  <motion.div
                    className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label with better typography */}
                  <p className="text-gray-700 dark:text-blue-100 font-semibold text-lg leading-tight">
                    {stat.label}
                  </p>

                  {/* Decorative border glow */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Mission Card */}
          <motion.div 
            className="group relative p-10 bg-gradient-to-br from-primary-50 via-blue-50 to-cyan-50 dark:from-primary-900/30 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 dark:border-primary-800/50 overflow-hidden"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              rotateX: 2,
              rotateY: 2
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary-500/30 rounded-full"></div>
            <div className="absolute top-8 left-8 w-1 h-1 bg-blue-500/40 rounded-full"></div>
            
            {/* Icon */}
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              To empower African businesses and organizations with innovative technology 
              solutions that drive growth, efficiency, and competitive advantage in the 
              global marketplace.
            </p>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-primary-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="group relative p-10 bg-gradient-to-br from-accent-blue/10 via-cyan-50/80 to-emerald-50/60 dark:from-accent-blue/20 dark:via-cyan-900/20 dark:to-emerald-900/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-800/50 overflow-hidden"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              rotateX: 2,
              rotateY: -2
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-accent-blue/10 to-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent-blue/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-emerald-500/40 rounded-full"></div>
            
            {/* Icon */}
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-blue to-emerald-500 rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: -360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-blue to-emerald-600 bg-clip-text text-transparent mb-6">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              To be the leading technology partner in East Africa, recognized for our 
              commitment to excellence, innovation, and the transformative impact we 
              create for our clients and communities.
            </p>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-accent-blue to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 