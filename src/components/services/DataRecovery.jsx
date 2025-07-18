import { HardDrive, Shield, Zap, Star, FileText, Settings, Award, Phone, MessageCircle, Database, FileText as File, Lock, AlertTriangle } from 'lucide-react'
import ServicePageTemplate from './ServicePageTemplate'

const DataRecovery = () => {
  const service = {
    icon: HardDrive,
    title: "Data Recovery",
    subtitle: "Recovering Your Most Valuable Digital Assets",
    description: "Professional data recovery services for corrupted, deleted, or damaged storage devices with the highest success rates in the industry.",
    details: "We recover data from hard drives, SSDs, USB drives, and memory cards using advanced tools and techniques. Our experts work in secure, clean-room environments to retrieve lost files safely and confidentially.",
    features: [
      {
        title: "Hard Drive Recovery",
        description: "Recovery from mechanical failures, logical errors, and physical damage to hard drives",
        icon: HardDrive
      },
      {
        title: "SSD Data Retrieval",
        description: "Specialized recovery from solid-state drives with advanced flash memory technology",
        icon: Database
      },
      {
        title: "USB Drive Restoration",
        description: "Recovery from corrupted, formatted, or damaged USB flash drives and external storage",
        icon: File
      },
      {
        title: "Memory Card Recovery",
        description: "Photo and video recovery from SD cards, microSD, and other memory card formats",
        icon: FileText
      }
    ],
    process: [
      {
        step: "01",
        title: "Free Evaluation",
        description: "We assess your device and provide a detailed recovery plan with success probability"
      },
      {
        step: "02",
        title: "Secure Recovery",
        description: "Professional recovery in our secure, clean-room facility using advanced tools"
      },
      {
        step: "03",
        title: "Data Verification",
        description: "Thorough verification of recovered data to ensure integrity and completeness"
      },
      {
        step: "04",
        title: "Secure Delivery",
        description: "Safe delivery of recovered data on new storage media with detailed report"
      }
    ],
    additionalInfo: {
      duration: "1-7 days",
      pricing: "From $100",
      serviceType: "Emergency Service",
      technologies: ["R-Studio", "TestDisk", "PhotoRec", "Advanced Tools", "Clean Room", "Forensic Methods"],
      benefits: ["No Data, No Fee", "Secure Recovery", "Free Evaluation", "Confidential Service", "High Success Rate", "24/7 Emergency"],
      tools: ["Professional Recovery Software", "Clean Room Equipment", "Forensic Tools", "Data Verification Tools"]
    },
    gradient: "from-red-500 to-red-600",
    stats: [
      { number: "95%", label: "Success Rate" },
      { number: "1000+", label: "Recoveries Completed" },
      { number: "24/7", label: "Emergency Service" },
      { number: "Free", label: "Evaluation" }
    ],
    ctaText: "Don't lose your valuable data! Our expert recovery team can help restore your files with the highest success rates. Contact us immediately for emergency recovery services."
  }

  return <ServicePageTemplate service={service} />
}

export default DataRecovery 