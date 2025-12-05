import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

function Contact() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <Mail className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Our Team</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about our AI solutions? Our team is ready to help you transform your business with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">contact@bitafrica-ai.com</p>
                  <p className="text-gray-400 text-sm">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (234) 567-8900</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Headquarters</h3>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                  <p className="text-gray-400 text-sm">With offices across Africa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10">
                  <MessageSquare className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Support</h3>
                  <p className="text-gray-400">support@bitafrica-ai.com</p>
                  <p className="text-gray-400 text-sm">24/7 Technical Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact; // ← This line is CRITICAL