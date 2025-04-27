/**
 * POST /api/submit
 * Handles form submissions and forwards them to Make.com webhook
 */
export async function onRequestPost(context) {
  try {
    // Get data from the request - handle both JSON and form data
    let formEntries;
    const contentType = context.request.headers.get('Content-Type') || '';
    
    if (contentType.includes('application/json')) {
      // Handle JSON data
      const jsonData = await context.request.json();
      formEntries = jsonData;
    } else {
      // Handle form data
      const formData = await context.request.formData();
      formEntries = Object.fromEntries(formData);
    }
    
    // Convert to JSON for our webhook
    const jsonData = {
      email: formEntries.email,
      name: formEntries.name,
      source: formEntries.source || 'website-waitlist'
    };

    console.log('Sending data to webhook:', JSON.stringify(jsonData));

    // Forward to Make.com webhook
    const webhookResponse = await fetch('https://hook.us1.make.com/0lj0qxstc3gqf21y6nzq98vp4hw49ad5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData)
    });
    
    if (!webhookResponse.ok) {
      throw new Error('Webhook error: ' + webhookResponse.statusText);
    }
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Form submitted successfully' 
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Return error response
    return new Response(JSON.stringify({ 
      success: false,
      message: 'Error processing form submission',
      error: error.message
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 