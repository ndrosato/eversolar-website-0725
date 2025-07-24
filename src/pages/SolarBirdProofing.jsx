import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
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
  Bird,
  Hammer,
  ShieldCheck,
  Gauge,
  TrendingDown,
  Bug,
  AlertCircle,
  Scissors,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'

// Import images
import solarBirdProofingImage from '../assets/solar-bird-proofing.jpg'
import solarBirdProofingInstallationImage from '../assets/solar-bird-proofing-image.jpg'
import residentialSolarImage from '../assets/residential-solar-panels.jpg'
import residentialSolarProfessionalProcessImage from '../assets/residential-solar-professional-process.jpg'
import thermalImagingImage from '../assets/thermal-imaging-inspection.jpg'
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const SolarBirdProofing = ({ scrollToSection, navigateToPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container-max">
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
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${solarBirdProofingImage})`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="container-max text-center pt-16 sm:pt-20 lg:pt-12">
          <div className="max-w-5xl mx-auto">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Professional{' '}
              <span className="text-primary">Solar Bird Proofing</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
              When birds become a problem and start nesting under your solar panels, our professional bird proofing solutions prevent damage, maintain warranties, and restore optimal performance.
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
                Get Your Free Assessment
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

      {/* Why Bird Proofing is Essential */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              When Birds Become a{' '}
              <span className="text-primary">Problem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              If you're experiencing bird issues with nesting under panels, damage, or significant droppings, professional bird proofing solutions can resolve these problems and prevent future damage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="card-hover border-l-4 border-l-red-500">
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Performance Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Bird droppings can reduce solar panel efficiency by up to 25%. Even small amounts of debris can create hot spots and significantly impact energy production.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Blocked sunlight reduces energy output</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Hot spots can damage solar cells permanently</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Nesting materials block airflow and cooling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Expensive Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Birds can cause thousands of dollars in damage through nesting, chewing wires, and creating fire hazards. Prevention is far more cost-effective than repairs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>Chewed wiring requires expensive repairs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>Fire risk from nesting materials</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>Voided warranties from damage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <Bug className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Health & Pest Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Bird nests attract secondary pests and create health hazards. Droppings can carry diseases and create slip hazards around your property.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>Disease transmission through droppings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>Mites, fleas, and other pests</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>Slip hazards from accumulated droppings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Professional Installation Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional{' '}
              <span className="text-primary">Installation Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We use premium bird proofing mesh systems with a proven installation process that protects your panels without voiding warranties or causing damage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={solarBirdProofingInstallationImage} 
                alt="Professional solar bird proofing installation process"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Initial Assessment</h3>
                  <p className="text-muted-foreground">
                    We conduct a thorough inspection of your solar installation to identify vulnerable areas, existing damage, and the best approach for your specific system configuration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Precise Measurement</h3>
                  <p className="text-muted-foreground">
                    We measure each panel perimeter precisely to ensure perfect fit of our mesh system. Custom cutting ensures no gaps that birds could exploit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Safe Installation</h3>
                  <p className="text-muted-foreground">
                    Using UV-stabilized clips and premium stainless steel mesh, we secure the system without drilling, screwing, or gluing anything to your panels - maintaining your warranty.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Quality Inspection</h3>
                  <p className="text-muted-foreground">
                    Final inspection ensures complete coverage with no gaps, proper tension, and secure fastening. We provide documentation and warranty information upon completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional System Features */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional{' '}
              <span className="text-primary">System</span> Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We use premium-grade bird proofing mesh systems designed specifically for Australian conditions, trusted by professionals nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Premium Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stainless steel mesh with full-width PVC coating for maximum durability and UV resistance in harsh Australian conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>No-Drill Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proprietary UV-stabilized nylon fasteners secure without drilling or screwing, preserving your panel warranty.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Virtually Invisible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Black mesh design is barely visible from ground level, maintaining your property's aesthetic appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Long-Term Durability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Long-term warranty coverage with proven performance in extreme Australian weather conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Maintenance Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  System allows easy panel removal for maintenance while keeping bird proofing intact and functional.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Industry Trusted</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional-grade systems trusted by pest control professionals and solar installers across Australia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When You Need Bird Proofing */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Signs You Need{' '}
              <span className="text-primary">Bird Proofing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Bird proofing is only necessary when you're experiencing problems. These signs indicate you may need professional bird proofing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Immediate Action Required</h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-red-500 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Bird className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Birds Nesting Under Panels</h4>
                        <p className="text-muted-foreground">
                          Visible nesting materials, frequent bird activity, or chirping sounds from roof area.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Droplets className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Heavy Droppings Accumulation</h4>
                        <p className="text-muted-foreground">
                          Significant bird droppings on panels, gutters, or patio areas below solar installation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <TrendingDown className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Declining Energy Production</h4>
                        <p className="text-muted-foreground">
                          Noticeable drop in solar energy output that can't be explained by weather or seasonal changes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Early Warning Signs</h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-yellow-500 bg-yellow-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Bird className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Increased Bird Activity</h4>
                        <p className="text-muted-foreground">
                          Frequent bird sightings around your roof or panels, particularly pigeons, seagulls, or crows.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500 bg-yellow-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Eye className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Small Amounts of Debris</h4>
                        <p className="text-muted-foreground">
                          Small twigs, feathers, or minor droppings appearing around panels before major nesting occurs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500 bg-yellow-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">High-Risk Location</h4>
                        <p className="text-muted-foreground">
                          Properties near parks, water sources, or areas where neighbours have reported bird problems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Professional Bird Proofing */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of Professional{' '}
              <span className="text-primary">Bird Proofing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Investing in professional bird proofing delivers immediate and long-term benefits that protect your solar investment and property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Maintained Performance</h3>
                <p className="text-muted-foreground">
                  Prevent up to 25% energy loss from bird-related obstructions and damage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cost Savings</h3>
                <p className="text-muted-foreground">
                  Avoid expensive repairs and cleaning costs with upfront protection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Warranty Protection</h3>
                <p className="text-muted-foreground">
                  Maintain manufacturer warranties with non-invasive installation methods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Health & Safety</h3>
                <p className="text-muted-foreground">
                  Eliminate health risks from droppings and secondary pest infestations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your Solar Investment Today
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            If you're experiencing bird problems with your solar panels, get a free assessment and quote for professional bird proofing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => {
                navigateToPage('home')
                setTimeout(() => scrollToSection('contact'), 100)
              }}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold"
            >
              Get Your Free Assessment
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4 h-auto font-semibold"
            >
              <Phone className="mr-3 w-5 h-5" />
              Call 0439 729 969
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img 
                  src={eversolarLogoWhite} 
                  alt="EverSolar" 
                  className="h-8 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    navigateToPage('home')
                    setTimeout(() => scrollToSection('home'), 100)
                  }}
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
              <ul className="space-y-1 text-sm text-secondary-foreground/80">
                <li><button onClick={() => navigateToPage('commercial-om')} className="hover:text-primary transition-colors text-left py-0 leading-tight">Commercial O&M</button></li>
                <li><button onClick={() => navigateToPage('residential-cleaning')} className="hover:text-primary transition-colors text-left py-0 leading-tight">Residential Services</button></li>
                <li><button onClick={() => navigateToPage('solar-bird-proofing')} className="hover:text-primary transition-colors text-left py-0 leading-tight">Solar Bird Proofing</button></li>
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
    </div>
  )
}

export default SolarBirdProofing 