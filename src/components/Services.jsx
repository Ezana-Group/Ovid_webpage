import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Layers, Smartphone, Settings, HardDrive, Network, Workflow, Download, Clock, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to streamline your business operations.",
      details: "We build scalable web and enterprise software, robust APIs, and custom databases tailored to your business needs. Our team uses the latest frameworks and best practices for security and performance.",
      features: ["Web Applications", "Enterprise Software", "API Development", "Database Design"],
      additionalInfo: {
        duration: "4-12 weeks",
        pricing: "From $5,000",
        technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
        benefits: ["Scalable Architecture", "Security Best Practices", "24/7 Support", "Regular Updates"]
      },
      gradient: "from-blue-500 to-blue-600",
      route: "/services/software-development",
    },
    {
      icon: Layers,
      title: "3D Design & Printing",
      description: "Revolutionary 3D design and printing services that bring your ideas to life with precision and creativity.",
      details: "From concept to prototype, we offer 3D modeling, product design, and custom manufacturing. Our 3D printing services use high-quality materials for accurate, durable results.",
      features: ["3D Modeling", "Prototyping", "Product Design", "Custom Manufacturing"],
      additionalInfo: {
        duration: "1-4 weeks",
        pricing: "From $200",
        technologies: ["Blender", "Fusion 360", "Cura", "PLA/ABS Materials"],
        benefits: ["High Precision", "Rapid Prototyping", "Cost Effective", "Custom Materials"]
      },
      gradient: "from-cyan-500 to-cyan-600",
      route: "/services/3d-design-printing",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Responsive web applications and native mobile apps that deliver exceptional user experiences.",
      details: "We create responsive websites, progressive web apps, and cross-platform mobile apps. Our solutions are optimized for speed, accessibility, and seamless user experience.",
      features: ["Responsive Design", "Mobile Apps", "Progressive Web Apps", "Cross-platform Solutions"],
      additionalInfo: {
        duration: "3-8 weeks",
        pricing: "From $3,000",
        technologies: ["React Native", "Flutter", "Next.js", "Tailwind CSS"],
        benefits: ["Cross-platform", "Fast Performance", "SEO Optimized", "Mobile First"]
      },
      gradient: "from-purple-500 to-purple-600",
      route: "/services/web-mobile-development",
    },
    {
      icon: Settings,
      title: "IT Hardware & Maintenance",
      description: "Comprehensive IT infrastructure solutions including hardware procurement, installation, and maintenance.",
      details: "We handle hardware setup, system maintenance, and technical support. Our team ensures your IT infrastructure is reliable, secure, and up-to-date.",
      features: ["Hardware Setup", "System Maintenance", "Technical Support", "Network Solutions"],
      additionalInfo: {
        duration: "1-3 days",
        pricing: "From $150",
        technologies: ["Windows/Linux", "Cisco", "HP/Dell Hardware", "Cloud Solutions"],
        benefits: ["24/7 Support", "Preventive Maintenance", "Warranty Coverage", "Remote Monitoring"]
      },
      gradient: "from-pink-500 to-pink-600",
      route: "/services/it-hardware-maintenance",
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Professional data recovery services for corrupted, deleted, or damaged storage devices.",
      details: "We recover data from hard drives, SSDs, USB drives, and memory cards. Our experts use advanced tools to retrieve lost files securely and confidentially.",
      features: ["Hard Drive Recovery", "SSD Data Retrieval", "USB Drive Restoration", "Memory Card Recovery"],
      additionalInfo: {
        duration: "1-7 days",
        pricing: "From $100",
        technologies: ["R-Studio", "TestDisk", "PhotoRec", "Advanced Tools"],
        benefits: ["No Data, No Fee", "Secure Recovery", "Free Evaluation", "Confidential Service"]
      },
      gradient: "from-red-500 to-red-600",
      route: "/services/data-recovery",
    },
    {
      icon: Network,
      title: "Computer Networking",
      description: "Design, setup, and maintain secure wired and wireless networks for businesses and institutions.",
      details: "We design, install, and maintain secure networks. Our services include router configuration, switch installation, and wireless setup for reliable connectivity.",
      features: ["Network Design", "Router Configuration", "Switch Installation", "Wireless Setup"],
      additionalInfo: {
        duration: "2-5 days",
        pricing: "From $500",
        technologies: ["Cisco", "Ubiquiti", "TP-Link", "Network Security"],
        benefits: ["Secure Networks", "High Speed", "Scalable Design", "24/7 Monitoring"]
      },
      gradient: "from-green-500 to-green-600",
      route: "/services/computer-networking",
    },
    {
      icon: Workflow,
      title: "Low-Code Automation",
      description: "Microsoft Power Apps and Power Automate solutions to improve business efficiency.",
      details: "We automate business processes using Microsoft Power Apps and Power Automate. Our solutions streamline workflows and integrate with your existing systems.",
      features: ["Power Apps Development", "Workflow Automation", "Process Optimization", "Integration Solutions"],
      additionalInfo: {
        duration: "2-6 weeks",
        pricing: "From $2,500",
        technologies: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
        benefits: ["Rapid Development", "Cost Effective", "Easy Maintenance", "Microsoft Integration"]
      },
      gradient: "from-indigo-500 to-indigo-600",
      route: "/services/low-code-automation",
    },
    {
      icon: Download,
      title: "Software Installation",
      description: "Professional installation and setup of operating systems, office tools, and specialized software.",
      details: "We install and configure operating systems, office suites, and specialized software. Our team ensures proper licensing and optimal system performance.",
      features: ["OS Installation", "Software Setup", "License Management", "System Configuration"],
      additionalInfo: {
        duration: "1-2 days",
        pricing: "From $80",
        technologies: ["Windows 11/10", "Office 365", "Adobe Suite", "Specialized Software"],
        benefits: ["Licensed Software", "Proper Configuration", "Training Included", "Ongoing Support"]
      },
      gradient: "from-violet-500 to-violet-600",
      route: "/services/software-installation",
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-[#10102a] relative overflow-hidden">
      {/* Colorful Blob Background */}
      <div className="absolute inset-0">
        {/* Animated Colorful Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-20 w-56 h-56 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1500"></div>
        <div className="absolute top-20 right-1/3 w-48 h-48 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-sm"></div>
      </div>

      <div ref={ref} className="container-max relative z-10">
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
              className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-700 dark:text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Comprehensive technology solutions designed to transform your business
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                to={service.route}
                className="group relative p-8 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-white/20 cursor-pointer hover:bg-white/80 dark:hover:bg-white/20 block overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="relative z-10"
                >
                  {/* Enhanced Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Enhanced Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Enhanced Description */}
                  <p className="text-gray-700 dark:text-blue-100 mb-6 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-600 dark:group-hover:text-blue-50 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Enhanced Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-blue-200 text-xs group-hover:text-gray-700 dark:group-hover:text-blue-100 transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-blue-300">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.additionalInfo.duration}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {service.additionalInfo.pricing}
                    </span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>


      </div>
    </section>
  )
}

export default Services 