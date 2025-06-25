import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Users, Trophy, Clock, Globe } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and reliability standards ensure your data and systems are always protected.",
      stats: "99.9% Uptime"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development methodologies and experienced teams ensure rapid project completion without compromising quality.",
      stats: "50% Faster"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies and industry best practices.",
      stats: "10+ Experts"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients across various industries and business sizes.",
      stats: "150+ Projects"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services to keep your systems running smoothly.",
      stats: "Always Available"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International quality standards and best practices adapted for the African market and business environment.",
      stats: "ISO Certified"
    }
  ]

  const achievements = [
    { number: "150+", label: "Projects Delivered", icon: Trophy },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ]

  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Colorful Shadows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(29, 45, 80, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)',
            top: '15%',
            left: '15%',
          }}
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -30, 45, 0],
            scale: [0.9, 1.0, 0.85, 0.9],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full opacity-18 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 100%)',
            bottom: '20%',
            right: '20%',
          }}
          animate={{
            x: [0, -45, 35, 0],
            y: [0, 50, -40, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
        
        <motion.div
          className="absolute w-[320px] h-[320px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 50%, transparent 100%)',
            top: '55%',
            left: '55%',
          }}
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 30, -20, 0],
            scale: [0.95, 0.8, 1.05, 0.95],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Smaller Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full opacity-12 blur-2xl"
            style={{
              background: `hsl(${(i * 45) % 360}, 65%, 65%)`,
              top: `${20 + (i * 8)}%`,
              left: `${15 + (i * 10)}%`,
            }}
            animate={{
              x: [0, Math.cos(i) * 15, Math.sin(i) * 12, 0],
              y: [0, Math.sin(i) * 20, Math.cos(i) * 15, 0],
              scale: [0.8, 1.0, 0.9, 0.8],
              opacity: [0.08, 0.15, 0.12, 0.08],
            }}
            transition={{
              duration: 18 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.5
            }}
          />
        ))}
        
        {/* Layered Mesh Gradient Background */}
        <div 
          className="absolute inset-0 opacity-6"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(29, 45, 80, 0.08) 0%, transparent 45%),
              radial-gradient(circle at 75% 75%, rgba(0, 180, 216, 0.08) 0%, transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 45%)
            `
          }}
        />
      </div>

      <div ref={ref} className="container-max section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose <span className="gradient-text">Ovid International</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine technical excellence, innovative solutions, and unmatched customer service to deliver results that exceed expectations.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-blue rounded-xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold gradient-text">
                    {feature.stats}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-accent-blue rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Achievements
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/90 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-blue text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 