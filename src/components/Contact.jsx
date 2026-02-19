import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 700 123 456",
      subDetails: "Mon-Fri 8AM-6PM EAT"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ovidinternational.co.ke",
      subDetails: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Tamarind place, Eldoret",
      subDetails: "Uasin Gishu County, Kenya",
      mapUrl: "https://www.google.com/maps?q=Tamarind+place,+Eldoret"
    }
  ]

  const services = [
    "Software Development",
    "3D Design & Printing",
    "Web & Mobile Development",
    "IT Hardware & Maintenance",
    "Digital Transformation",
    "Other"
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-[#10102a] relative overflow-hidden">
      {/* Colorful Blob Background */}
      <div className="absolute inset-0">
        {/* Animated Colorful Blobs */}
        <div className="absolute top-20 right-16 w-84 h-84 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-76 h-76 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-68 h-68 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000"></div>
        <div className="absolute top-16 left-1/2 w-56 h-56 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1500"></div>
        
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
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get In <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/60 dark:border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/80 dark:bg-white/20 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-white/20"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-blue rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.title === 'Visit Us' ? (
                        <a
                          href={info.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 underline hover:text-primary-800 dark:hover:text-primary-200 transition-colors duration-200 font-medium"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-blue-100 font-medium">
                          {info.details}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 dark:text-blue-200">
                        {info.subDetails}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="h-64 bg-gradient-to-br from-primary-100 to-accent-blue/20 dark:from-primary-900/30 dark:to-accent-blue/20 rounded-2xl flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <iframe
                title="Tamarind place, Eldoret Map"
                src="https://www.google.com/maps?q=Tamarind+place,+Eldoret&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                    placeholder="+254 700 123 456"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                    placeholder="Your company name"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-100 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-[#18183a] dark:text-white transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-blue text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden disabled:opacity-70"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {submitStatus === 'success'
                      ? 'Message sent successfully! We\'ll get back to you soon.'
                      : 'Something went wrong. Please try again.'}
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 