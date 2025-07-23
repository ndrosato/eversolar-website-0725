import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, ChevronDown, Users, Target, Award, TrendingUp, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

// Import images
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'
import aboutUsHeroImage from '../assets/about-us-hero-image.png'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const AboutUs = ({ navigateToPage, scrollToSection }) => {
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
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container-max">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={eversolarLogoBlack} 
                alt="EverSolar" 
                className="h-8 lg:h-10 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigateToPage('home')}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigateToPage('home')}
                className="font-medium transition-colors text-gray-700 hover:text-primary"
              >
                Home
              </button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className="font-medium transition-colors flex items-center space-x-1 text-gray-700 hover:text-primary"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
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
                )}
              </div>
              
              <button 
                onClick={() => navigateToPage('about-us')}
                className="font-medium transition-colors text-primary"
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                className="font-medium transition-colors text-gray-700 hover:text-primary"
              >
                Contact
              </button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:0439729969" 
                className="flex items-center space-x-2 text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0439 729 969</span>
              </a>
              <Button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                className="btn-primary"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t shadow-lg">
              <nav className="py-4 space-y-2">
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Home
                </button>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {isServicesDropdownOpen && (
                    <div className="bg-gray-50 border-l-2 border-primary ml-4">
                      <button 
                        onClick={() => {
                          navigateToPage('commercial-om')
                          setIsServicesDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Commercial O&M
                      </button>
                      <button 
                        onClick={() => {
                          navigateToPage('residential-cleaning')
                          setIsServicesDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Residential Solar Cleaning
                      </button>
                      <button 
                        onClick={() => {
                          navigateToPage('solar-bird-proofing')
                          setIsServicesDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Solar Bird Proofing
                      </button>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => {
                    navigateToPage('about-us')
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-primary font-medium hover:bg-gray-50"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setTimeout(() => scrollToSection('contact'), 100)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </button>
                <div className="px-4 py-2">
                  <a href="tel:0439729969" className="flex items-center space-x-2 text-gray-700 mb-3">
                    <Phone className="w-4 h-4" />
                    <span>0439 729 969</span>
                  </a>
                  <Button 
                    onClick={() => {
                      navigateToPage('home')
                      setTimeout(() => scrollToSection('contact'), 100)
                      setIsMenuOpen(false)
                    }} 
                    className="w-full btn-primary"
                  >
                    Get a Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-32 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutUsHeroImage})`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                EverSolar was founded on experience, integrity, and a deep understanding of what it takes to protect and maximise solar investments.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Journey</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Our journey began with family. Our founder, Nick Rosato, was introduced to the solar maintenance industry by his father, Paul Rosato — the founder of Australian Solar Care. With no industry background, Paul built his business from the ground up, driven by a simple idea: help people get more from their solar. Over the years, he did just that — saving systems, securing warranties, and helping customers unlock serious returns on their solar investments.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    Watching him succeed, grow, and reinvest in better tools and technology made a lasting impression. His reputation and long-standing customer relationships came from delivering real results. Eventually, after a decade of trusted service, Paul sold the company — but the legacy continued.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Now based in Sydney, Nick launched EverSolar with the same mission, but a fresh perspective: Help Australian businesses and property owners get the most from their solar — through smarter, cleaner, and more proactive maintenance.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    The solar industry is still growing, and maintenance is not just a best practice — it's a requirement for warranty, efficiency, and long-term performance. At EverSolar, we see an opportunity not only to provide premium solar cleaning and maintenance, but to help our clients enhance the value of their existing systems using the latest in robotic cleaning and performance technology.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg border border-primary/20 p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Commitment</h2>
                </div>
                
                <p className="text-lg text-gray-700 font-medium text-center">
                  We're here to make solar ownership smarter, cleaner, and more profitable.
                </p>
              </div>

              {/* Values Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Family Legacy</h3>
                  <p className="text-gray-600 text-sm">
                    Built on family values and a decade of industry experience
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                  <p className="text-gray-600 text-sm">
                    Honest service and transparent results for every client
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Latest robotic cleaning and performance technology
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Results</h3>
                  <p className="text-gray-600 text-sm">
                    Measurable improvements to solar performance and value
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-primary to-green-600 text-white">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your Solar Investment?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Experience the EverSolar difference with professional maintenance that delivers real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-10 py-4 h-auto text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => navigateToPage('how-it-works')}
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-4 h-auto text-lg"
              >
                How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-80">Average Performance Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$20M</div>
                <div className="text-sm opacity-80">Public Liability Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Warranty Compliant Service</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img 
                  src={eversolarLogoWhite} 
                  alt="EverSolar" 
                  className="h-8 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => navigateToPage('home')}
                />
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                Protecting Solar Assets with Precision
              </p>
              <p className="text-sm text-secondary-foreground/60">
                Professional solar panel maintenance and cleaning services across Australia. 
                Robotic precision, certified expertise, and guaranteed performance improvements.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><button onClick={() => navigateToPage('commercial-om')} className="hover:text-primary transition-colors text-left">Commercial O&M</button></li>
                <li><button onClick={() => navigateToPage('residential-cleaning')} className="hover:text-primary transition-colors text-left">Residential Services</button></li>
                <li><button onClick={() => navigateToPage('solar-bird-proofing')} className="hover:text-primary transition-colors text-left">Solar Bird Proofing</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-secondary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0439 729 969</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@eversolar.com.au</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lane Cove, NSW (servicing Australia Wide)</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/eversolarau" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary transition-all duration-200 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-secondary-foreground hover:text-white" />
                  </a>
                  <a 
                    href="https://facebook.com/eversolarau" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary transition-all duration-200 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-secondary-foreground hover:text-white" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/eversolarau" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-secondary-foreground hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-secondary-foreground/60">
                © 2025 EverSolar. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-secondary-foreground/60">
                <button onClick={() => navigateToPage('privacy-policy')} className="hover:text-primary transition-colors">Privacy Policy</button>
                <button onClick={() => navigateToPage('terms-of-service')} className="hover:text-primary transition-colors">Terms of Service</button>
                <button onClick={() => navigateToPage('accessibility')} className="hover:text-primary transition-colors">Accessibility</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs 