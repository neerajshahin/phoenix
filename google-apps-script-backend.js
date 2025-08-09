/**
 * Google Apps Script Web App for Phoenix Cabs Booking Form
 * 
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Deploy as a web app with "Execute as: Me" and "Who has access: Anyone"
 * 5. Copy the deployment URL and replace GOOGLE_SCRIPT_URL in book-now.njk
 * 
 * Features:
 * - Sends email notifications to Phoenix Cabs
 * - Logs submissions to a Google Sheet (optional)
 * - Auto-responds to customer with confirmation
 */



function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Configuration
    const PHOENIX_EMAIL = 'neerajshahapp@gmail.com'; // Phoenix Cabs email
    const SHEET_NAME = 'Booking Requests'; // Optional: Google Sheet to log bookings
    
    // Send email to Phoenix Cabs
    sendNotification(data, PHOENIX_EMAIL);
    
    // Optional: Log to Google Sheet
    logToSheet(data, SHEET_NAME);
    
    // Send confirmation email to customer
    sendCustomerConfirmation(data);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Booking request received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing booking:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to process booking request'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendNotification(data, phoenixEmail) {
  const isBooking = data.formType === 'booking';
  const subject = isBooking 
    ? `🚗 New Booking Request - ${data.name}`
    : `📧 New Contact Inquiry - ${data.name}`;
  
  let emailBody;
  
  if (isBooking) {
    emailBody = `
=== PHOENIX CABS BOOKING REQUEST ===

📧 NEW BOOKING REQUEST RECEIVED

👤 CUSTOMER DETAILS:
   Name: ${data.name}
   Email: ${data.email}
   Phone: ${data.phone || 'Not provided'}
   Preferred Pickup Time: ${data.pickup_time || 'Not specified'}

📋 BOOKING DETAILS:
${data.message}

⏰ SUBMITTED: ${new Date(data.timestamp).toLocaleString('en-IN')}
🌐 SOURCE: ${data.source}

---
Please contact the customer to confirm the booking details.
    `;
  } else {
    emailBody = `
=== PHOENIX CABS CONTACT INQUIRY ===

📧 NEW CONTACT INQUIRY RECEIVED

👤 CUSTOMER DETAILS:
   Name: ${data.name}
   Email: ${data.email}
   Phone: ${data.phone || 'Not provided'}

💬 MESSAGE:
${data.message || 'General inquiry - no specific message provided'}

⏰ SUBMITTED: ${new Date(data.timestamp).toLocaleString('en-IN')}
🌐 SOURCE: ${data.source}

---
Please respond to the customer inquiry.
    `;
  }
  
  MailApp.sendEmail({
    to: phoenixEmail,
    subject: subject,
    body: emailBody,
    name: 'Phoenix Cabs System'
  });
}

function sendCustomerConfirmation(data) {
  const isBooking = data.formType === 'booking';\n  const subject = isBooking \n    ? 'Phoenix Cabs - Booking Request Received'\n    : 'Phoenix Cabs - Thank You for Contacting Us';
  
  let emailBody;
  
  if (isBooking) {
    emailBody = `
Dear ${data.name},

Thank you for choosing Phoenix Cabs! We have received your booking request and will contact you shortly to confirm the details.

🚗 Your Booking Details:
${data.message}

📞 Our team will call you at ${data.phone || 'the number you provided'} within 30 minutes to confirm your booking.

If you need immediate assistance, please call us at:
📱 Phone: +91-7983438214
📧 Email: rajatshah06@gmail.com

Thank you for choosing Phoenix Cabs - Driving Your Journey Forward!

Best regards,
Phoenix Cabs Team
    `;
  } else {
    emailBody = `
Dear ${data.name},

Thank you for contacting Phoenix Cabs! We have received your inquiry and will respond to you shortly.

💬 Your Message:
${data.message || 'General inquiry'}

📞 ${data.phone ? `We will contact you at ${data.phone} if needed.` : 'Please feel free to call us if you need immediate assistance.'}

If you need immediate assistance, please call us at:
📱 Phone: +91-7983438214
📧 Email: rajatshah06@gmail.com

Thank you for your interest in Phoenix Cabs - Driving Your Journey Forward!

Best regards,
Phoenix Cabs Team
    `;
  }
  
  try {
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: emailBody,
      name: 'Phoenix Cabs'
    });
  } catch (error) {
    console.warn('Failed to send customer confirmation:', error);
  }
}

function logToSheet(data, sheetName) {
  try {
    // Use a fixed spreadsheet ID
    const SPREADSHEET_ID = '1v_IFazv-79YZ2CyTvIkMXpuP2ynvOOpA6scWsUusm9A'; // Replace with your actual Sheet ID
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

    // Get or create the sheet
    let sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }

    // Add headers if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Pickup Time',
        'Message',
        'Source',
        'Form Type'
      ]);
    }

    // Append a new row with form data
    sheet.appendRow([
      new Date(data.timestamp),
      data.name,
      data.email,
      data.phone || '',
      data.pickup_time || '',
      data.message || '',
      data.source,
      data.formType || 'booking'
    ]);

  } catch (error) {
    console.warn('Failed to log to sheet:', error);
  }
}
