import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Star,
  FileText,
  Globe,
  Database,
  Settings,
  Award,
  Phone,
  MessageCircle,
  Layers,
  Cpu
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SoftwareDevelopment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const service = {
    icon: Code,
    title: "Software Development",
    subtitle: "Building Digital Solutions That Drive Growth",
    description: "Custom software solutions built with cutting-edge technologies to streamline your business operations and accelerate your digital transformation.",
    details: "We build scalable web and enterprise software, robust APIs, and custom databases tailored to your business needs. Our team uses the latest frameworks and best practices to deliver secure, high-performance solutions that grow with your business.",
    features: [
      {
        title: "Web Applications",
        description: "Modern, responsive web applications built with React, Next.js, and cutting-edge frontend technologies",
        icon: Globe
      },
      {
        title: "Enterprise Software",
        description: "Scalable enterprise solutions designed to handle complex business processes and large user bases",
        icon: Layers
      },
      {
        title: "API Development",
        description: "Robust RESTful and GraphQL APIs that power your applications and enable seamless integrations",
        icon: Cpu
      },
      {
        title: "Database Design",
        description: "Optimized database architectures using PostgreSQL, MongoDB, and other modern database technologies",
        icon: Database
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We analyze your requirements, define project scope, and create a detailed development roadmap"
      },
      {
        step: "02",
        title: "Design & Architecture",
        description: "Our architects design the system architecture and create detailed technical specifications"
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Agile development with continuous testing and quality assurance throughout the process"
      },
      {
        step: "04",
        title: "Deployment & Support",
        description: "Seamless deployment with ongoing maintenance, updates, and technical support"
      }
    ],
    additionalInfo: {
      duration: "4-12 weeks",
      pricing: "From $5,000",
      technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS", "Docker"],
      benefits: ["Scalable Architecture", "Security Best Practices", "24/7 Support", "Regular Updates", "Performance Optimized", "Future-Proof Design"],
      frameworks: ["React", "Next.js", "Express.js", "Django", "Spring Boot", "FastAPI"]
    },
    gradient: "from-blue-500 to-blue-600",
    stats: [
      { number: "100+", label: "Projects Delivered" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Support Available" },
      { number: "2x", label: "Faster Development" }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-[#0a0a1a] dark:via-[#10102a] dark:to-[#0a1a2a] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-3xl opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-transparent dark:to-transparent"></div>
      </div>

      <div ref={ref} className="relative z-10 pt-24 pb-16">
        <div className="container-max">
          {/* Enhanced Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/#services"
              className="inline-flex items-center space-x-3 text-gray-600 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
            >
              <div className="p-2 bg-white/80 dark:bg-white/10 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Services</span>
            </Link>
          </motion.div>

          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/60 dark:border-white/20 shadow-2xl max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Service Icon */}
              <motion.div 
                className="flex items-center justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-2xl`}>
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              {/* Title and Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {service.subtitle}
                </p>
                <p className="text-xl text-gray-700 dark:text-blue-100 max-w-4xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.stats.map((stat, index) => (
              <div key={index} className="bg-white/80 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/60 dark:border-white/20 shadow-xl text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Enhanced Service Overview */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Service Overview</h2>
                </div>
                <p className="text-gray-600 dark:text-blue-100 leading-relaxed text-lg">{service.details}</p>
              </motion.div>

              {/* Enhanced Features */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Offer</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => {
                    const Icon = feature.icon
                    return (
                      <div key={i} className="p-6 bg-white/60 dark:bg-white/10 rounded-2xl border border-gray-200/60 dark:border-white/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-blue-200 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Process Flow */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Development Process</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                          <p className="text-gray-600 dark:text-blue-200 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      {i < service.process.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technologies & Frameworks</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Core Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.additionalInfo.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.additionalInfo.frameworks.map((framework, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-white/10 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-blue-200">Duration</div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">{service.additionalInfo.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-white/10 rounded-xl">
                    <Users className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-blue-200">Service Type</div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">Project-Based</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 dark:border-white/20 shadow-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.additionalInfo.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-blue-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Enhanced CTA */}
              <motion.div
                className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-blue-100" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Let's discuss your software development needs and create a custom solution that drives your business forward. Get a free consultation today!
                  </p>
                  <div className="space-y-4">
                    <Link
                      to="/#contact"
                      className="inline-block w-full text-center bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Start Your Project
                    </Link>
                    <div className="flex space-x-4">
                      <Link
                        to="/#contact"
                        className="flex-1 flex items-center justify-center space-x-2 bg-white/20 text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call Us</span>
                      </Link>
                      <Link
                        to="/#contact"
                        className="flex-1 flex items-center justify-center space-x-2 bg-white/20 text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Chat</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareDevelopment 