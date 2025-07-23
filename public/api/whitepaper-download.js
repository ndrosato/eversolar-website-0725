// Simplified version - just Zapier integration for now

// Zapier Integration function
async function sendToZapier(formData) {
  const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/23907654/uu62ydv/';
  
  const zapierPayload = {
    'First Name': formData.first_name,
    'Last Name': formData.last_name,
    'Email Address': formData.email,
    'Mobile Number': formData.phone,
    'Business Name': formData.business_name,
    'Postcode': formData.postcode,
    'System Size (kW)': formData.system_kw,
    'Number of Panels': formData.number_of_panels,
    'Buildings Managed': formData.buildings_managed,
    'Request Quote': formData.request_quote ? 'Yes' : 'No',
    'Lead Source': 'Commercial O&M Page - Whitepaper Download',
    'Timestamp': new Date().toISOString()
  };

  console.log('Sending to Zapier:', zapierPayload);

  const zapierResponse = await fetch(zapierWebhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zapierPayload)
  });

  if (!zapierResponse.ok) {
    const errorText = await zapierResponse.text();
    console.error('Zapier webhook failed:', errorText);
    throw new Error(`Zapier webhook failed: ${zapierResponse.status} ${errorText}`);
  }

  const responseText = await zapierResponse.text();
  console.log('Zapier response:', responseText);
  return responseText;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = ['first_name', 'last_name', 'email', 'phone', 'business_name', 'postcode', 'system_kw', 'number_of_panels', 'buildings_managed'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Send to Zapier
    await sendToZapier(formData);

    res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your information has been submitted successfully. We will send you the whitepaper shortly.' 
    });

  } catch (error) {
    console.error('Whitepaper download error:', error);
    res.status(500).json({ error: 'Failed to process whitepaper download' });
  }
} 