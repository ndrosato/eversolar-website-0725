import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  ArrowLeft,
  Download,
  FileText,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  User,
  MapPin,
  Building
} from 'lucide-react'

// Import images
import eversolarLogoBlack from '../assets/eversolar-logo-black.jpg'

const WhitepaperDownload = ({ navigateToPage, scrollToSection }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    postcode: '',
    number_of_panels: '',
    system_size: '',
    installation_year: '',
    current_maintenance: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name) => (value) => {
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
      const response = await fetch('/api/whitepaper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          download_type: 'Commercial Solar ROI Whitepaper'
        })
      })

      if (response.ok) {
        setSubmitMessage('Thank you! Your whitepaper download will begin shortly. We\'ll also email you a copy.')
        // Trigger actual file download here
        const link = document.createElement('a')
        link.href = '/assets/Commercial-Solar-ROI-Whitepaper.pdf' // This would be your actual PDF file
        link.download = 'Maximizing-Commercial-Solar-ROI-Through-Professional-Maintenance.pdf'
        link.click()
        
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          company: '',
          postcode: '',
          number_of_panels: '',
          system_size: '',
          installation_year: '',
          current_maintenance: ''
        })
      } else {
        const errorData = await response.json()
        setSubmitMessage(errorData.error || 'Failed to process download. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Failed to process download. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <img 
              src={eversolarLogoBlack} 
              alt="EverSolar" 
              className="h-8 w-auto cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => navigateToPage('home')}
            />
            <Button
              onClick={() => navigateToPage('home')}
              className="text-muted-foreground hover:text-foreground"
              variant="ghost"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Whitepaper Info */}
              <div className="lg:sticky lg:top-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-xl mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Free Whitepaper</h1>
                      <p className="text-white/90">Professional Industry Guide</p>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">
                    Asset-Grade Solar Maintenance: A Commercial Guide to Solar Performance and Protection
                  </h2>
                  
                  <p className="text-lg mb-6 text-white/90">
                    A comprehensive 24-page guide covering everything you need to know about protecting and optimizing your commercial solar investment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Cost-benefit analysis of professional cleaning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Warranty compliance requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Performance optimization strategies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Industry best practices & case studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Maintenance scheduling guidelines</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg">Your Privacy is Protected</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We respect your privacy. Your information will only be used to send you the whitepaper and occasional updates about solar maintenance best practices. You can unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Download Form */}
              <div>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">Get Your Free Whitepaper</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below to instantly download "Asset-Grade Solar Maintenance: A Commercial Guide to Solar Performance and Protection."
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    {submitMessage && (
                      <div className={`mb-6 text-center p-4 rounded-lg ${
                        submitMessage.includes('Thank you') 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {submitMessage}
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first_name" className="text-sm font-medium flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>First Name *</span>
                          </label>
                          <Input
                            id="first_name"
                            name="first_name"
                            type="text"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="last_name" className="text-sm font-medium flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>Last Name *</span>
                          </label>
                          <Input
                            id="last_name"
                            name="last_name"
                            type="text"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Email Address *</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@company.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>Phone Number *</span>
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="0400 000 000"
                          />
                        </div>
                      </div>

                      {/* Company Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span>Company Name</span>
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="postcode" className="text-sm font-medium flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Postcode *</span>
                          </label>
                          <Input
                            id="postcode"
                            name="postcode"
                            type="text"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required
                            placeholder="2000"
                          />
                        </div>
                      </div>

                      {/* Solar System Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="number_of_panels" className="text-sm font-medium">
                            Number of Solar Panels *
                          </label>
                          <Select onValueChange={handleSelectChange('number_of_panels')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="50-100">50-100 panels</SelectItem>
                              <SelectItem value="100-250">100-250 panels</SelectItem>
                              <SelectItem value="250-500">250-500 panels</SelectItem>
                              <SelectItem value="500-1000">500-1000 panels</SelectItem>
                              <SelectItem value="1000+">1000+ panels</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="system_size" className="text-sm font-medium">
                            System Size (kW) *
                          </label>
                          <Select onValueChange={handleSelectChange('system_size')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="50-100">50-100 kW</SelectItem>
                              <SelectItem value="100-250">100-250 kW</SelectItem>
                              <SelectItem value="250-500">250-500 kW</SelectItem>
                              <SelectItem value="500-1000">500-1000 kW</SelectItem>
                              <SelectItem value="1000+">1000+ kW</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="installation_year" className="text-sm font-medium">
                            Installation Year
                          </label>
                          <Select onValueChange={handleSelectChange('installation_year')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="2020">2020</SelectItem>
                              <SelectItem value="2019">2019</SelectItem>
                              <SelectItem value="2018">2018</SelectItem>
                              <SelectItem value="2017">2017</SelectItem>
                              <SelectItem value="2016">2016</SelectItem>
                              <SelectItem value="before-2016">Before 2016</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="current_maintenance" className="text-sm font-medium">
                            Current Maintenance
                          </label>
                          <Select onValueChange={handleSelectChange('current_maintenance')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No regular maintenance</SelectItem>
                              <SelectItem value="diy">DIY/In-house cleaning</SelectItem>
                              <SelectItem value="professional">Professional service</SelectItem>
                              <SelectItem value="occasional">Occasional cleaning only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary text-lg py-4 h-auto"
                      >
                        {isSubmitting ? (
                          'Processing...'
                        ) : (
                          <>
                            <Download className="mr-3 w-5 h-5" />
                            Download Free Whitepaper
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By downloading this whitepaper, you agree to receive occasional updates about solar maintenance best practices. We never spam and you can unsubscribe anytime.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhitepaperDownload 