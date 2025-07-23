import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'

const TermsOfService = ({ navigateToPage, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => navigateToPage('home')}>
                <img 
                  src="/src/assets/eversolar-logo-black.jpg" 
                  alt="EverSolar" 
                  className="h-8 md:h-10 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigateToPage('home')}
                className="text-gray-800 hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-primary transition-colors font-medium">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button 
                      onClick={() => navigateToPage('commercial-om')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Commercial O&M
                    </button>
                    <button 
                      onClick={() => navigateToPage('residential-cleaning')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Residential Solar Cleaning
                    </button>
                    <button 
                      onClick={() => navigateToPage('solar-bird-proofing')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Solar Bird Proofing
                    </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigateToPage('how-it-works')}
                className="text-gray-800 hover:text-primary transition-colors font-medium"
              >
                How It Works
              </button>
              
              <button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                className="text-gray-800 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="font-medium">0439 729 969</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@eversolar.com.au</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-gray-800 hover:text-primary transition-colors font-medium py-2"
                >
                  Home
                </button>
                
                {/* Services Section */}
                <div>
                  <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center justify-between w-full text-left text-gray-800 hover:text-primary transition-colors font-medium py-2"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <button 
                        onClick={() => {
                          navigateToPage('commercial-om')
                          setIsMenuOpen(false)
                        }}
                        className="block text-left text-gray-600 hover:text-primary transition-colors py-2"
                      >
                        Commercial O&M
                      </button>
                      <button 
                        onClick={() => {
                          navigateToPage('residential-cleaning')
                          setIsMenuOpen(false)
                        }}
                        className="block text-left text-gray-600 hover:text-primary transition-colors py-2"
                      >
                        Residential Solar Cleaning
                      </button>
                      <button 
                        onClick={() => {
                          navigateToPage('solar-bird-proofing')
                          setIsMenuOpen(false)
                        }}
                        className="block text-left text-gray-600 hover:text-primary transition-colors py-2"
                      >
                        Solar Bird Proofing
                      </button>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => {
                    navigateToPage('how-it-works')
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-gray-800 hover:text-primary transition-colors font-medium py-2"
                >
                  How It Works
                </button>
                
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setTimeout(() => scrollToSection('contact'), 100)
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-gray-800 hover:text-primary transition-colors font-medium py-2"
                >
                  Contact
                </button>
                
                {/* Contact Info */}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">0439 729 969</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>info@eversolar.com.au</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                These terms govern your use of EverSolar's services and website. Please read them carefully.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using EverSolar's website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access or use our services.
                </p>
                <p className="text-gray-600">
                  If you do not agree to abide by the above, please do not use this service. EverSolar reserves the right to change these terms at any time without prior notice.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 mb-4">
                  EverSolar provides professional solar panel cleaning, maintenance, and optimization services including:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Commercial solar operations and maintenance (O&M)</li>
                  <li>Residential solar panel cleaning and maintenance</li>
                  <li>Solar bird proofing and protection services</li>
                  <li>Thermal imaging inspections and diagnostics</li>
                  <li>Performance monitoring and optimization</li>
                  <li>Related consulting and advisory services</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Agreements</h2>
                <p className="text-gray-600 mb-4">
                  All services are provided under separate service agreements that detail:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Scope of work and service specifications</li>
                  <li>Pricing, payment terms, and schedule</li>
                  <li>Performance guarantees and warranties</li>
                  <li>Safety protocols and insurance coverage</li>
                  <li>Cancellation and rescheduling policies</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Service agreements take precedence over these general terms for specific service provisions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms are specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Payment is due within 30 days of invoice date unless otherwise specified</li>
                  <li>Late payments may incur additional charges as outlined in the service agreement</li>
                  <li>We accept various payment methods including bank transfer, credit card, and corporate accounts</li>
                  <li>All prices are in Australian dollars (AUD) and include GST where applicable</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Quality and Warranties</h2>
                <p className="text-gray-600 mb-4">
                  EverSolar stands behind the quality of our services:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>All services are performed by certified technicians following industry best practices</li>
                  <li>We maintain comprehensive insurance coverage including $20M public liability</li>
                  <li>Performance improvements are guaranteed as specified in service agreements</li>
                  <li>Any issues with service quality will be addressed promptly at no additional cost</li>
                  <li>Warranties are specific to each service type and are detailed in service agreements</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Safety and Access</h2>
                <p className="text-gray-600 mb-4">
                  Client responsibilities for safe service delivery:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Provide safe access to solar installations and work areas</li>
                  <li>Disclose any known hazards or safety concerns at the site</li>
                  <li>Ensure compliance with site-specific safety requirements</li>
                  <li>Notify us of any changes to site conditions or access requirements</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  EverSolar maintains comprehensive safety protocols and OH&S compliance for all work performed.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  While we maintain comprehensive insurance and quality standards:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Our liability is limited to the value of services provided under the relevant agreement</li>
                  <li>We are not liable for consequential or indirect damages except as required by Australian law</li>
                  <li>Force majeure events (weather, natural disasters, etc.) may affect service delivery</li>
                  <li>Pre-existing equipment issues or defects are not covered unless specifically agreed</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content on this website and materials provided by EverSolar remain our intellectual property:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Proprietary cleaning methods, processes, and technologies</li>
                  <li>Performance reports, analysis, and recommendations</li>
                  <li>Website content, images, and documentation</li>
                  <li>Training materials and technical specifications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You may not reproduce, distribute, or use our intellectual property without written permission.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibent text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-600 mb-4">
                  Service agreements may be terminated:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>By either party with appropriate notice as specified in the service agreement</li>
                  <li>Immediately by EverSolar for non-payment or breach of terms</li>
                  <li>By mutual agreement of both parties</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Termination does not affect any accrued rights or obligations of either party.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-600">
                  These terms are governed by the laws of New South Wales, Australia. Any disputes will be resolved in the courts of New South Wales. These terms constitute the entire agreement between you and EverSolar regarding the use of our services and website.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> info@eversolar.com.au</p>
                  <p><strong>Phone:</strong> 0439 729 969</p>
                  <p><strong>Address:</strong> Lane Cove, NSW, Australia</p>
                  <p><strong>Website:</strong> www.eversolar.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TermsOfService 