import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail,
  MapPin,
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  Home, 
  Sun, 
  Award,
  TrendingUp,
  ArrowRight,
  Target,
  Calendar,
  FileText,
  AlertTriangle,
  Eye,
  Droplets,
  ThermometerSun,
  ClipboardCheck,
  Settings,
  Activity,
  Wrench,
  DollarSign,
  Leaf,
  Users,
  Clock,
  Star,
  Menu,
  ChevronDown,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'

// Import images
import residentialSolarHomeHeroImage from '../assets/residential-solar-home-hero.jpg'
import residentialSolarImage from '../assets/residential-solar-panels.jpg'
import solarRobotImage from '../assets/solar-robot-image.jpeg'
import residentialSolarProfessionalProcessImage from '../assets/residential-solar-professional-process.jpg'
import thermalImagingImage from '../assets/thermal-imaging-inspection.jpg'
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const ResidentialCleaning = ({ scrollToSection, navigateToPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [showWhitepaperPopup, setShowWhitepaperPopup] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    postcode: '',
    system_size_kw: '',
    want_quote: false,
    mobile: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleWhitepaperSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    console.log('🚀 === RESIDENTIAL WHITEPAPER FORM SUBMISSION START ===')
    console.log('📝 Form data received:', formData)

    // Check if all required fields are filled
    const requiredFields = ['first_name', 'email', 'postcode']
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
      email: formData.email,
      postcode: formData.postcode,
      system_size_kw: formData.system_size_kw || '',
      want_quote: formData.want_quote,
      mobile: formData.mobile || '',
      lead_source: 'Residential Solar Cleaning Page - Whitepaper Download',
      timestamp: new Date().toISOString()
    }

    console.log('📦 Payload prepared for Zapier:')
    console.log(JSON.stringify(webhookPayload, null, 2))

    try {
      console.log('🔗 Sending to Zapier webhook...')
      console.log('🌐 Webhook URL: https://hooks.zapier.com/hooks/catch/23907654/uu6qkth/')
      
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23907654/uu6qkth/', {
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
      setSubmitMessage('Thank you! Your information has been submitted successfully. We will send you the whitepaper shortly.')
      
      // Clear form
      setFormData({
        first_name: '',
        email: '',
        postcode: '',
        system_size_kw: '',
        want_quote: false,
        mobile: ''
      })

      console.log('🧹 Form cleared')

      // Close popup after 3 seconds
      setTimeout(() => {
        console.log('🔒 Closing popup...')
        setShowWhitepaperPopup(false)
        setSubmitMessage('')
      }, 3000)

    } catch (error) {
      console.error('❌ ERROR: Failed to send to Zapier:', error)
      setSubmitMessage('Sorry, there was an error submitting your information. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
      console.log('🏁 === FORM SUBMISSION END ===')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                      onClick={() => {
                        navigateToPage('solar-bird-proofing')
                        setIsServicesDropdownOpen(false)
                      }}
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
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
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

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white bg-cover bg-no-repeat px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${residentialSolarHomeHeroImage})`,
          backgroundPosition: window.innerWidth <= 768 ? 'center center' : '70% center',
          backgroundSize: 'cover',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="container-max text-center pt-16 sm:pt-20 lg:pt-12">
          <div className="max-w-5xl mx-auto">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Professional Residential{' '}
              <span className="text-primary">Solar Panel Cleaning</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
              Maximize your home's solar investment with safe, professional cleaning services. Increase energy production by up to 25% while protecting your warranty and family's safety.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 lg:mb-12 px-2">
              <Button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                size="lg"
                className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 h-auto"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                size="lg"
                className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 h-auto border-2 border-white"
              >
                <Phone className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                Call 0439 729 969
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Residential Solar Cleaning Matters */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Your Home Solar System{' '}
              <span className="text-primary">Needs Professional Cleaning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Australian conditions create unique challenges for residential solar panels. Dust, bird droppings, pollen, and environmental pollutants significantly impact your system's performance and your electricity savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="card-hover border-l-4 border-l-red-500">
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Lost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dirty solar panels can lose 15-25% efficiency in just 6 months, directly reducing your electricity savings and increasing your power bills.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    A 20% efficiency loss directly reduces your electricity savings and increases your power bills significantly.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Safety Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  DIY cleaning is dangerous - roof work causes 40+ deaths annually in Australia. Professional equipment and training are essential for safe cleaning.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    Leave it to certified professionals with proper safety equipment and insurance coverage.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Warranty Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Most solar panel warranties require regular professional cleaning. Improper DIY cleaning can void your warranty coverage.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Maintain your 25-year warranty with documented professional maintenance services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Our Whitepaper - Full Width */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Download Our Whitepaper</h2>
          <p className="text-lg mb-6 opacity-90">
            Download "Asset-Grade Solar Maintenance: A Commercial Guide to Solar Performance and Protection" 
            - Professional maintenance strategies to protect your home solar investment and maximize savings.
          </p>
          <Button 
            onClick={() => setShowWhitepaperPopup(true)}
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Download Free Whitepaper
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Instant download • No spam • Expert insights for homeowners
          </p>
        </div>
      </section>





      {/* Professional Cleaning Process */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional{' '}
              <span className="text-primary">Cleaning Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our systematic approach ensures maximum energy production improvement while maintaining complete safety and manufacturer warranty compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className="relative">
              <img 
                src={residentialSolarProfessionalProcessImage} 
                alt="Professional Solar Panel Cleaning Process" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">25%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Average Efficiency Improvement</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8">Safe & Effective Cleaning</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Safety Assessment</h4>
                    <p className="text-muted-foreground">
                      Comprehensive site assessment, safety equipment setup, and risk evaluation before any work begins.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visual System Inspection</h4>
                    <p className="text-muted-foreground">
                      Detailed visual inspection of panels and mounting systems to identify any visible issues. We can organize certified trades for electrical work if needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Pure Water Cleaning</h4>
                    <p className="text-muted-foreground">
                      Deionized water and specialized brushes remove all contaminants without leaving residue or causing damage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quality Report</h4>
                    <p className="text-muted-foreground">
                      Before/after photos, performance notes, and maintenance recommendations for your records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Convenient appointment times that work around your schedule, including weekend availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerSun className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Performance Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optional thermal imaging and performance testing to identify issues invisible to the naked eye.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep your family safe - no need for dangerous DIY roof work or exposure to cleaning chemicals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pure water cleaning with no harmful chemicals - safe for your family, pets, and garden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protect Your Investment - Full Width */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Protect Your Solar Investment</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't let dirt and debris cost you hundreds in lost savings. Professional cleaning pays for itself while keeping your family safe.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Get Your Free Quote Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Solar{' '}
              <span className="text-primary">Care Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Beyond cleaning, we offer comprehensive services to protect and optimize your residential solar investment.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Bird Proofing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Professional bird mesh installation prevents nesting damage and reduces cleaning frequency.
                </p>
                <div className="flex items-start gap-6">
                  <ul className="text-sm text-left space-y-2 flex-1">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Prevents structural damage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Reduces fire risk from nesting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Maintains panel efficiency</span>
                    </li>
                  </ul>
                  <div className="flex justify-center items-start pt-6 w-40 -ml-10">
                    <Button 
                      onClick={() => navigateToPage('solar-bird-proofing')}
                      className="border-2 border-black text-black bg-white hover:bg-gray-50 px-8 py-4 text-sm font-medium w-full rounded-lg"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Saving More Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional solar cleaning typically pays for itself within 2-4 months through improved energy production. Book your service and start maximizing your solar savings immediately.
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
              Get Your Free Quote
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-4 h-auto text-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Call 0439 729 969
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
              <div className="text-sm opacity-80">Warranty Safe Cleaning</div>
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
                Professional residential solar panel cleaning and maintenance services across Australia. 
                Safe, effective cleaning that maximizes your energy savings and protects your investment.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><button onClick={() => navigateToPage('residential-cleaning')} className="hover:text-primary transition-colors text-left">Residential Solar Cleaning</button></li>
                <li><button onClick={() => navigateToPage('commercial-om')} className="hover:text-primary transition-colors text-left">Commercial O&M</button></li>
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
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
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
              <div>
                <Input
                  name="first_name"
                  placeholder="First Name *"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="postcode"
                  type="number"
                  placeholder="Postcode *"
                  required
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="system_size_kw"
                  type="number"
                  step="0.1"
                  placeholder="System Size (kW)"
                  value={formData.system_size_kw}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="want_quote"
                  name="want_quote"
                  checked={formData.want_quote}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="want_quote" className="text-sm text-gray-700">
                  Do you want a quote?
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                {isSubmitting ? 'Processing...' : 'Download'}
              </Button>

              {submitMessage && (
                <div className={`text-center text-sm p-3 rounded-lg ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Details submitted will be used to provide information relevant to your request. You can opt-out at any time and your information will never be shared. By submitting this form you agree to our{' '}
                <button 
                  onClick={() => navigateToPage('privacy-policy')}
                  className="text-blue-600 hover:underline"
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

export default ResidentialCleaning 