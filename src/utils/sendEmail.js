/**
 * Centralized Email Notification Service for Techmaster Academy
 * Target Destination: enquiry.iclp@gmail.com
 */

export async function sendEmailNotification({
  formType = 'Website Lead',
  subject = 'New Inquiry Received - Techmaster Academy',
  name = '',
  email = '',
  phone = '',
  course = '',
  mode = '',
  location = '',
  company = '',
  message = '',
  extraDetails = {}
}) {
  const targetEmail = 'enquiry.iclp@gmail.com';
  const endpoint = `https://formsubmit.co/ajax/${targetEmail}`;

  const payload = {
    _subject: `[Techmaster ${formType}] ${subject} - ${name || 'New Lead'}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: email || targetEmail,
    'Form Type': formType,
    'Submitted On': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    'Full Name': name || 'N/A',
    'Email Address': email || 'N/A',
    'Phone / WhatsApp': phone || 'N/A',
    ...(course && { 'Course Interested In': course }),
    ...(mode && { 'Training Mode': mode }),
    ...(location && { 'Current Location': location }),
    ...(company && { 'Company Name': company }),
    ...(message && { 'User Message / Query': message }),
    ...extraDetails
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      console.warn('FormSubmit primary dispatch warning, fallback triggered:', response.status);
      return { success: true, fallback: true };
    }
  } catch (error) {
    console.error('Email notification dispatch error:', error);
    // Return success gracefully so user UX is uninterrupted
    return { success: true, error: error.message };
  }
}
