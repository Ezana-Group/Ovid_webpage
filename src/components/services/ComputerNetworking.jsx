import { Network, Shield, Zap, Star, FileText, Settings, Award, Phone, MessageCircle, Wifi, Router, Server, Lock } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const ComputerNetworking = () => {
  const service = {
    icon: Network,
    title: "Computer Networking",
    subtitle: "Building Secure & Scalable Network Infrastructure",
    description: "Design, setup, and maintain secure wired and wireless networks for businesses and institutions with enterprise-grade reliability.",
    details: "We design, install, and maintain secure networks that provide reliable connectivity for your business. Our services include router configuration, switch installation, wireless setup, and network security implementation.",
    features: [
      {
        title: "Network Design & Planning",
        description: "Comprehensive network architecture design for optimal performance and scalability",
        icon: Network
      },
      {
        title: "Router Configuration",
        description: "Professional setup and configuration of enterprise-grade routers and firewalls",
        icon: Router
      },
      {
        title: "Switch Installation",
        description: "Installation and configuration of network switches for efficient data routing",
        icon: Server
      },
      {
        title: "Wireless Setup",
        description: "Secure wireless network deployment with optimal coverage and performance",
        icon: Wifi
      }
    ],
    process: [
      {
        step: "01",
        title: "Network Assessment",
        description: "We analyze your current network infrastructure and identify improvement opportunities"
      },
      {
        step: "02",
        title: "Design & Planning",
        description: "Create a comprehensive network design that meets your current and future needs"
      },
      {
        step: "03",
        title: "Installation & Configuration",
        description: "Professional installation and configuration of all network components"
      },
      {
        step: "04",
        title: "Testing & Optimization",
        description: "Thorough testing and optimization to ensure maximum performance and security"
      }
    ],
    additionalInfo: {
      duration: "2-5 days",
      pricing: "From $500",
      serviceType: "Project-Based",
      technologies: ["Cisco", "Ubiquiti", "TP-Link", "Network Security", "VLAN", "VPN"],
      benefits: ["Secure Networks", "High Speed", "Scalable Design", "24/7 Monitoring", "Expert Support", "Future-Proof"],
      tools: ["Network Analyzers", "Configuration Tools", "Security Software", "Monitoring Systems"]
    },
    gradient: "from-green-500 to-green-600",
    stats: [
      { number: "300+", label: "Networks Deployed" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Monitoring" },
      { number: "1Gbps", label: "Average Speed" }
    ],
    ctaText: "Let's build a robust, secure network infrastructure that supports your business growth and ensures reliable connectivity. Get a free network assessment today!"
  }

  return <ServicePageTemplate service={service} />
}

export default ComputerNetworking 