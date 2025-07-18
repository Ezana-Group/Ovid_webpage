import { Workflow, Shield, Zap, Star, FileText, Settings, Award, Phone, MessageCircle, Zap as Lightning, Database, Globe, Lock } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const LowCodeAutomation = () => {
  const service = {
    icon: Workflow,
    title: "Low-Code Automation",
    subtitle: "Streamlining Business Processes with Microsoft Power Platform",
    description: "Microsoft Power Apps and Power Automate solutions to improve business efficiency and automate complex workflows.",
    details: "We automate business processes using Microsoft Power Apps and Power Automate to streamline workflows and integrate with your existing systems. Our solutions reduce manual work and improve productivity across your organization.",
    features: [
      {
        title: "Power Apps Development",
        description: "Custom business applications built with Microsoft Power Apps for rapid deployment",
        icon: Globe
      },
      {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and business processes with Power Automate",
        icon: Workflow
      },
      {
        title: "Process Optimization",
        description: "Analyze and optimize existing processes for maximum efficiency",
        icon: Lightning
      },
      {
        title: "Integration Solutions",
        description: "Seamless integration with Microsoft 365, SharePoint, and other business systems",
        icon: Database
      }
    ],
    process: [
      {
        step: "01",
        title: "Process Analysis",
        description: "We analyze your current business processes and identify automation opportunities"
      },
      {
        step: "02",
        title: "Solution Design",
        description: "Design custom Power Apps and automation workflows tailored to your needs"
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Build and thoroughly test all automation solutions in a controlled environment"
      },
      {
        step: "04",
        title: "Deployment & Training",
        description: "Deploy solutions and provide comprehensive training for your team"
      }
    ],
    additionalInfo: {
      duration: "2-6 weeks",
      pricing: "From $2,500",
      serviceType: "Project-Based",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365", "Power BI", "Dataverse"],
      benefits: ["Rapid Development", "Cost Effective", "Easy Maintenance", "Microsoft Integration", "Scalable Solutions", "User-Friendly"],
      tools: ["Power Apps Studio", "Power Automate", "SharePoint Designer", "Power BI"]
    },
    gradient: "from-indigo-500 to-indigo-600",
    stats: [
      { number: "150+", label: "Automations Built" },
      { number: "80%", label: "Time Saved" },
      { number: "24/7", label: "Support Available" },
      { number: "5x", label: "Faster Development" }
    ],
    ctaText: "Transform your business processes with powerful automation solutions that save time and increase productivity. Let's discuss your automation needs today!"
  }

  return <ServicePageTemplate service={service} />
}

export default LowCodeAutomation 