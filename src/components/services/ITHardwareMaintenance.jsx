import { Settings, Wrench, Shield, Zap, Star, FileText, Award, Phone, MessageCircle, Server, Network, HardDrive, Monitor } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const ITHardwareMaintenance = () => {
  const service = {
    icon: Settings,
    title: "IT Hardware & Maintenance",
    subtitle: "Reliable Infrastructure That Powers Your Business",
    description: "Comprehensive IT infrastructure solutions including hardware procurement, installation, and maintenance to keep your business running smoothly.",
    details: "We handle complete hardware setup, system maintenance, and technical support to ensure your IT infrastructure is reliable, secure, and up-to-date. Our team provides 24/7 monitoring and preventive maintenance to minimize downtime.",
    features: [
      {
        title: "Hardware Setup & Installation",
        description: "Professional installation and configuration of servers, workstations, and networking equipment",
        icon: Server
      },
      {
        title: "System Maintenance",
        description: "Regular maintenance, updates, and optimization to keep your systems running at peak performance",
        icon: Wrench
      },
      {
        title: "Technical Support",
        description: "24/7 technical support and troubleshooting for hardware and software issues",
        icon: Shield
      },
      {
        title: "Network Solutions",
        description: "Design, implementation, and maintenance of secure wired and wireless networks",
        icon: Network
      }
    ],
    process: [
      {
        step: "01",
        title: "Assessment & Planning",
        description: "We evaluate your current infrastructure and create a comprehensive maintenance plan"
      },
      {
        step: "02",
        title: "Hardware Installation",
        description: "Professional installation and configuration of all hardware components"
      },
      {
        step: "03",
        title: "System Configuration",
        description: "Setup and optimization of operating systems, software, and network configurations"
      },
      {
        step: "04",
        title: "Ongoing Support",
        description: "Continuous monitoring, maintenance, and technical support services"
      }
    ],
    additionalInfo: {
      duration: "1-3 days",
      pricing: "From $150",
      serviceType: "On-Demand",
      technologies: ["Windows/Linux", "Cisco", "HP/Dell Hardware", "Cloud Solutions", "VMware", "Backup Systems"],
      benefits: ["24/7 Support", "Preventive Maintenance", "Warranty Coverage", "Remote Monitoring", "Fast Response", "Expert Technicians"],
      tools: ["Remote Desktop", "Monitoring Tools", "Backup Software", "Security Suites"]
    },
    gradient: "from-pink-500 to-pink-600",
    stats: [
      { number: "500+", label: "Systems Maintained" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Support Available" },
      { number: "2hr", label: "Response Time" }
    ],
    ctaText: "Let's ensure your IT infrastructure is reliable, secure, and optimized for maximum productivity. Get a free assessment today!"
  }

  return <ServicePageTemplate service={service} />
}

export default ITHardwareMaintenance 