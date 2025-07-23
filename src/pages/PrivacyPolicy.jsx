import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'

const PrivacyPolicy = ({ navigateToPage, scrollToSection }) => {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your privacy is important to us. This policy explains how EverSolar collects, uses, and protects your information.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Fill out contact forms on our website</li>
                  <li>Request quotes or consultations</li>
                  <li>Download whitepapers or resources</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via phone or email</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  This may include your name, email address, phone number, business name, postal address, and information about your solar system.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Provide and improve our solar cleaning and maintenance services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you service quotes and proposals</li>
                  <li>Deliver requested resources like whitepapers</li>
                  <li>Send you updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist us in operating our business (subject to confidentiality agreements)</li>
                  <li>To protect the rights, property, or safety of EverSolar, our customers, or others</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibent text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Under Australian Privacy Law, you have the right to:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent (where processing is based on consent)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600">
                  Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
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

export default PrivacyPolicy 