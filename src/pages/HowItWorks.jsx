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
  Search,
  Bot,
  TrendingDown,
  Building,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Monitor,
  UserCheck,
  Zap as ZapIcon,
  FileSearch,
  HeartHandshake
} from 'lucide-react'

// Import images
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'
import solarRobotImage from '../assets/solar-robot-image.jpeg'
import howItWorksHeroImage from '../assets/how-it-works-hero-image.png'
import beforeAfterCleaningImage from '../assets/before-and-after.png'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const HowItWorks = ({ scrollToSection, navigateToPage }) => {
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
                      Bird Proofing
                    </button>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('about'), 100)
                }}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                About
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
                href="tel:0450872806" 
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
                        onClick={() => navigateToPage('commercial-om')}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Commercial O&M
                      </button>
                      <button 
                        onClick={() => navigateToPage('residential-cleaning')}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Residential Solar Cleaning
                      </button>
                      <button 
                        onClick={() => navigateToPage('solar-bird-proofing')}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        Bird Proofing
                      </button>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => {
                    navigateToPage('home')
                    setTimeout(() => scrollToSection('about'), 100)
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  About
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
                
                <div className="px-4 py-2 border-t border-gray-200 mt-4">
                  <a 
                    href="tel:0450872806" 
                    className="flex items-center space-x-2 text-gray-700 mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0439 729 969</span>
                  </a>
                  <Button 
                    onClick={() => {
                      navigateToPage('home')
                      setTimeout(() => scrollToSection('contact'), 100)
                    }}
                    className="btn-primary w-full"
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${howItWorksHeroImage})`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="container-max text-center pt-16 sm:pt-20 lg:pt-12">
          <div className="max-w-5xl mx-auto">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              How It Works{' '}
              <span className="text-primary">Our Proven Process</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
              Simple. Safe. Effective. We make solar maintenance effortless with our proven 6-step process that delivers measurable results.
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

      {/* Process Overview */}
      <section id="process-section" className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven{' '}
              <span className="text-primary">6-Step Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every service follows our certified methodology designed for maximum safety, efficiency, and measurable performance improvements that protect your solar investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Process Step Cards */}
            {[
              {
                step: "01",
                title: "Initial Contact & Assessment",
                description: "Professional evaluation of your solar system's current condition and performance needs.",
                icon: MessageCircle,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                step: "02", 
                title: "Detailed System Review",
                description: "Comprehensive analysis of system specifications, site access, and optimal maintenance planning.",
                icon: Monitor,
                gradient: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Scheduled Site Visit",
                description: "Convenient scheduling with minimal disruption to your operations or daily routine.",
                icon: Calendar,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Robotic Cleaning & Inspection",
                description: "Advanced non-abrasive cleaning with simultaneous fault detection and system optimization.",
                icon: ZapIcon,
                gradient: "from-orange-500 to-orange-600"
              },
              {
                step: "05",
                title: "Performance Documentation",
                description: "Detailed reporting with before/after metrics and actionable optimization recommendations.",
                icon: FileSearch,
                gradient: "from-red-500 to-red-600"
              },
              {
                step: "06",
                title: "Ongoing Partnership",
                description: "Continuous support with maintenance reminders, warranty compliance, and performance monitoring.",
                icon: HeartHandshake,
                gradient: "from-teal-500 to-teal-600"
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-6xl font-bold text-gradient bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-20`}>
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process with Visual */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
                             <h2 className="text-4xl font-bold mb-8">
                 Advanced{' '}
                 <span className="text-primary">Cleaning Technology</span>
                 {' '}in Action
               </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Non-Abrasive Precision Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our advanced robotic systems use specialized brushes and purified water to remove all debris while preserving panel integrity and manufacturer warranties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Inspection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Simultaneous cleaning and inspection identifies potential issues including micro-cracks, corrosion, bird damage, and electrical faults before they impact performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Measurable Performance Gains</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pre and post-service performance measurements provide concrete evidence of improvement, with most systems showing 15-25% efficiency gains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
                         <div className="relative">
               <img 
                 src={beforeAfterCleaningImage} 
                 alt="Before and After Solar Panel Cleaning Comparison" 
                 className="w-full h-auto rounded-2xl shadow-2xl"
               />
              {/* Overlays for md+ screens */}
              <div className="hidden md:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1">25%</div>
                  <p className="text-xs text-muted-foreground font-medium">Performance<br />Increase</p>
                </div>
              </div>
              <div className="hidden md:block absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-primary text-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg">
                <div className="text-center">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1" />
                  <p className="text-xs font-medium">$20M Insurance<br />Protected</p>
                </div>
              </div>
              
              {/* Mobile tiles below image */}
              <div className="md:hidden mt-6 grid grid-cols-2 gap-4">
                <div className="bg-primary text-white p-4 rounded-xl shadow-xl">
                  <div className="text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-medium">$20M Insurance<br />Protected</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-2xl border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">25%</div>
                    <p className="text-sm text-muted-foreground font-medium">Average Performance<br />Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Industry Leaders{' '}
              <span className="text-primary">Choose EverSolar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications, comprehensive insurance, and proven results that protect your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">$20M Public Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete protection with comprehensive insurance coverage and bonding for total peace of mind on every project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SafeWork Certified</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully certified safety protocols ensure compliance with all Australian workplace health and safety standards.
                </p>
              </CardContent>
            </Card>

                         <Card className="text-center group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
               <CardContent className="p-10">
                 <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <Award className="w-10 h-10 text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Warranty Protection</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   All cleaning methods meet manufacturer requirements and maintain your solar panel warranty coverage.
                 </p>
               </CardContent>
             </Card>
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
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 h-auto"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 h-auto"
            >
              <Phone className="mr-2 w-5 h-5" />
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
                              <div className="text-sm opacity-80">SafeWork Compliant</div>
            </div>
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
                <li><button onClick={() => navigateToPage('solar-bird-proofing')} className="hover:text-primary transition-colors text-left py-0 leading-tight">Bird Proofing</button></li>
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

export default HowItWorks 