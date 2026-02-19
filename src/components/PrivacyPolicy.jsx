import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Globe, Users, Settings } from 'lucide-react'

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            Ovid International Ltd ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>www.ovid.co.ke</strong> or use our services.
          </p>
          <p>
            This policy is designed to comply with the <strong>Kenya Data Protection Act (DPA) 2019</strong> and the <strong>African Union Convention on Cybersecurity and Personal Data Protection (Malabo Convention)</strong>. By using our website or services, you consent to the collection and use of your information as described in this policy.
          </p>
          <p>
            <strong>Effective Date:</strong> {currentDate}
          </p>
        </div>
      )
    },
    {
      id: 'data-collection',
      title: 'What Data We Collect',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>We collect the following types of personal data:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Personal Details:</strong> Name, email address, phone number, and company information</li>
            <li><strong>Contact Information:</strong> Address, location data, and communication preferences</li>
            <li><strong>Technical Identifiers:</strong> IP address, browser type, device information, and cookies</li>
            <li><strong>Usage Data:</strong> Website interactions, pages visited, and time spent on our site</li>
            <li><strong>Uploaded Content:</strong> Documents, files, or other materials you submit to us</li>
            <li><strong>Analytics Data:</strong> Aggregated information about website usage and performance</li>
          </ul>
        </div>
      )
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis for Processing',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p>We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Consent:</strong> When you explicitly agree to our processing of your data</li>
            <li><strong>Contract Performance:</strong> To fulfill our obligations under service agreements</li>
            <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Legitimate Interest:</strong> To improve our services and protect our business interests</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Data',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
            <li><strong>Service Delivery:</strong> To provide our software development, 3D design, and IT services</li>
            <li><strong>Analytics:</strong> To analyze website usage and improve our services</li>
            <li><strong>Security:</strong> To protect our platform and prevent fraud</li>
            <li><strong>Marketing:</strong> To send promotional materials (only with your explicit consent)</li>
            <li><strong>Legal Compliance:</strong> To meet our legal and regulatory obligations</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Cross-Border Transfers',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p><strong>We do not sell your personal data to third parties.</strong></p>
          <p>We may share your data with:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Service Providers:</strong> Cloud hosting providers and third-party processors who assist in our operations</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Partners:</strong> Only with your explicit consent for specific purposes</li>
          </ul>
          <p>
            <strong>Cross-Border Transfers:</strong> If your data is transferred outside Kenya, we ensure appropriate safeguards are in place, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Standard contractual clauses approved by the Office of the Data Protection Commissioner</li>
            <li>Adequacy decisions by relevant authorities</li>
            <li>Certification schemes and codes of conduct</li>
          </ul>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>Under the Kenya Data Protection Act, you have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Right to Object:</strong> Object to processing of your data</li>
            <li><strong>Right to Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Right to Restriction:</strong> Limit how we process your data</li>
            <li><strong>Right to Complain:</strong> Lodge a complaint with the Office of the Data Protection Commissioner</li>
          </ul>
          <p>
            To exercise these rights, contact us at <strong>privacy@ovid.co.ke</strong>. We will respond within 30 days.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p>We use cookies and similar technologies for:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Performance Cookies:</strong> To analyze website usage and improve performance</li>
            <li><strong>Security Cookies:</strong> To protect against fraud and ensure security</li>
            <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
          </ul>
          <p>
            You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
          </p>
        </div>
      )
    },
    {
      id: 'children',
      title: "Children's Data",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            Our website and services are not intended for children under 18 years of age. We do not knowingly collect personal data from children under 18. If you believe we have collected data from a child under 18, please contact us immediately at <strong>privacy@ovid.co.ke</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>We implement appropriate technical and organizational measures to protect your personal data:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
            <li><strong>Access Controls:</strong> Strict access controls and authentication measures</li>
            <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
            <li><strong>Employee Training:</strong> Regular training on data protection and security</li>
            <li><strong>Incident Response:</strong> Procedures for handling security incidents</li>
          </ul>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>For questions about this Privacy Policy or to exercise your rights, contact us:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p><strong>Ovid International Ltd</strong></p>
            <p>Website: <a href="https://www.ovid.co.ke" className="text-primary-600 hover:text-primary-700">www.ovid.co.ke</a></p>
            <p>Email: <a href="mailto:privacy@ovid.co.ke" className="text-primary-600 hover:text-primary-700">privacy@ovid.co.ke</a></p>
            <p>Address: Nairobi, Kenya</p>
          </div>
          <p>
            <strong>Data Protection Officer:</strong> For specific data protection inquiries, please contact our Data Protection Officer at the email address above.
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal data in compliance with Kenyan and African Union data protection laws.
            </p>
            <div className="mt-6 text-sm text-primary-200">
              <p>Effective Date: {currentDate}</p>
              <p>Last Updated: {currentDate}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="scroll-mt-20"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {section.title}
                      </h2>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )
            })}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
          >
            <p className="text-center text-gray-700 dark:text-gray-300">
              This Privacy Policy is effective as of {currentDate}. We may update this policy from time to time. 
              Please check this page periodically for any changes. Your continued use of our services after any 
              modifications indicates your acceptance of the updated policy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 