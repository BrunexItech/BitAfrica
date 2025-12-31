import React from 'react';
import { Shield, Lock, Eye, Database, Users, Globe, FileText, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      icon: <FileText className="h-5 w-5" />,
      content: `BitAfrica AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services specializing in AI solutions, software development, and technology education.`,
      points: []
    },
    {
      title: "Information We Collect",
      icon: <Database className="h-5 w-5" />,
      content: "We collect information that you provide directly to us, including:",
      points: [
        "Personal identification information (name, email address, phone number)",
        "Business information (company name, job title, industry)",
        "Educational background and professional qualifications",
        "Payment information for our services and training programs",
        "Communication preferences and correspondence"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-5 w-5" />,
      content: "Your information helps us provide and improve our services:",
      points: [
        "To deliver AI solutions and software development services",
        "To provide technology education and training programs",
        "To communicate about services, updates, and educational opportunities",
        "To personalize your experience with our platform",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-5 w-5" />,
      content: "We implement appropriate technical and organizational security measures:",
      points: [
        "Encryption of sensitive data in transit and at rest",
        "Regular security assessments and penetration testing",
        "Access controls and authentication mechanisms",
        "Secure development practices for all our software",
        "Regular employee training on data protection"
      ]
    },
    {
      title: "Data Retention",
      icon: <Shield className="h-5 w-5" />,
      content: "We retain personal information only as long as necessary:",
      points: [
        "Client data: Retained for 7 years after service termination",
        "Student records: Retained indefinitely for certification verification",
        "Marketing data: Retained until consent is withdrawn",
        "Analytics data: Aggregated and anonymized after 3 years"
      ]
    },
    {
      title: "Your Rights",
      icon: <Users className="h-5 w-5" />,
      content: "You have rights regarding your personal information:",
      points: [
        "Right to access and receive your data",
        "Right to rectify inaccurate information",
        "Right to erasure under certain circumstances",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing"
      ]
    },
    {
      title: "International Data Transfers",
      icon: <Globe className="h-5 w-5" />,
      content: "As a pan-African company, we may transfer data across borders:",
      points: [
        "We use Standard Contractual Clauses for international transfers",
        "We comply with local data protection regulations in each jurisdiction",
        "Data processing agreements with all third-party providers",
        "Transparency about data storage locations"
      ]
    }
  ];

  const complianceStandards = [
    { name: "GDPR Compliance", description: "Adheres to European Union General Data Protection Regulation standards" },
    { name: "Data Protection Act", description: "Complies with local data protection laws across African jurisdictions" },
    { name: "ISO 27001 Framework", description: "Follows international information security management standards" },
    { name: "Industry Best Practices", description: "Implements leading practices for AI and software development companies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              PRIVACY & DATA PROTECTION
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-gray-300 text-lg">
            Last updated: December 2024
          </p>
        </div>

        {/* Company Introduction */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-8 border border-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
              <Shield className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">BitAfrica AI Commitment</h2>
              <p className="text-gray-300 leading-relaxed">
                At BitAfrica AI, we take your privacy seriously. As a leading provider of AI solutions, 
                software development, and technology education across Africa, we understand the importance 
                of protecting personal and business information. This policy outlines our practices for 
                collecting, using, and safeguarding data in accordance with international standards and 
                local regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Compliance Standards */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Our Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white">{standard.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex-shrink-0">
                  <div className="text-cyan-400">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                  <p className="text-gray-300 mb-4">{section.content}</p>
                  
                  {section.points.length > 0 && (
                    <ul className="space-y-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-xl font-bold text-white mb-4">Contact Our Privacy Team</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              For privacy-related inquiries or to exercise your data protection rights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-cyan-400 font-medium">Email</p>
                <p className="text-gray-300">bitafrica.ai@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-400 font-medium">Data Protection Officer</p>
                <p className="text-gray-300">bitafrica.ai@gmail.com</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We aim to respond to all privacy inquiries within 48 hours.
            </p>
          </div>
        </div>

        {/* Update Notice */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            This Privacy Policy may be updated periodically to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons. The latest version will always 
            be available on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;