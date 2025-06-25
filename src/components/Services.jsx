import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Layers, Smartphone, Settings, ArrowRight, X, Check, Star, Clock, Users, Zap, HardDrive, Network, Workflow, Download } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to streamline your business operations and drive digital transformation.",
      features: ["Web Applications", "Enterprise Software", "API Development", "Database Design"],
      gradient: "from-blue-500 to-primary-600",
      bgGradient: "from-blue-50 to-primary-50",
      darkBgGradient: "from-blue-900/20 to-primary-900/20",
      detailedDescription: "Transform your business with our comprehensive software development services. We specialize in creating scalable, secure, and innovative solutions that address your unique challenges and accelerate your digital transformation journey.",
      technologies: ["React", "Node.js", "Python", "Java", "TypeScript", "GraphQL", "PostgreSQL", "MongoDB"],
      benefits: [
        { icon: Zap, title: "Performance Optimized", description: "Lightning-fast applications with optimized performance" },
        { icon: Star, title: "Scalable Architecture", description: "Built to grow with your business needs" },
        { icon: Users, title: "User-Centric Design", description: "Intuitive interfaces that users love" },
        { icon: Check, title: "Quality Assurance", description: "Rigorous testing ensures reliability" }
      ],
      process: ["Requirements Analysis", "System Architecture", "Development & Testing", "Deployment & Support"],
      timeline: "4-12 weeks"
    },
    {
      icon: Layers,
      title: "3D Design & Printing",
      description: "Revolutionary 3D design and printing services that bring your ideas to life with precision, creativity, and advanced manufacturing techniques.",
      features: ["3D Modeling", "Prototyping", "Product Design", "Custom Manufacturing"],
      gradient: "from-accent-blue to-cyan-500",
      bgGradient: "from-cyan-50 to-blue-50",
      darkBgGradient: "from-cyan-900/20 to-blue-900/20",
      detailedDescription: "Bring your innovative ideas to life with our advanced 3D design and printing services. From concept to creation, we provide end-to-end solutions that transform your vision into tangible, high-quality products.",
      technologies: ["CAD Software", "SLA Printing", "FDM Printing", "Resin Printing", "Multi-Material", "Post-Processing"],
      benefits: [
        { icon: Star, title: "Precision Engineering", description: "Accurate designs with tight tolerances" },
        { icon: Zap, title: "Rapid Prototyping", description: "Quick turnaround from design to prototype" },
        { icon: Users, title: "Custom Solutions", description: "Tailored to your specific requirements" },
        { icon: Check, title: "Quality Materials", description: "Premium materials for lasting results" }
      ],
      process: ["Concept Development", "3D Modeling", "Prototype Creation", "Final Production"],
      timeline: "1-6 weeks"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Responsive web applications and native mobile apps that deliver exceptional user experiences across all platforms and devices.",
      features: ["Responsive Design", "Mobile Apps", "Progressive Web Apps", "Cross-platform Solutions"],
      gradient: "from-primary-500 to-purple-600",
      bgGradient: "from-primary-50 to-purple-50",
      darkBgGradient: "from-primary-900/20 to-purple-900/20",
      detailedDescription: "Create stunning digital experiences with our comprehensive web and mobile development services. We build responsive, fast, and user-friendly applications that work seamlessly across all devices and platforms.",
      technologies: ["React Native", "Flutter", "Vue.js", "Next.js", "PWA", "iOS", "Android", "Responsive Design"],
      benefits: [
        { icon: Users, title: "Cross-Platform", description: "Reach users on all devices and platforms" },
        { icon: Zap, title: "Fast Performance", description: "Optimized for speed and efficiency" },
        { icon: Star, title: "Modern UI/UX", description: "Beautiful, intuitive user interfaces" },
        { icon: Check, title: "App Store Ready", description: "Fully prepared for deployment" }
      ],
      process: ["UI/UX Design", "Frontend Development", "Backend Integration", "Testing & Launch"],
      timeline: "6-16 weeks"
    },
    {
      icon: Settings,
      title: "IT Hardware & Maintenance",
      description: "Comprehensive IT infrastructure solutions including hardware procurement, installation, maintenance, and 24/7 technical support.",
      features: ["Hardware Setup", "System Maintenance", "Technical Support", "Network Solutions"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20",
      detailedDescription: "Ensure your business runs smoothly with our comprehensive IT hardware and maintenance services. From initial setup to ongoing support, we keep your technology infrastructure running at peak performance.",
      technologies: ["Server Management", "Network Infrastructure", "Cloud Solutions", "Security Systems", "Backup Solutions", "Monitoring Tools"],
      benefits: [
        { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
        { icon: Star, title: "Proactive Monitoring", description: "Prevent issues before they occur" },
        { icon: Zap, title: "Quick Response", description: "Rapid resolution of technical issues" },
        { icon: Check, title: "Cost Effective", description: "Reduce downtime and operational costs" }
      ],
      process: ["Infrastructure Assessment", "System Setup", "Configuration & Testing", "Ongoing Maintenance"],
      timeline: "1-4 weeks setup"
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "We recover critical data from corrupted, deleted, or damaged storage devices including hard drives, SSDs, USB drives, and SD cards.",
      features: ["Hard Drive Recovery", "SSD Data Retrieval", "USB Drive Restoration", "Memory Card Recovery"],
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      darkBgGradient: "from-red-900/20 to-orange-900/20",
      detailedDescription: "Don't let data loss paralyze your business. Our expert data recovery services utilize advanced techniques and state-of-the-art equipment to retrieve your valuable information from damaged, corrupted, or failed storage devices with the highest success rates in the industry.",
      technologies: ["Professional Recovery Tools", "Clean Room Facilities", "Hex Editors", "Disk Imaging", "RAID Recovery", "Database Repair"],
      benefits: [
        { icon: Clock, title: "Emergency Service", description: "24/7 emergency data recovery support" },
        { icon: Star, title: "High Success Rate", description: "95%+ data recovery success rate" },
        { icon: Check, title: "Secure Process", description: "Confidential and secure data handling" },
        { icon: Users, title: "Expert Technicians", description: "Certified data recovery specialists" }
      ],
      process: ["Initial Assessment", "Device Analysis", "Recovery Process", "Data Verification & Delivery"],
      timeline: "1-5 days"
    },
    {
      icon: Network,
      title: "Computer Networking",
      description: "We design, set up, and maintain secure wired and wireless networks for homes, businesses, and institutions, including routers, switches, and structured cabling.",
      features: ["Network Design", "Router Configuration", "Switch Installation", "Wireless Setup"],
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-50 to-green-50",
      darkBgGradient: "from-teal-900/20 to-green-900/20",
      detailedDescription: "Build a robust, secure, and scalable network infrastructure that supports your business growth. Our networking experts design and implement comprehensive solutions that ensure reliable connectivity, optimal performance, and enterprise-grade security for your organization.",
      technologies: ["Cisco Equipment", "Structured Cabling", "Wireless Access Points", "Network Security", "VLAN Configuration", "VPN Setup"],
      benefits: [
        { icon: Star, title: "Scalable Design", description: "Networks that grow with your business" },
        { icon: Zap, title: "High Performance", description: "Optimized for speed and reliability" },
        { icon: Check, title: "Secure Infrastructure", description: "Enterprise-grade security protocols" },
        { icon: Clock, title: "24/7 Monitoring", description: "Continuous network health monitoring" }
      ],
      process: ["Network Assessment", "Design & Planning", "Installation & Configuration", "Testing & Optimization"],
      timeline: "1-3 weeks"
    },
    {
      icon: Workflow,
      title: "Low-Code Automation",
      description: "We develop model-driven apps and automated workflows using Microsoft Power Apps and Power Automate to improve business efficiency and streamline operations.",
      features: ["Power Apps Development", "Workflow Automation", "Process Optimization", "Integration Solutions"],
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      darkBgGradient: "from-indigo-900/20 to-blue-900/20",
      detailedDescription: "Transform your business processes with Microsoft Power Platform solutions. We create custom low-code applications and automated workflows that eliminate manual tasks, reduce errors, and dramatically improve operational efficiency across your organization.",
      technologies: ["Microsoft Power Apps", "Power Automate", "Power BI", "SharePoint", "Office 365", "Azure"],
      benefits: [
        { icon: Zap, title: "Rapid Development", description: "Quick deployment with low-code solutions" },
        { icon: Star, title: "Process Automation", description: "Eliminate manual and repetitive tasks" },
        { icon: Users, title: "User-Friendly", description: "Intuitive interfaces for all skill levels" },
        { icon: Check, title: "Microsoft Integration", description: "Seamless Office 365 integration" }
      ],
      process: ["Process Analysis", "Solution Design", "App Development", "Testing & Deployment"],
      timeline: "2-8 weeks"
    },
    {
      icon: Download,
      title: "Software Installation",
      description: "We provide professional installation and setup of operating systems, office tools, antivirus, and specialized software for individual and business needs.",
      features: ["OS Installation", "Software Setup", "License Management", "System Configuration"],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      darkBgGradient: "from-violet-900/20 to-purple-900/20",
      detailedDescription: "Get your systems up and running with our professional software installation and configuration services. We ensure all software is properly licensed, optimally configured, and fully integrated with your existing infrastructure for maximum performance and security.",
      technologies: ["Windows Installation", "macOS Setup", "Linux Configuration", "Office Suite", "Antivirus Solutions", "Specialized Software"],
      benefits: [
        { icon: Clock, title: "Quick Setup", description: "Fast and efficient installation process" },
        { icon: Check, title: "Proper Licensing", description: "Ensure all software is legally licensed" },
        { icon: Star, title: "Optimal Configuration", description: "Customized settings for best performance" },
        { icon: Users, title: "User Training", description: "Basic training on installed software" }
      ],
      process: ["Requirements Assessment", "Software Procurement", "Installation & Setup", "Testing & Training"],
      timeline: "1-3 days"
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Subtle Colorful Shadows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(29, 45, 80, 0.3) 0%, rgba(0, 180, 216, 0.2) 50%, transparent 100%)',
            top: '10%',
            left: '20%',
          }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(114, 9, 183, 0.25) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)',
            bottom: '15%',
            right: '15%',
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1.0, 0.7, 1.2, 1.0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
        
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.15) 50%, transparent 100%)',
            top: '60%',
            left: '60%',
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 35, -25, 0],
            scale: [0.9, 1.0, 0.8, 0.9],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Smaller Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-15 blur-2xl"
            style={{
              background: `hsl(${(i * 60) % 360}, 70%, 60%)`,
              top: `${15 + (i * 12)}%`,
              right: `${10 + (i * 8)}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 20, Math.cos(i) * 15, 0],
              y: [0, Math.cos(i) * 25, Math.sin(i) * 20, 0],
              scale: [0.8, 1.1, 0.9, 0.8],
              opacity: [0.1, 0.2, 0.15, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
        
        {/* Layered Mesh Gradient Background */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(29, 45, 80, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(114, 9, 183, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div ref={ref} className="container-max section-padding relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-blue/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold uppercase tracking-wider border border-primary-500/30">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            Premium <span className="gradient-text">Services</span>
          </motion.h2>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive technology solutions designed to transform your business
            <span className="block mt-2 text-lg text-primary-600 dark:text-primary-400 font-medium">
              From concept to deployment, we deliver excellence at every step
            </span>
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className={`group relative p-6 lg:p-8 bg-gradient-to-br ${service.bgGradient} dark:${service.darkBgGradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer border border-white/20 dark:border-gray-700/30 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + index * 0.12,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-all duration-700`}></div>
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 transform translate-x-16 -translate-y-16`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${service.gradient} rounded-full blur-2xl opacity-15 transform -translate-x-12 translate-y-12`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-18 h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${service.gradient} rounded-3xl mb-6 shadow-xl`}
                    whileHover={{ 
                      rotate: [0, -15, 15, 0], 
                      scale: 1.15,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <Icon className="w-9 h-9 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </motion.div>

                  {/* Enhanced Title */}
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:gradient-text transition-all duration-500 leading-tight"
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Enhanced Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Enhanced Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        whileHover={{ x: 2 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400 italic ml-5">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <motion.button
                    className={`group/btn relative flex items-center justify-center space-x-2 w-full mt-4 py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Button Background Effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"></div>
                
                {/* Card Border Highlight */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-blue text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${selectedService.bgGradient} dark:${selectedService.darkBgGradient} rounded-t-3xl`}>
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${selectedService.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <selectedService.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedService.title}
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Key Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedService.benefits.map((benefit, index) => {
                      const Icon = benefit.icon
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${selectedService.gradient} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedService.gradient} text-white rounded-full text-sm font-medium shadow-md`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Process & Timeline */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Process */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Our Process
                    </h3>
                    <div className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${selectedService.gradient} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                            {index + 1}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Project Details
                    </h3>
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-2">
                          <Clock className="w-5 h-5 text-primary-600" />
                          <span className="font-semibold text-gray-900 dark:text-white">Timeline</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 ml-8">
                          {selectedService.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    className={`flex-1 px-8 py-4 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedService(null)
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="flex-1 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services 