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

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white dark:bg-[#10102a] relative overflow-hidden">
      {/* Colorful Blob Background */}
      <div className="absolute inset-0">
        {/* Animated Colorful Blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-80 h-80 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000"></div>
        <div className="absolute top-32 left-1/2 w-56 h-56 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-sm"></div>
      </div>

      <div ref={ref} className="container-max relative z-10 py-16 lg:py-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/60 dark:border-white/20 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ovid International</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We combine technical excellence, innovative solutions, and unmatched customer service to deliver results that exceed expectations.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group relative p-6 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-blue rounded-xl mb-4 shadow-lg"
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
                <p className="text-gray-700 dark:text-blue-100 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {feature.stats}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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