import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'

const Accessibility = ({ navigateToPage, scrollToSection }) => {
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
                      Bird Proofing
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
                        Bird Proofing
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
                Accessibility Statement
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                EverSolar is committed to ensuring digital accessibility for people with disabilities and continuously improving the user experience for everyone.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Accessibility</h2>
                <p className="text-gray-600 mb-4">
                  EverSolar is committed to ensuring our website and services are accessible to all users, including those with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and continuously work to improve the accessibility of our digital platforms.
                </p>
                <p className="text-gray-600">
                  We believe that everyone should be able to access information about our solar maintenance services and contact us easily, regardless of their abilities or the technology they use.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
                <p className="text-gray-600 mb-4">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Semantic HTML structure for screen reader compatibility</li>
                  <li>Keyboard navigation support for all interactive elements</li>
                  <li>High contrast color schemes that meet WCAG guidelines</li>
                  <li>Descriptive alt text for all images and graphics</li>
                  <li>Clear and consistent navigation structure</li>
                  <li>Readable fonts and appropriate text sizing</li>
                  <li>Focus indicators for keyboard navigation</li>
                  <li>Descriptive link text and button labels</li>
                  <li>Error identification and suggestions in forms</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assistive Technology Compatibility</h2>
                <p className="text-gray-600 mb-4">
                  Our website is designed to be compatible with various assistive technologies:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Screen readers (JAWS, NVDA, ORCA, VoiceOver)</li>
                  <li>Keyboard-only navigation</li>
                  <li>Voice recognition software</li>
                  <li>Screen magnification tools</li>
                  <li>Alternative input devices</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We test our website regularly with these technologies to ensure optimal compatibility and user experience.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browser and Device Support</h2>
                <p className="text-gray-600 mb-4">
                  Our website is optimized for accessibility across multiple platforms:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                  <li>Mobile devices (iOS and Android)</li>
                  <li>Tablets and desktop computers</li>
                  <li>Various screen sizes and resolutions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Content</h2>
                <p className="text-gray-600 mb-4">
                  While we strive to ensure accessibility across our entire website, some third-party content may not meet the same accessibility standards. This may include:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Embedded maps and location services</li>
                  <li>Social media widgets and plugins</li>
                  <li>Third-party analytics and tracking tools</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We work with our third-party providers to improve accessibility and can provide alternative ways to access this information upon request.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Access Methods</h2>
                <p className="text-gray-600 mb-4">
                  If you encounter accessibility barriers on our website, we offer alternative ways to access our services:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Phone consultations for service information and quotes</li>
                  <li>Email communication for detailed inquiries</li>
                  <li>Alternative document formats upon request</li>
                  <li>In-person consultations when appropriate</li>
                  <li>Assistance from our team for online form completion</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Improvements</h2>
                <p className="text-gray-600 mb-4">
                  We are continuously working to improve the accessibility of our website and services:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Regular accessibility audits and testing</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>User feedback integration for improvement identification</li>
                  <li>Updates to meet evolving accessibility standards</li>
                  <li>Consultation with accessibility experts and disabled users</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Known Issues</h2>
                <p className="text-gray-600 mb-4">
                  We are aware of the following accessibility challenges and are working to address them:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Some interactive elements may require mouse interaction in older browsers</li>
                  <li>Complex data tables may not be fully accessible on mobile devices</li>
                  <li>Video content may not always include captions or audio descriptions</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We prioritize fixing these issues and welcome your feedback on any barriers you encounter.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Accessibility</h2>
                <p className="text-gray-600 mb-4">
                  Our physical services are also designed with accessibility in mind:
                </p>
                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                  <li>Clear communication about service procedures and safety requirements</li>
                  <li>Flexible scheduling to accommodate individual needs</li>
                  <li>Alternative communication methods for deaf or hard-of-hearing clients</li>
                  <li>Written reports and documentation in accessible formats</li>
                  <li>Accommodation for mobility or access requirements during service visits</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback and Contact</h2>
                <p className="text-gray-600 mb-4">
                  We welcome your feedback on the accessibility of our website and services. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Email:</strong> info@eversolar.com.au</p>
                  <p><strong>Phone:</strong> 0439 729 969</p>
                  <p><strong>Address:</strong> Lane Cove, NSW, Australia</p>
                  <p><strong>Website:</strong> www.eversolar.com.au</p>
                </div>
                <p className="text-gray-600">
                  We aim to respond to accessibility feedback within 2 business days and will work with you to provide an accessible alternative or resolve the issue where possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Accessibility 