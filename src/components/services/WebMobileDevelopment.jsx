import { Smartphone, Globe, Smartphone as Mobile, Zap, Shield, Star, FileText, Settings, Award, Phone, MessageCircle, Monitor, Tablet } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const WebMobileDevelopment = () => {
  const service = {
    icon: Smartphone,
    title: "Web & Mobile Development",
    subtitle: "Digital Experiences That Connect & Convert",
    description: "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices and platforms.",
    details: "We create responsive websites, progressive web apps, and cross-platform mobile applications that are optimized for speed, accessibility, and seamless user experience. Our solutions work flawlessly on desktop, tablet, and mobile devices.",
    features: [
      {
        title: "Responsive Web Design",
        description: "Modern, mobile-first web applications that adapt perfectly to any screen size and device",
        icon: Monitor
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android with native performance",
        icon: Mobile
      },
      {
        title: "Progressive Web Apps",
        description: "PWAs that combine the best of web and mobile apps with offline capabilities",
        icon: Globe
      },
      {
        title: "Cross-platform Solutions",
        description: "Single codebase applications that work seamlessly across multiple platforms",
        icon: Tablet
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description: "We analyze your target audience, define user personas, and create a comprehensive development strategy"
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Our designers create intuitive user interfaces and interactive prototypes for user testing"
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Agile development with continuous testing across multiple devices and browsers"
      },
      {
        step: "04",
        title: "Deployment & Optimization",
        description: "Seamless deployment with performance optimization and ongoing maintenance"
      }
    ],
    additionalInfo: {
      duration: "3-8 weeks",
      pricing: "From $3,000",
      serviceType: "Project-Based",
      technologies: ["React", "React Native", "Flutter", "Next.js", "Tailwind CSS", "Node.js", "Firebase"],
      benefits: ["Cross-platform", "Fast Performance", "SEO Optimized", "Mobile First", "Scalable Architecture", "24/7 Support"],
      frameworks: ["React", "Next.js", "React Native", "Flutter", "Vue.js", "Angular"]
    },
    gradient: "from-purple-500 to-purple-600",
    stats: [
      { number: "200+", label: "Apps Delivered" },
      { number: "99%", label: "Client Satisfaction" },
      { number: "24/7", label: "Support Available" },
      { number: "3x", label: "Faster Loading" }
    ],
    ctaText: "Let's create a stunning web or mobile application that engages your users and drives business growth. Get a free consultation today!"
  }

  return <ServicePageTemplate service={service} />
}

export default WebMobileDevelopment 