import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  Building, 
  Home, 
  Factory, 
  Sun, 
  Menu, 
  X,
  Star,
  Award,
  TrendingUp,
  Users,
  ArrowRight,
  Lightbulb,
  Target,
  Gauge,
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'
import './App.css'

// Import pages
import CommercialOM from './pages/CommercialOM.jsx'
import ResidentialCleaning from './pages/ResidentialCleaning.jsx'
import SolarBirdProofing from './pages/SolarBirdProofing.jsx'
import WhitepaperDownload from './pages/WhitepaperDownload.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import EnterpriseContact from './pages/EnterpriseContact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Accessibility from './pages/Accessibility.jsx'
import AboutUs from './pages/AboutUs.jsx'

// Import images
// Using local images for Logos (white/black), Hero, Commercial O&M, Residential, Thermal Imaging and Bird Proofing, online placeholder images for others
import eversolarLogoWhite from './assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from './assets/eversolar-logo-black.jpg'
import heroSolarImage from './assets/solar-hero-image.jpeg'
import commercialOmImage from './assets/commercial-om-solar-panels.jpg'
import solarRobotImage from './assets/solar-robot-image.jpeg'
import residentialSolarImage from './assets/residential-solar-panels.jpg'
import residentialCleaningImage from './assets/residential-cleaning.jpg'
import thermalImagingInspectionImage from './assets/thermal-imaging-inspection.jpg'
import solarBirdProofingImage from './assets/solar-bird-proofing.jpg'
import passionForSolarExcellenceImage from './assets/passion-for-solar-excellence.jpg'
import instagramIcon from './assets/instagram-icon.jpg'
import facebookIcon from './assets/facebook-icon.jpg'
import linkedInIcon from './assets/linked-in-icon.jpg'
const heroImage = heroSolarImage
const commercialImage = commercialOmImage
const residentialImage = residentialCleaningImage
const residentialServicesCardImage = residentialSolarImage
const maintenanceImage = 'https://images.unsplash.com/photo-1625760324301-9ef2eb550cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
const professionalImage = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
const teamImage = passionForSolarExcellenceImage
const birdProofingImage = solarBirdProofingImage
const thermalImagingImage = thermalImagingInspectionImage

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    postcode: '',
    service_type: '',
    system_kwh: '',
    storeys: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showWhitepaperPopup, setShowWhitepaperPopup] = useState(false)
  const [whitepaperFormData, setWhitepaperFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    business_name: '',
    postcode: '',
    system_kw: '',
    buildings_managed: ''
  })
  const [whitepaperIsSubmitting, setWhitepaperIsSubmitting] = useState(false)
  const [whitepaperSubmitMessage, setWhitepaperSubmitMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhitepaperInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setWhitepaperFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleWhitepaperSubmit = async (e) => {
    e.preventDefault()
    setWhitepaperIsSubmitting(true)
    setWhitepaperSubmitMessage('')

    console.log('🚀 === HOMEPAGE WHITEPAPER FORM SUBMISSION START ===')
    console.log('📝 Form data received:', whitepaperFormData)

    // Check if all required fields are filled
    const requiredFields = ['first_name', 'last_name', 'email', 'phone', 'business_name', 'postcode', 'system_kw', 'buildings_managed']
    const emptyFields = requiredFields.filter(field => !whitepaperFormData[field])
    
    if (emptyFields.length > 0) {
      console.error('❌ Missing required fields:', emptyFields)
      setWhitepaperSubmitMessage('Please fill in all required fields.')
      setWhitepaperIsSubmitting(false)
      return
    }

    // Prepare payload for Zapier webhook
    const webhookPayload = {
      first_name: whitepaperFormData.first_name,
      last_name: whitepaperFormData.last_name,
      email: whitepaperFormData.email,
      mobile: whitepaperFormData.phone,
      business_name: whitepaperFormData.business_name,
      postcode: whitepaperFormData.postcode,
      system_kw: whitepaperFormData.system_kw,
      buildings_managed: whitepaperFormData.buildings_managed,
      request_quote: false,
      lead_source: 'Homepage - Commercial Section Whitepaper Download',
      timestamp: new Date().toISOString()
    }

    console.log('📦 Payload prepared for Zapier:')
    console.log(JSON.stringify(webhookPayload, null, 2))

    try {
      console.log('🔗 Sending to Zapier webhook...')
      console.log('🌐 Webhook URL: https://hooks.zapier.com/hooks/catch/23907654/uu6c7rq/')
      
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23907654/uu6c7rq/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      })
      
      console.log('📡 Response type:', response.type)
      console.log('📡 Response status:', response.status)

      // Check if request was sent successfully
      if (response.type === 'opaque') {
        console.log('✅ SUCCESS: Request sent to Zapier (no-cors mode)')
        console.log('ℹ️ Cannot verify response due to CORS, but request was sent successfully')
      } else if (response.ok) {
        console.log('✅ SUCCESS: Normal response from Zapier')
      } else {
        throw new Error(`Request failed with status: ${response.status}`)
      }

      // Show success message and clear form
      console.log('✅ Form data sent to Zapier!')
      setWhitepaperSubmitMessage('Thank you! Your information has been submitted successfully. We will send you the whitepaper shortly.')
      
      // Clear form
      setWhitepaperFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        business_name: '',
        postcode: '',
        system_kw: '',
        buildings_managed: ''
      })

      console.log('🧹 Form cleared')

      // Close popup after 3 seconds
      setTimeout(() => {
        console.log('🔒 Closing popup...')
        setShowWhitepaperPopup(false)
        setWhitepaperSubmitMessage('')
      }, 3000)

    } catch (error) {
      console.error('❌ ERROR: Failed to send to Zapier:', error)
      setWhitepaperSubmitMessage('Sorry, there was an error submitting your information. Please try again or contact us directly.')
    } finally {
      setWhitepaperIsSubmitting(false)
      console.log('🏁 === FORM SUBMISSION END ===')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service_type: value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    console.log('🚀 === QUOTE FORM SUBMISSION START ===')
    console.log('📝 Form data received:', formData)

    // Check if all required fields are filled
    const requiredFields = ['first_name', 'last_name', 'email', 'phone', 'postcode', 'service_type', 'system_kwh', 'storeys']
    const emptyFields = requiredFields.filter(field => !formData[field])
    
    if (emptyFields.length > 0) {
      console.error('❌ Missing required fields:', emptyFields)
      setSubmitMessage('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    // Prepare payload for Zapier webhook
    const webhookPayload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      service_type: formData.service_type,
      system_kwh: formData.system_kwh,
      storeys: formData.storeys,
      message: formData.message,
      lead_source: 'Homepage - Get a Quote Form',
      timestamp: new Date().toISOString()
    }

    console.log('📦 Payload prepared for Zapier:')
    console.log(JSON.stringify(webhookPayload, null, 2))

    try {
      console.log('🔗 Sending to Zapier webhook...')
      console.log('🌐 Webhook URL: https://hooks.zapier.com/hooks/catch/23907654/uu67syw/')
      
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23907654/uu67syw/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      })
      
      console.log('📡 Response type:', response.type)
      console.log('📡 Response status:', response.status)

      // Check if request was sent successfully
      if (response.type === 'opaque') {
        console.log('✅ SUCCESS: Request sent to Zapier (no-cors mode)')
        console.log('ℹ️ Cannot verify response due to CORS, but request was sent successfully')
      } else if (response.ok) {
        console.log('✅ SUCCESS: Normal response from Zapier')
      } else {
        throw new Error(`Request failed with status: ${response.status}`)
      }

      // Show success message and clear form
      console.log('✅ Form data sent to Zapier!')
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
      
      // Clear form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        postcode: '',
        service_type: '',
        system_kwh: '',
        storeys: '',
        message: ''
      })

      console.log('🧹 Form cleared')

    } catch (error) {
      console.error('❌ ERROR: Failed to send to Zapier:', error)
      setSubmitMessage('Sorry, there was an error submitting your information. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
      console.log('🏁 === QUOTE FORM SUBMISSION END ===')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setIsServicesDropdownOpen(false)
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // Render different pages based on currentPage state
  if (currentPage === 'commercial-om') {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container-max">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src={isScrolled ? eversolarLogoBlack : eversolarLogoWhite} 
                  alt="EverSolar" 
                  className="h-8 lg:h-10 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => navigateToPage('home')}
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <button 
                  onClick={() => navigateToPage('home')}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  Home
                </button>
                
                {/* Services Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    className={`font-medium transition-colors flex items-center space-x-1 ${
                      isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                    }`}
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
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setTimeout(() => scrollToSection('contact'), 100)
                  }}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  Contact
                </button>
              </nav>

              {/* Contact Info & CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                              <a 
                href="tel:0439729969" 
                className={`flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
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
                className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white border-t shadow-lg">
                <nav className="py-4 space-y-2">
                  <button 
                    onClick={() => navigateToPage('home')}
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
                          onClick={() => navigateToPage('commercial-om')}
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
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => {
                      navigateToPage('home')
                      setTimeout(() => scrollToSection('contact'), 100)
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

        <CommercialOM scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
      </div>
    )
  }

  // Residential cleaning page
  if (currentPage === 'residential-cleaning') {
    return <ResidentialCleaning scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Solar bird proofing page
  if (currentPage === 'solar-bird-proofing') {
    return <SolarBirdProofing scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // How it works page
  if (currentPage === 'how-it-works') {
    return <HowItWorks scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Enterprise contact page
  if (currentPage === 'enterprise-contact') {
    return <EnterpriseContact scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Privacy policy page
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Terms of service page
  if (currentPage === 'terms-of-service') {
    return <TermsOfService scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Accessibility page
  if (currentPage === 'accessibility') {
    return <Accessibility scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // About Us page
  if (currentPage === 'about-us') {
    return <AboutUs scrollToSection={scrollToSection} navigateToPage={navigateToPage} />
  }

  // Whitepaper download page
  if (currentPage === 'whitepaper') {
    return <WhitepaperDownload navigateToPage={navigateToPage} scrollToSection={scrollToSection} />
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-max">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={isScrolled ? eversolarLogoBlack : eversolarLogoWhite} 
                alt="EverSolar" 
                className="h-8 lg:h-10 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('home')}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Home
              </button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className={`font-medium transition-colors flex items-center space-x-1 ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
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
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:0439729969" 
                className={`flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0439 729 969</span>
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t shadow-lg">
              <nav className="py-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
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
                        onClick={() => navigateToPage('commercial-om')}
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
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </button>
                <div className="px-4 py-2">
                  <a href="tel:0439729969" className="flex items-center space-x-2 text-gray-700 mb-3">
                    <Phone className="w-4 h-4" />
                    <span>0439 729 969</span>
                  </a>
                  <Button onClick={() => scrollToSection('contact')} className="w-full btn-primary">
                    Get a Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
        }}
      >
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Don't Clean Panels —{' '}
              <span className="text-primary">We Protect Solar Assets</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Protect your solar investment with robotic precision and certified performance results.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => navigateToPage('how-it-works')}
                className="btn-secondary text-lg px-8 py-4 border-2 border-white"
              >
                How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Fully Insured – $20M Public Liability</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">WorkSafe & OH&S Compliant</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Output-Performance Optimized – Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protecting Solar Assets with{' '}
              <span className="text-gradient">Precision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              EverSolar combines robotic precision, certified expertise, and data-driven performance 
              to deliver superior solar panel maintenance with tangible, measurable returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Performance Boost */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="performance-stat">+25%</div>
                <CardTitle>Performance Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced cleaning systems restore peak efficiency, increasing energy production by up to 25%.
                </p>
              </CardContent>
            </Card>

            {/* ISO Certified */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>ISO Certified Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rigorous quality control and enterprise-grade solutions with proper ISO certification protocols.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">ISO 9001</Badge>
                  <Badge variant="secondary">ISO 14001</Badge>
                  <Badge variant="secondary">ISO 45001</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Performance Reporting */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>Detailed Performance Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed performance reporting shows tangible ROI on your maintenance investment.
                </p>
              </CardContent>
            </Card>

            {/* Zero Risk */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Zero Risk Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  $20M insurance coverage with satisfaction guarantee for total peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Maintenance for Your Specific Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Select the path that matches your requirements for a customized maintenance solution 
              with dedicated expertise and specialized equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Commercial O&M */}
            <Card className="card-hover overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={commercialImage} 
                  alt="Commercial Solar Installation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium">For commercial properties & solar farms</div>
                <CardTitle>Commercial O&M</CardTitle>
                <CardDescription>
                  Comprehensive maintenance solutions for commercial properties, solar farms, industrial facilities, 
                  and utility-scale installations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => scrollToSection('commercial')}
                >
                  Commercial Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Residential Systems */}
            <Card className="card-hover overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={residentialServicesCardImage} 
                  alt="Professional Solar Technician Installing Residential Solar Panels on Rooftop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium">For homeowners</div>
                <CardTitle>Residential Systems</CardTitle>
                <CardDescription>
                  Premium care for homeowners who want maximum returns from their rooftop solar investment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => navigateToPage('residential-cleaning')}
                >
                  Residential Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial O&M Section */}
      <section id="commercial" className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">Commercial O&M</Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Commercial Solar Operations & Maintenance
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive maintenance solutions designed for commercial properties, office buildings, 
                retail complexes, and multi-tenant facilities. Our enterprise-grade approach ensures 
                maximum performance and ROI for your commercial solar investment.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Scheduled Maintenance Programs</h4>
                    <p className="text-muted-foreground">
                      Bi-annual to annual robotic cleaning with comprehensive inspections and detailed performance monitoring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-muted-foreground">
                      Advanced monitoring systems track energy production and identify optimization opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Compliance & Reporting</h4>
                    <p className="text-muted-foreground">
                      Comprehensive documentation for facility managers and property owners with ROI analysis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Commercial Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setShowWhitepaperPopup(true)}
                                     className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 border-0"
                >
                  Download Our Whitepaper
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={solarRobotImage} 
                alt="Commercial Solar Operations & Maintenance - Robotic Cleaning Technology" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+22%</div>
                  <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section id="residential" className="section-padding bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={residentialImage} 
                alt="Professional Residential Solar Panel Cleaning - Robotic Cleaning System on Rooftop" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+18%</div>
                  <div className="text-sm text-muted-foreground">Power Output Increase</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">Residential Services</Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Residential Solar Panel Maintenance
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Premium care for homeowners who want maximum returns from their rooftop solar investment. 
                Our residential maintenance programs are designed to keep your system performing at peak 
                efficiency year-round.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Professional Cleaning</h4>
                    <p className="text-muted-foreground">
                      Bi-annual professional cleaning with performance reporting and panel condition assessment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">System Health Checks</h4>
                    <p className="text-muted-foreground">
                      Comprehensive inspections to identify potential issues before they impact performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      Professional service standards with comprehensive documentation and detailed condition reports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Residential Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigateToPage('residential-cleaning')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section id="additional-services" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Solar Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive protection and diagnostic services to maximize your solar investment's 
              performance, safety, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bird Proofing */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <img 
                  src={birdProofingImage} 
                  alt="Solar Panel Bird Proofing" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm">Protection Service</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Solar Bird Proofing</h3>
                
                <p className="text-muted-foreground mb-6">
                  Protect your solar investment from bird damage with professional-grade mesh installation. 
                  Prevent nesting, debris accumulation, and system damage while maintaining optimal airflow.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Humane bird deterrent system</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Prevents debris and nesting damage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Maintains system ventilation</span>
                  </div>
                </div>

                <Button 
                  className="btn-primary"
                  onClick={() => navigateToPage('solar-bird-proofing')}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Thermal Imaging */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm">Diagnostic Service</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Thermal Imaging Inspection</h3>
                
                <p className="text-muted-foreground mb-6">
                  Advanced infrared thermal imaging to detect hot spots, faulty panels, and electrical issues 
                  before they become costly problems. Comprehensive system health assessment.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Detects hidden electrical faults</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Identifies underperforming panels</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Prevents system failures</span>
                  </div>
                </div>


              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <img 
                  src={thermalImagingImage} 
                  alt="Thermal Imaging Solar Inspection" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Results Section */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our maintenance solutions deliver measurable improvements to your solar system's performance. 
              See the real-world results our clients experience:
            </p>
          </div>

          {/* Performance Analytics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Average performance improvement after professional maintenance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="performance-stat mb-2">+22%</div>
                <h4 className="text-lg font-semibold mb-2">Commercial</h4>
                <p className="text-muted-foreground">Office buildings and retail complexes</p>
              </div>
              <div className="text-center">
                <div className="performance-stat mb-2">+18%</div>
                <h4 className="text-lg font-semibold mb-2">Residential</h4>
                <p className="text-muted-foreground">Rooftop solar systems</p>
              </div>
              <div className="text-center">
                <div className="performance-stat mb-2">+25%</div>
                <h4 className="text-lg font-semibold mb-2">Solar Farms</h4>
                <p className="text-muted-foreground">Utility-scale installations</p>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Management Case Study */}
            <Card>
              <CardHeader>
                <CardTitle>Property Management Success</CardTitle>
                <CardDescription>Large-scale commercial solar array optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">
                      Large-scale solar array with 15% efficiency loss due to accumulated dust and environmental debris.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-muted-foreground">
                      Quarterly robotic cleaning program with bi-annual inspection and detailed performance monitoring.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">23%</div>
                      <div className="text-sm text-muted-foreground">Energy Output Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$42,000</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3.5</div>
                      <div className="text-sm text-muted-foreground">ROI Timeline (months)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Homeowner Case Study */}
            <Card>
              <CardHeader>
                <CardTitle>Homeowner Success</CardTitle>
                <CardDescription>Residential rooftop system optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">
                      5kW rooftop system with significant pollen buildup affecting generation during peak seasons.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-muted-foreground">
                      Semi-annual professional cleaning with performance reporting and panel condition assessment.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">18%</div>
                      <div className="text-sm text-muted-foreground">Power Output Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$820</div>
                      <div className="text-sm text-muted-foreground">Yearly Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">ROI Timeline (months)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our streamlined process ensures consistent results and complete transparency. 
              From initial assessment to ongoing optimization, we maintain clear communication every step of the way.
            </p>
          </div>

          {/* ISO Certification */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-lg px-6 py-3">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold">Every maintenance procedure follows our ISO 9001 certified quality management system</span>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Initial Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct a thorough evaluation of your solar system's current performance and maintenance needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Custom Service Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on your specific system, environment, and goals, we develop a tailored maintenance schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Professional Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our certified technicians implement advanced robotic cleaning and optimization procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Performance Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure and document pre/post-maintenance performance to validate efficiency improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <CardTitle>Detailed Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You receive comprehensive documentation of all work performed and resulting performance gains.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">6</span>
                </div>
                <CardTitle>Ongoing Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We continue regular maintenance according to your schedule, adapting to seasonal requirements.
                </p>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Passion for Solar Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by renewable energy pioneers who recognized that solar maintenance was being 
                overlooked despite its critical impact on system performance, EverSolar began with a 
                simple mission: to help solar asset owners maximize their investment.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We identified that traditional cleaning methods were inefficient, inconsistent, and 
                often damaging to solar panels. This insight led us to develop specialized robotic 
                cleaning technology combined with a data-driven approach to maintenance.
              </p>
              
              {/* Company Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Partnership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Results</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={teamImage} 
                alt="Renewable Energy Professional with Wind Turbines - A Passion for Solar Excellence" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>


        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Join hundreds of satisfied clients who trust EverSolar to maximize their renewable energy investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "EverSolar's maintenance program has transformed our solar farm's performance. 
                  The 28% increase in output speaks for itself, but it's their attention to detail 
                  and data-driven approach that truly sets them apart."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">JH</span>
                  </div>
                  <div>
                    <div className="font-semibold">James Harrison</div>
                    <div className="text-sm text-muted-foreground">Operations Director, SunPeak Energy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "We've worked with several maintenance providers before EverSolar, and the difference 
                  is night and day. Their robotic cleaning technology and certified technicians have 
                  helped us achieve unprecedented efficiency levels."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">MZ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Michelle Zhang</div>
                    <div className="text-sm text-muted-foreground">Facility Manager, Greenfield Properties</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "As a homeowner with a significant solar investment, I wanted the best maintenance possible. 
                  EverSolar's residential program has delivered exceptional ROI, with detailed reporting 
                  that shows exactly how much more energy we're producing."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">RW</span>
                  </div>
                  <div>
                    <div className="font-semibold">Robert Wilson</div>
                    <div className="text-sm text-muted-foreground">Homeowner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Engineered for Measurable Performance Gains</h3>
                <p className="text-muted-foreground">Backed by a Results-Based Commitment</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Comprehensive Service Warranty</h3>
                <p className="text-muted-foreground">$20M insurance coverage for peace of mind</p>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Detailed ROI and Performance Reports</h3>
                <p className="text-muted-foreground">Complete transparency on your investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Have questions about our solar maintenance services? Get in touch with our team for a prompt response.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-1">0439 729 969</p>
                  <p className="text-sm text-muted-foreground">Monday to Friday, 7am to 5pm AEST</p>
                </div>
              </div>

                           <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">info@eversolar.com.au</div>
                  <div className="text-sm text-muted-foreground">We aim to respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Lane Cove, NSW</div>
                  <div className="text-sm text-muted-foreground">Serving clients Australia-wide</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday to Friday: 7am - 5pm</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a customized quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input 
                        name="first_name"
                        placeholder="Enter your first name" 
                        required
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input 
                        name="last_name"
                        placeholder="Enter your last name" 
                        required
                        value={formData.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Enter your email address" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      placeholder="Enter your phone number"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Post Code *</label>
                    <Input 
                      name="postcode"
                      placeholder="Enter your post code" 
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interested In *</label>
                    <Select value={formData.service_type} onValueChange={handleServiceChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial O&M</SelectItem>
                        <SelectItem value="residential">Residential Services</SelectItem>
                        <SelectItem value="bird-proofing">Solar Bird Proofing</SelectItem>
                        <SelectItem value="thermal-imaging">Thermal Imaging Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">System Size (kWh) *</label>
                      <Input 
                        name="system_kwh"
                        type="number"
                        step="0.1"
                        placeholder="Enter system size in kWh" 
                        required
                        value={formData.system_kwh}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Number of Storeys *</label>
                      <Select value={formData.storeys} onValueChange={(value) => setFormData(prev => ({...prev, storeys: value}))} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of storeys" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-Storey">1-Storey</SelectItem>
                          <SelectItem value="2-Storey">2-Storey</SelectItem>
                          <SelectItem value="3-Storey">3-Storey</SelectItem>
                          <SelectItem value="4 or more Storeys">4 or more Storeys</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your solar system and maintenance needs..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                  
                  {submitMessage && (
                    <div className={`text-center p-3 rounded-lg ${
                      submitMessage.includes('successfully') 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can you schedule service?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically schedule services within 1-2 weeks, depending on your location and our current workload. 
                    For urgent situations, we offer priority scheduling options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What areas do you service?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide services throughout Australia, with teams based in major cities and regional areas. 
                    Contact us with your location for specific availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does maintenance cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pricing depends on system size, location, and condition. We provide free, no-obligation quotes 
                    after assessing your specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How often should panels be cleaned?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We recommend bi-annual to annual cleaning for most systems, depending on your location, 
                    environmental factors, and system design. We can provide a customized maintenance schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                  onClick={() => scrollToSection('home')}
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

      {/* Whitepaper Download Popup */}
      {showWhitepaperPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{zIndex: 9999}}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Download Literature</h3>
                <p className="text-sm text-gray-600 mt-1">Please submit your details to complete your download.</p>
              </div>
              <button
                onClick={() => setShowWhitepaperPopup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWhitepaperSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    name="first_name"
                    placeholder="First Name *"
                    required
                    value={whitepaperFormData.first_name}
                    onChange={handleWhitepaperInputChange}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <Input
                    name="last_name"
                    placeholder="Last Name *"
                    required
                    value={whitepaperFormData.last_name}
                    onChange={handleWhitepaperInputChange}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={whitepaperFormData.email}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={whitepaperFormData.phone}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <Input
                  name="business_name"
                  placeholder="Business Name *"
                  required
                  value={whitepaperFormData.business_name}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <Input
                  name="postcode"
                  placeholder="Post Code *"
                  required
                  value={whitepaperFormData.postcode}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <Input
                  name="system_kw"
                  placeholder="System kW *"
                  required
                  value={whitepaperFormData.system_kw}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <Input
                  name="buildings_managed"
                  placeholder="How many buildings do you manage? *"
                  required
                  value={whitepaperFormData.buildings_managed}
                  onChange={handleWhitepaperInputChange}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <Button
                type="submit"
                disabled={whitepaperIsSubmitting}
                                  className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                {whitepaperIsSubmitting ? 'Processing...' : 'Download'}
              </Button>

              {whitepaperSubmitMessage && (
                <div className={`text-center text-sm p-3 rounded-lg ${
                  whitepaperSubmitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {whitepaperSubmitMessage}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Details submitted will be used to provide information relevant to your request. You can opt-out at any time and your information will never be shared. By submitting this form you agree to our{' '}
                <button 
                  onClick={() => navigateToPage('privacy-policy')}
                  className="text-green-600 hover:underline"
                >
                  Privacy Policy
                </button>.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

