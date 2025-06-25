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
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Subtle Colorful Shadows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(168, 85, 247, 0.14) 50%, transparent 100%)',
            top: '10%',
            right: '10%',
          }}
          animate={{
            x: [0, -55, 40, 0],
            y: [0, 60, -45, 0],
            scale: [0.85, 1.15, 0.9, 0.85],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full opacity-18 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.12) 50%, transparent 100%)',
            bottom: '12%',
            left: '8%',
          }}
          animate={{
            x: [0, 70, -50, 0],
            y: [0, -55, 40, 0],
            scale: [1.0, 0.75, 1.2, 1.0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        <motion.div
          className="absolute w-[360px] h-[360px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 100%)',
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 40, -30, 0],
            scale: [0.9, 1.05, 0.8, 0.9],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Smaller Floating Elements */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-28 h-28 rounded-full opacity-14 blur-2xl"
            style={{
              background: `hsl(${(i * 50) % 360}, 70%, 65%)`,
              top: `${18 + (i * 9)}%`,
              right: `${12 + (i * 8)}%`,
            }}
            animate={{
              x: [0, Math.sin(i * 0.5) * 18, Math.cos(i * 0.5) * 14, 0],
              y: [0, Math.cos(i * 0.5) * 22, Math.sin(i * 0.5) * 18, 0],
              scale: [0.8, 1.1, 0.9, 0.8],
              opacity: [0.1, 0.18, 0.14, 0.1],
            }}
            transition={{
              duration: 16 + i * 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.2
            }}
          />
        ))}
        
        {/* Layered Mesh Gradient Background */}
        <div 
          className="absolute inset-0 opacity-7"
          style={{
            background: `
              radial-gradient(circle at 18% 22%, rgba(139, 92, 246, 0.09) 0%, transparent 48%),
              radial-gradient(circle at 82% 78%, rgba(245, 158, 11, 0.09) 0%, transparent 48%),
              radial-gradient(circle at 35% 85%, rgba(6, 182, 212, 0.09) 0%, transparent 48%),
              radial-gradient(circle at 85% 15%, rgba(239, 68, 68, 0.09) 0%, transparent 48%)
            `
          }}
        />
      </div>

      <div ref={ref} className="container-max section-padding relative z-10">
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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our diverse range of successful projects across various industries and technologies.
          </motion.p>
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
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
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
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
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
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-300"
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
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