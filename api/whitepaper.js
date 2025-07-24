export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      postcode,
      number_of_panels,
      system_size,
      installation_year,
      current_maintenance,
      download_type
    } = req.body

    // Validation
    if (!first_name || !last_name || !email || !phone || !postcode || !number_of_panels || !system_size) {
      return res.status(400).json({ error: 'Please fill in all required fields' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' })
    }

    // Phone validation (basic Australian phone number check)
    const phoneRegex = /^(\+61|0)[2-9]\d{8}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Please enter a valid Australian phone number' })
    }

    // Create lead data object
    const leadData = {
      timestamp: new Date().toISOString(),
      type: 'whitepaper_download',
      download_type,
      personal_info: {
        first_name,
        last_name,
        email,
        phone,
        company: company || 'Not provided',
        postcode
      },
      solar_system_info: {
        number_of_panels,
        system_size,
        installation_year: installation_year || 'Not provided',
        current_maintenance: current_maintenance || 'Not provided'
      },
      source: 'commercial_om_whitepaper'
    }

    // TODO: Integrate with external service (Zapier, CRM, etc.)
    // File system operations removed - use external service instead

    // Log lead data for monitoring (you can integrate with your CRM API here)
    console.log('New Whitepaper Lead:', {
      name: `${first_name} ${last_name}`,
      email,
      phone,
      company,
      postcode,
      system_info: `${system_size} kW, ${number_of_panels} panels`,
      timestamp: leadData.timestamp
    })

    // Here you would typically:
    // 1. Send lead data to your CRM system (HubSpot, Salesforce, etc.)
    // 2. Send confirmation email to the user
    // 3. Send notification email to your sales team
    
    // Example CRM integration (uncomment and modify for your CRM):
    /*
    try {
      const crmResponse = await fetch('YOUR_CRM_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_CRM_API_KEY'
        },
        body: JSON.stringify({
          properties: {
            firstname: first_name,
            lastname: last_name,
            email: email,
            phone: phone,
            company: company,
            postcode: postcode,
            number_of_panels: number_of_panels,
            system_size: system_size,
            installation_year: installation_year,
            current_maintenance: current_maintenance,
            lead_source: 'Commercial O&M Whitepaper',
            download_type: download_type
          }
        })
      })
      
      if (!crmResponse.ok) {
        console.error('Failed to sync lead with CRM')
      }
    } catch (crmError) {
      console.error('CRM sync error:', crmError)
    }
    */

    res.status(200).json({ 
      success: true, 
      message: 'Whitepaper download request processed successfully'
    })

  } catch (error) {
    console.error('Whitepaper API error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
} 