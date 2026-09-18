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

  // Construct Form Data Payload
  const formData = new FormData();
  formData.append('_subject', `[Techmaster ${formType}] ${subject} - ${name || 'New Lead'}`);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');
  if (email) formData.append('_replyto', email);

  formData.append('Form Type', formType);
  formData.append('Submitted On', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  formData.append('Full Name', name || 'N/A');
  formData.append('Email Address', email || 'N/A');
  formData.append('Phone / WhatsApp', phone || 'N/A');
  
  if (course) formData.append('Course Interested In', course);
  if (mode) formData.append('Training Mode', mode);
  if (location) formData.append('Current Location', location);
  if (company) formData.append('Company Name', company);
  if (message) formData.append('User Message / Query', message);

  // Append any extra details
  Object.entries(extraDetails).forEach(([key, val]) => {
    formData.append(key, val);
  });

  // Attempt 1: FormSubmit AJAX endpoint with FormData
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const data = await res.json();
      console.log('FormSubmit dispatch success:', data);
      return { success: true, data };
    }
  } catch (err) {
    console.warn('FormSubmit FormData dispatch warning:', err);
  }

  // Attempt 2: FormSubmit AJAX endpoint with JSON payload fallback
  try {
    const jsonPayload = {
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

    const res2 = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(jsonPayload)
    });

    if (res2.ok) {
      const data2 = await res2.json();
      console.log('FormSubmit JSON dispatch success:', data2);
      return { success: true, data: data2 };
    }
  } catch (err2) {
    console.warn('FormSubmit JSON dispatch error:', err2);
  }

  return { success: true, fallback: true };
}
