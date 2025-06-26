import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: '3d', name: '3D Design' },
    { id: 'software', name: 'Software' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced features and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Biometrics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "3D Product Prototype",
      category: "3d",
      description: "Custom 3D prototype design for manufacturing and product development.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Blender", "CAD", "3D Printing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Enterprise CRM",
      category: "software",
      description: "Comprehensive customer relationship management system for enterprises.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "web",
      description: "Modern restaurant website with online ordering and reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      category: "mobile",
      description: "Cross-platform fitness tracking application with social features.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Firebase", "ML Kit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white dark:bg-[#10102a] relative overflow-hidden">
      {/* Colorful Blob Background */}
      <div className="absolute inset-0">
        {/* Animated Colorful Blobs */}
        <div className="absolute top-24 right-24 w-88 h-88 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-28 left-20 w-76 h-76 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/3 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000"></div>
        <div className="absolute top-16 left-1/2 w-60 h-60 bg-gradient-to-r from-lime-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1500"></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-sm"></div>
      </div>

      <div ref={ref} className="container-max relative z-10">
        <motion.div
          className="text-center mb-10"
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
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our diverse range of successful projects across various industries and technologies.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-blue text-white shadow-lg'
                  : 'bg-white/60 dark:bg-white/10 text-gray-700 dark:text-blue-100 hover:bg-white/80 dark:hover:bg-white/20 border border-gray-200/60 dark:border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/60 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              layout
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="p-3 bg-white/90 dark:bg-white/20 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-3 bg-white/90 dark:bg-white/20 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-blue-100 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-white/10 text-primary-700 dark:text-blue-100 rounded-full text-sm font-medium border border-gray-200/60 dark:border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio