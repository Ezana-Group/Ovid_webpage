import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, Settings, Globe, Mail, Scale, AlertTriangle, CheckCircle, Building } from 'lucide-react'

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement & Acceptance',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            These Terms of Service ("Terms") govern your use of the website and services provided by Ovid International Ltd ("we," "our," or "us") at <strong>www.ovid.co.ke</strong>.
          </p>
          <p>
            By accessing or using our website, services, or any content provided by us, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>
          <p>
            These Terms apply to all users, including individuals and organizations, who access or use our services. You represent that you have the legal capacity to enter into these Terms.
          </p>
          <p>
            <strong>Effective Date:</strong> {currentDate}
          </p>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Services Provided',
      icon: Building,
      content: (
        <div className="space-y-4">
          <p>Ovid International Ltd provides the following technology services:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Software Development</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Custom software solutions</li>
                <li>• Web application development</li>
                <li>• Mobile app development</li>
                <li>• System integration</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3D Design & Printing</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• 3D modeling and design</li>
                <li>• Prototype development</li>
                <li>• 3D printing services</li>
                <li>• CAD/CAM solutions</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Low-Code Applications</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Microsoft Power Apps</li>
                <li>• Power Automate workflows</li>
                <li>• Business process automation</li>
                <li>• Custom business solutions</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">IT Infrastructure</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• IT hardware supply</li>
                <li>• Data recovery services</li>
                <li>• Computer networking</li>
                <li>• IT consulting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>As a user of our services, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Provide Accurate Information:</strong> Furnish true, accurate, current, and complete information when required</li>
            <li><strong>Comply with Laws:</strong> Use our services in compliance with all applicable laws and regulations</li>
            <li><strong>Respect Intellectual Property:</strong> Not infringe on our or third-party intellectual property rights</li>
            <li><strong>Maintain Security:</strong> Keep your account credentials secure and notify us of any unauthorized use</li>
            <li><strong>Prohibited Activities:</strong> Not engage in any activities that could harm our systems or other users</li>
            <li><strong>Payment Obligations:</strong> Pay all fees and charges for services as agreed upon</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>Prohibited Uses:</strong> You may not use our services for any illegal, harmful, or unauthorized purpose, including but not limited to hacking, spamming, or distributing malware.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p><strong>Our Intellectual Property:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>All content, designs, logos, and materials on our website are owned by Ovid International Ltd</li>
            <li>Our software, applications, and technology solutions are protected by copyright and other intellectual property laws</li>
            <li>You may not copy, reproduce, distribute, or create derivative works without our written permission</li>
          </ul>
          
          <p><strong>Your Intellectual Property:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You retain ownership of any content or materials you provide to us</li>
            <li>By providing content, you grant us a license to use it for service delivery purposes</li>
            <li>We will not claim ownership of your intellectual property without explicit agreement</li>
          </ul>
          
          <p><strong>Third-Party Content:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We may use third-party software, libraries, and content in our services</li>
            <li>Such content is subject to their respective licenses and terms</li>
            <li>We respect and comply with all third-party intellectual property rights</li>
          </ul>
        </div>
      )
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p><strong>Disclaimer of Warranties:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Our services are provided "as is" and "as available" without warranties of any kind</li>
            <li>We do not guarantee that our services will be uninterrupted, secure, or error-free</li>
            <li>We disclaim all implied warranties, including merchantability and fitness for a particular purpose</li>
          </ul>
          
          <p><strong>Limitation of Liability:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Our total liability to you shall not exceed the amount you paid for our services in the 12 months preceding the claim</li>
            <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
            <li>This limitation applies to all causes of action, whether in contract, tort, or otherwise</li>
          </ul>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>Exceptions:</strong> These limitations do not apply to liability for personal injury, death, or damage to physical property caused by our gross negligence or willful misconduct.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <p><strong>Termination by You:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You may terminate your use of our services at any time</li>
            <li>Termination does not relieve you of obligations for services already provided</li>
            <li>You remain responsible for any outstanding payments</li>
          </ul>
          
          <p><strong>Termination by Us:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We may suspend or terminate your access for violations of these Terms</li>
            <li>We may terminate services for non-payment or legal compliance reasons</li>
            <li>We will provide reasonable notice when possible, except for serious violations</li>
          </ul>
          
          <p><strong>Effect of Termination:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your right to use our services ceases immediately upon termination</li>
            <li>We may delete your account and data after termination</li>
            <li>Provisions that survive termination include intellectual property, liability limitations, and dispute resolution</li>
          </ul>
        </div>
      )
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            These Terms are governed by and construed in accordance with the laws of the Republic of Kenya, 
            without regard to its conflict of law principles.
          </p>
          <p>
            We also recognize and comply with the <strong>African Union Convention on Cybersecurity and Personal Data Protection (Malabo Convention)</strong> 
            and other applicable regional and international laws.
          </p>
          <p><strong>Dispute Resolution:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Any disputes arising from these Terms shall be resolved through negotiation in good faith</li>
            <li>If negotiation fails, disputes shall be resolved through mediation in Nairobi, Kenya</li>
            <li>If mediation is unsuccessful, disputes shall be resolved in the courts of Kenya</li>
            <li>You agree to submit to the jurisdiction of Kenyan courts</li>
          </ul>
        </div>
      )
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.
          </p>
          <p><strong>Notification of Changes:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We will notify users of material changes via email or website notice</li>
            <li>Continued use of our services after changes constitutes acceptance of the new Terms</li>
            <li>If you disagree with changes, you must stop using our services</li>
          </ul>
          <p><strong>Version Control:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Each version of these Terms will be dated and archived</li>
            <li>Previous versions will be available upon request</li>
            <li>The current version will always be available on our website</li>
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
          <p>For questions about these Terms of Service, contact us:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p><strong>Ovid International Ltd</strong></p>
            <p>Website: <a href="https://www.ovid.co.ke" className="text-primary-600 hover:text-primary-700">www.ovid.co.ke</a></p>
            <p>Email: <a href="mailto:privacy@ovid.co.ke" className="text-primary-600 hover:text-primary-700">privacy@ovid.co.ke</a></p>
            <p>Address: Nairobi, Kenya</p>
          </div>
          <p>
            <strong>Legal Inquiries:</strong> For legal matters or formal notices, please contact us at the email address above. 
            We will respond to all legitimate inquiries within a reasonable timeframe.
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              These terms govern your use of Ovid International Ltd services. Please read them carefully before using our website or services.
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
              These Terms of Service are effective as of {currentDate}. We may update these terms from time to time. 
              Please check this page periodically for any changes. Your continued use of our services after any 
              modifications indicates your acceptance of the updated terms.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService 