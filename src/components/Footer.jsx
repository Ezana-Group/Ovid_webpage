import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Software Development',
    '3D Design & Printing',
    'Web & Mobile Development',
    'IT Hardware & Maintenance',
    'Data Recovery',
    'Computer Networking',
    'Low-Code Automation',
    'Software Installation'
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    }
  ]

  const contactInfo = [
    { icon: Phone, text: '+254 700 123 456' },
    { icon: Mail, text: 'info@ovidinternational.co.ke' },
    { icon: MapPin, text: 'Nairobi, Kenya' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12">
                <img 
                  src="/assets/ovid-logo.svg" 
                  alt="Ovid International Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-bold">
                <span className="gradient-text">OVID</span>
                <span className="block text-sm font-medium text-primary-400 -mt-1">International</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Africa through innovative technology solutions. We transform businesses with cutting-edge software, 3D design, and comprehensive IT services.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-700`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300 block"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-300 hover:text-primary-500 transition-colors duration-300 cursor-pointer block">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <span className="text-gray-300">{info.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
                />
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-blue rounded-r-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ovid International Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 