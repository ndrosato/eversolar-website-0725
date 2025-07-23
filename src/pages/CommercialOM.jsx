import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
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
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'

// Import images
import commercialOmHeroImage from '../assets/commercial-om-hero-image.jpg'
import commercialOmImage from '../assets/commercial-om-solar-panels.jpg'
import solarRobotImage from '../assets/solar-robot-image.jpeg'
import thermalImagingImage from '../assets/thermal-imaging-inspection.jpg'
import eversolarLogoWhite from '../assets/eversolar-logo-white.jpg'
import instagramIcon from '../assets/instagram-icon.jpg'
import facebookIcon from '../assets/facebook-icon.jpg'
import linkedInIcon from '../assets/linked-in-icon.jpg'

const CommercialOM = ({ scrollToSection, navigateToPage }) => {
  const [showWhitepaperPopup, setShowWhitepaperPopup] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    business_name: '',
    postcode: '',
    system_kw: '',
    buildings_managed: ''
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

    console.log('🚀 === FORM SUBMISSION START ===')
    console.log('📝 Form data received:', formData)

    // Check if all required fields are filled
    const requiredFields = ['first_name', 'last_name', 'email', 'phone', 'business_name', 'postcode', 'system_kw', 'buildings_managed']
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
      mobile: formData.phone,
      business_name: formData.business_name,
      postcode: formData.postcode,
      system_kw: formData.system_kw,
      buildings_managed: formData.buildings_managed,
      request_quote: false,
      lead_source: 'Commercial O&M Page - Whitepaper Download',
      timestamp: new Date().toISOString()
    }

    console.log('📦 Payload prepared for Zapier:')
    console.log(JSON.stringify(webhookPayload, null, 2))

    try {
      console.log('🔗 Sending directly to Zapier webhook...')
      console.log('🌐 Webhook URL: https://hooks.zapier.com/hooks/catch/23907654/uu6tab5/')
      
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23907654/uu6tab5/', {
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
        setSubmitMessage('')
      }, 3000)

    } catch (error) {
      console.error('❌ === ERROR OCCURRED ===')
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Full error object:', error)
      
      // Check for specific error types
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.error('🌐 Network error - check internet connection')
      } else if (error.message.includes('Request failed')) {
        console.error('🔗 Zapier webhook error - check webhook URL and configuration')
      }
      
      setSubmitMessage('Failed to process download. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
      console.log('🏁 === FORM SUBMISSION END ===')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${commercialOmHeroImage})`,
          backgroundPosition: '70% center'
        }}
      >
        <div className="container-max text-center">
          <div className="max-w-5xl mx-auto">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional Commercial{' '}
              <span className="text-primary">Solar Panel Cleaning</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Protect your commercial solar investment and maintain manufacturer warranties with professional cleaning and maintenance services designed for Australian conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => {
                  navigateToPage('home')
                  setTimeout(() => scrollToSection('contact'), 100)
                }}
                size="lg"
                className="btn-primary text-lg px-10 py-4 h-auto"
              >
                Get Your Free Assessment
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                className="btn-secondary text-lg px-10 py-4 h-auto border-2 border-white"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call 0439 729 969
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Solar Cleaning Matters */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Commercial Solar Panel Cleaning is{' '}
              <span className="text-primary">Critical</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Commercial solar installations face unique challenges that can significantly impact performance and return on investment. Understanding these factors is essential for protecting your solar asset.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="card-hover border-l-4 border-l-red-500">
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Performance Degradation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dirty solar panels can lose 15-25% of their efficiency within just 6 months, translating to thousands in lost revenue for commercial installations.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    A 100kW system losing 20% efficiency costs approximately $4,000-6,000 annually in lost energy production.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Warranty Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Most solar panel manufacturers require regular cleaning and maintenance to maintain warranty coverage. Failure to comply can void your warranty.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    Document your maintenance with professional cleaning reports to ensure warranty protection.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">ROI Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Regular maintenance extends system life, maintains peak performance, and protects your significant solar investment over its 25+ year lifespan.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Professional cleaning typically pays for itself within 2-3 months through improved energy production.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Our Whitepaper - Full Width */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Download Our Whitepaper</h2>
          <p className="text-lg mb-6 opacity-90">
            Download "Asset-Grade Solar Maintenance: A Commercial Guide to Solar Performance and Protection" 
            - Essential strategies for maximizing your commercial solar investment through professional maintenance.
          </p>
          <Button 
            onClick={() => setShowWhitepaperPopup(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Download Free Whitepaper
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Instant download • No spam • Professional insights from industry experts
          </p>
        </div>
      </section>

      {/* Performance Impact Visualization */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                The Hidden Cost of{' '}
                <span className="text-red-600">Dirty Solar Panels</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Solar panel efficiency decreases progressively without regular cleaning. Australian conditions, including dust, bird droppings, and environmental pollutants, accelerate this degradation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Dust and Dirt Accumulation</h4>
                    <p className="text-muted-foreground">
                      Fine particles reduce light transmission and create hot spots that can permanently damage panels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bird Droppings and Organic Matter</h4>
                    <p className="text-muted-foreground">
                      Acidic bird droppings can etch panel surfaces and create shading that disproportionately affects output.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Environmental Pollutants</h4>
                    <p className="text-muted-foreground">
                      Industrial emissions, salt spray, and pollen create films that significantly reduce efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Performance Decline Without Cleaning</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Clean Installation</span>
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-full h-4 bg-primary rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">3 Months</span>
                    <span className="text-yellow-600 font-bold">92%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[92%] h-4 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">6 Months</span>
                    <span className="text-orange-600 font-bold">82%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[82%] h-4 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">12 Months</span>
                    <span className="text-red-600 font-bold">75%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[75%] h-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">18+ Months</span>
                    <span className="text-red-700 font-bold">65%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div className="w-[65%] h-4 bg-red-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-sm font-medium text-red-800">
                  <strong>Critical Impact:</strong> A 25% efficiency loss on a 200kW system equals approximately $10,000-23,000 in lost annual revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Warranty Requirements */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturer Warranty{' '}
              <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Protecting your warranty coverage requires documented maintenance. Don't risk voiding your multi-million dollar investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Documentation Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular cleaning schedules (typically every 6-12 months)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional maintenance reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Before and after performance data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Photographic evidence of maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Major Manufacturer Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-medium text-gray-900">Tier 1 Manufacturers:</p>
                    <p className="text-sm">Require cleaning every 6-12 months depending on environmental conditions</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Commercial Warranties:</p>
                    <p className="text-sm">25-year performance warranties contingent on proper maintenance</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Compliance Standards:</p>
                    <p className="text-sm">Professional cleaning with appropriate equipment and techniques</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Warranty Void Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Lack of documented maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Improper cleaning methods or chemicals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Damage from neglect or poor maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Extended periods without cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protect Your Investment - Full Width */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h3 className="text-2xl font-bold mb-4">Protect Your Investment</h3>
          <p className="text-lg mb-6 opacity-90">
            Professional maintenance documentation ensures your warranty remains valid and your investment protected.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Schedule Warranty-Compliant Cleaning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Professional Cleaning Process */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Cleaning{' '}
              <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our systematic approach ensures optimal results while maintaining manufacturer warranty compliance and safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img 
                src={solarRobotImage} 
                alt="Professional Solar Panel Cleaning Equipment" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25%</div>
                  <div className="text-sm text-muted-foreground">Average Performance Increase</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8">Advanced Cleaning Technology</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visual Pre-Cleaning Inspection</h4>
                    <p className="text-muted-foreground">
                      Comprehensive assessment of panel condition, soiling levels, and potential issues before cleaning begins.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Purified Water System</h4>
                    <p className="text-muted-foreground">
                      Deionized water prevents mineral deposits and ensures streak-free cleaning without damaging panel coatings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Precision Equipment</h4>
                    <p className="text-muted-foreground">
                      Specialized brushes and cleaning systems designed specifically for solar panel surfaces and coatings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Performance Verification</h4>
                    <p className="text-muted-foreground">
                      Before and after performance measurements to document improvement and warranty compliance.
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
                <CardTitle>Scheduled Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular cleaning schedules tailored to your location and environmental conditions to maintain peak performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerSun className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Thermal Imaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced thermal imaging to identify hot spots, damaged cells, and performance issues invisible to the naked eye.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proactive identification and resolution of potential issues before they impact system performance or warranty coverage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Detailed Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive reports with before/after photos, performance data, and maintenance recommendations for warranty compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety and Compliance */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Safety and{' '}
                <span className="text-primary">Compliance First</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Commercial solar maintenance requires specialized safety protocols, insurance coverage, and compliance with Australian standards. Our team is fully certified and equipped for safe, professional service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">$20M Public Liability Insurance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">WorkSafe Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Working at Heights Certified</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">ISO Safety Standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Solar System Safety Trained</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Risk Assessment Protocols</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={thermalImagingImage} 
                alt="Professional Safety Equipment for Solar Maintenance" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Safety Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your Commercial Solar Investment
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't risk losing thousands in energy production or voiding your warranty. Get professional commercial solar panel cleaning and maintenance.
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
              Get Your Free Assessment
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
              <div className="text-sm opacity-80">Warranty Compliant Service</div>
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
              <div className="grid grid-cols-2 gap-4">
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
                    name="last_name"
                    placeholder="Last Name *"
                    required
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="business_name"
                  placeholder="Business Name *"
                  required
                  value={formData.business_name}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="postcode"
                  placeholder="Post Code *"
                  required
                  value={formData.postcode}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="system_kw"
                  placeholder="System kW *"
                  required
                  value={formData.system_kw}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Input
                  name="buildings_managed"
                  placeholder="How many buildings do you manage? *"
                  required
                  value={formData.buildings_managed}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
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

export default CommercialOM 