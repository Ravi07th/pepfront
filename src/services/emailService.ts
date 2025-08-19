// Email service with multiple fallback options
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  category: string;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  
  private constructor() {}
  
  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  // Method 1: Backend API
  async sendViaBackend(data: EmailData): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return true;
      }
      
      console.error('Backend email failed:', response.status);
      return false;
    } catch (error) {
      console.error('Backend email error:', error);
      return false;
    }
  }

  // Method 2: EmailJS
  async sendViaEmailJS(data: EmailData): Promise<boolean> {
    try {
      return false;
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  }

  // Method 3: Direct email client
  async sendViaEmailClient(data: EmailData): Promise<boolean> {
    try {
      const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
      const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Category: ${data.category}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from the contact form on PrepCampus website.
      `);
      
      const mailtoLink = `mailto:prepcampus.info@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      // Copy to clipboard
      const emailContent = `To: prepcampus.info@gmail.com\nSubject: ${data.subject}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCategory: ${data.category}\n\nMessage:\n${data.message}`;
      
      try {
        await navigator.clipboard.writeText(emailContent);
      } catch (clipboardError) {
        console.warn('Clipboard not available');
      }
      
      return true;
    } catch (error) {
      console.error('Email client error:', error);
      return false;
    }
  }

  // Method 4: WhatsApp
  async sendViaWhatsApp(data: EmailData): Promise<boolean> {
    try {
      const message = encodeURIComponent(`
Hi, I need help with PrepCampus

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Category: ${data.category}
Subject: ${data.subject}

Message:
${data.message}
      `);
      
      const whatsappLink = `https://wa.me/919477105023?text=${message}`;
      window.open(whatsappLink, '_blank');
      
      return true;
    } catch (error) {
      console.error('WhatsApp error:', error);
      return false;
    }
  }

  // Main send method with fallbacks
  async sendEmail(data: EmailData): Promise<{ success: boolean; method: string; message: string }> {
    // Try backend first
    if (await this.sendViaBackend(data)) {
      return { success: true, method: 'backend', message: 'Message sent successfully via backend!' };
    }

    // Try EmailJS
    if (await this.sendViaEmailJS(data)) {
      return { success: true, method: 'emailjs', message: 'Message sent successfully via EmailJS!' };
    }

    // Try email client
    if (await this.sendViaEmailClient(data)) {
      return { 
        success: true, 
        method: 'email-client', 
        message: 'Email client opened. Please send the message manually. Content copied to clipboard.' 
      };
    }

    // Final fallback - WhatsApp
    if (await this.sendViaWhatsApp(data)) {
      return { 
        success: true, 
        method: 'whatsapp', 
        message: 'WhatsApp opened. Please send your message there.' 
      };
    }

    return { 
      success: false, 
      method: 'none', 
      message: 'All email methods failed. Please contact us directly at prepcampus.info@gmail.com' 
    };
  }
}

export default EmailService.getInstance();
