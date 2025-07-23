import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Phone, 
  Mail,
  MapPin,
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  Building, 
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
  Factory,
  Building2,
  Globe,
  Briefcase,
  Calculator,
  Handshake,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'

// Import images
import commercialOmImage from '../assets/commercial-om-solar-panels.jpg'
import solarRobotImage from '../assets/solar-robot-image.jpeg'
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const EnterpriseContact = ({ scrollToSection, navigateToPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    project_size: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service_type: 'enterprise',
          message: `Enterprise Inquiry - Company: ${formData.company}, Project Size: ${formData.project_size}, Location: ${formData.location}\n\nMessage: ${formData.message}`
        })
      })

      if (response.ok) {
        setSubmitMessage('Thank you! Your enterprise inquiry has been received. Our team will contact you within 24 hours to discuss your project.')
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          company: '',
          project_size: '',
          location: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        setSubmitMessage(errorData.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                        Solar Bird Proofing
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
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </button>
                
                <div className="px-4 py-2 border-t border-gray-200 mt-4">
                  <a 
                    href="tel:0439729969" 
                    className="flex items-center space-x-2 text-gray-700 mb-3"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0439 729 969</span>
                  </a>
                  <Button 
                    onClick={() => scrollToSection('contact')}
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${commercialOmImage})`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="container-max text-center">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-primary/20 text-primary-foreground border-primary mb-6">
              Enterprise Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Enterprise Solar{' '}
              <span className="text-primary">Operations & Maintenance</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Dedicated solutions for large companies, solar farms, and enterprise-scale installations. 
              Direct access to our senior team for projects requiring specialized attention and custom maintenance programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="btn-primary text-lg px-10 py-4 h-auto"
              >
                Schedule Direct Consultation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                href="tel:0439729969"
                size="lg"
                className="btn-secondary text-lg px-10 py-4 h-auto border-2 border-white"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call Direct: 0439 729 969
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Focus Areas */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Scale{' '}
              <span className="text-primary">Solar Operations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Specialized maintenance solutions for large-scale solar installations requiring dedicated project management and enterprise-grade service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solar Farms */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Solar Farms & Utility Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Multi-megawatt solar farms requiring systematic maintenance schedules, performance monitoring, and regulatory compliance.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>100MW+ installations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Grid-tied performance optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Regulatory compliance reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Large Corporations */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Fortune 500 & Large Corporations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Multi-site corporate solar portfolios requiring coordinated maintenance across multiple locations and facilities.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Multi-site coordination</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Executive reporting dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Corporate sustainability goals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industrial & Manufacturing */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Industrial & Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Heavy industrial facilities with specialized requirements for dust management, safety protocols, and operational integration.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Heavy industry safety protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Specialized contamination management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Integration with plant operations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Enterprise Clients{' '}
                <span className="text-primary">Choose EverSolar</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Large-scale solar operations require specialized expertise, dedicated project management, 
                and enterprise-grade service delivery that smaller providers cannot match.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Dedicated Account Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Custom Pricing & Contracts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Australia-Wide Service Network</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">$20M+ Insurance Coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">ISO Certified Operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Performance Guarantees</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={solarRobotImage} 
                alt="Enterprise Solar Maintenance Technology" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">MW Under Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Direct Enterprise{' '}
              <span className="text-primary">Contact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Skip the general inquiry process. Connect directly with our enterprise team for immediate attention to your large-scale solar maintenance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Priority Enterprise Contact</h3>
                <p className="text-muted-foreground mb-8">
                  Direct access to our senior management team for enterprises requiring immediate consultation and custom maintenance solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Priority Phone Line</h4>
                    <p className="text-xl font-bold text-primary mb-1">0439 729 969</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for enterprise emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Enterprise Email</h4>
                    <p className="text-lg font-medium mb-1">enterprise@eversolar.com.au</p>
                    <p className="text-sm text-muted-foreground">Direct to enterprise team - 2 hour response guarantee</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Executive Meetings</h4>
                    <p className="text-muted-foreground">
                      On-site consultations and boardroom presentations available for major projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Project Inquiry</CardTitle>
                <CardDescription>
                  Submit your enterprise project details for priority review and immediate response from our senior team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input 
                        name="first_name"
                        placeholder="Enter your first name" 
                        required
                        value={formData.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
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
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input 
                      name="company"
                      placeholder="Your company name" 
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
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
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input 
                        name="phone"
                        type="tel" 
                        placeholder="Enter your phone number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Size (MW)</label>
                      <Input 
                        name="project_size"
                        placeholder="e.g., 50MW, 100MW+" 
                        required
                        value={formData.project_size}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Location</label>
                      <Input 
                        name="location"
                        placeholder="Project location" 
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea 
                      name="message"
                      placeholder="Describe your enterprise solar maintenance requirements, timeline, and any specific challenges..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enterprise Inquiry'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                  
                  {submitMessage && (
                    <div className={`text-center p-3 rounded-lg ${
                      submitMessage.includes('received') 
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
                  <span>enterprise@eversolar.com.au</span>
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

export default EnterpriseContact 