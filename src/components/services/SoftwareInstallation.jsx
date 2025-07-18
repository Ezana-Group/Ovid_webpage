import { Download, Shield, Zap, Star, FileText, Settings, Award, Phone, MessageCircle, Monitor, Package, CheckCircle, Lock } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const SoftwareInstallation = () => {
  const service = {
    icon: Download,
    title: "Software Installation",
    subtitle: "Professional Setup & Configuration Services",
    description: "Professional installation and setup of operating systems, office tools, and specialized software with proper licensing and optimization.",
    details: "We install and configure operating systems, office suites, and specialized software to ensure optimal system performance. Our team handles proper licensing, system optimization, and provides training for your staff.",
    features: [
      {
        title: "OS Installation",
        description: "Clean installation of Windows, Linux, and macOS with proper drivers and updates",
        icon: Monitor
      },
      {
        title: "Software Setup",
        description: "Installation and configuration of office suites, design software, and business applications",
        icon: Package
      },
      {
        title: "License Management",
        description: "Proper software licensing, activation, and compliance management",
        icon: CheckCircle
      },
      {
        title: "System Configuration",
        description: "Optimization of system settings for maximum performance and security",
        icon: Settings
      }
    ],
    process: [
      {
        step: "01",
        title: "System Assessment",
        description: "We evaluate your hardware and determine the best software configuration"
      },
      {
        step: "02",
        title: "Software Installation",
        description: "Professional installation of all required software with proper licensing"
      },
      {
        step: "03",
        title: "Configuration & Optimization",
        description: "Configure software settings and optimize system performance"
      },
      {
        step: "04",
        title: "Testing & Training",
        description: "Thorough testing and user training to ensure everything works perfectly"
      }
    ],
    additionalInfo: {
      duration: "1-2 days",
      pricing: "From $80",
      serviceType: "On-Demand",
      technologies: ["Windows 11/10", "Office 365", "Adobe Suite", "Specialized Software", "Linux", "macOS"],
      benefits: ["Licensed Software", "Proper Configuration", "Training Included", "Ongoing Support", "Warranty Coverage", "Expert Technicians"],
      tools: ["Installation Media", "License Keys", "Configuration Tools", "Testing Software"]
    },
    gradient: "from-violet-500 to-violet-600",
    stats: [
      { number: "1000+", label: "Systems Configured" },
      { number: "100%", label: "Licensed Software" },
      { number: "24/7", label: "Support Available" },
      { number: "Same Day", label: "Service Available" }
    ],
    ctaText: "Get your systems properly configured with licensed software and expert setup. Our professional installation services ensure everything works perfectly from day one!"
  }

  return <ServicePageTemplate service={service} />
}

export default SoftwareInstallation 