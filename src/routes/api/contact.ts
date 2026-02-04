import { createFileRoute } from '@tanstack/react-router'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  industry?: string
  message: string
}

interface ContactResponse {
  success: boolean
  message: string
  errors?: Record<string, string>
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateFormData(data: ContactFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required'
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }): Promise<Response> => {
        try {
          const data: ContactFormData = await request.json()

          // Server-side validation
          const validation = validateFormData(data)
          if (!validation.valid) {
            const response: ContactResponse = {
              success: false,
              message: 'Please fix the errors below',
              errors: validation.errors,
            }
            return Response.json(response, { status: 400 })
          }

          // Check environment variables
          const gmailUser = process.env.GMAIL_USER
          const gmailPassword = process.env.GMAIL_APP_PASSWORD
          const emailDestination = process.env.EMAIL_DESTINATION

          if (!gmailUser || !gmailPassword || !emailDestination) {
            console.error('Missing email configuration environment variables')
            const response: ContactResponse = {
              success: false,
              message: 'Server configuration error. Please try again later.',
            }
            return Response.json(response, { status: 500 })
          }

          // Create email transporter
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: gmailUser,
              pass: gmailPassword,
            },
          })

          // Sanitize input for email
          const safeName = escapeHtml(data.name)
          const safeEmail = escapeHtml(data.email)
          const safePhone = data.phone ? escapeHtml(data.phone) : 'Not provided'
          const safeCompany = data.company ? escapeHtml(data.company) : 'Not provided'
          const safeIndustry = data.industry ? escapeHtml(data.industry) : 'Not specified'
          const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br>')

          const mailOptions = {
            from: gmailUser,
            to: emailDestination,
            subject: `Contact Form: ${safeName} - ${data.company || 'No Company'}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                      <a href="mailto:${safeEmail}" style="color: #10b981;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${safeCompany}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Industry:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${safeIndustry}</td>
                  </tr>
                </table>
                
                <div style="margin-top: 20px;">
                  <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
                  <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                    ${safeMessage}
                  </div>
                </div>
                
                <p style="margin-top: 30px; color: #6b7280; font-size: 12px;">
                  This email was sent from the KianGreenUp website contact form.
                </p>
              </div>
            `,
            replyTo: data.email,
          }

          // Send email
          await transporter.sendMail(mailOptions)

          const response: ContactResponse = {
            success: true,
            message: 'Thank you! Your message has been sent successfully. We will get back to you within 1-2 business days.',
          }
          return Response.json(response, { status: 200 })
        } catch (error) {
          console.error('Contact form error:', error)

          const response: ContactResponse = {
            success: false,
            message: 'Failed to send your message. Please try again later or contact us directly.',
          }
          return Response.json(response, { status: 500 })
        }
      },
    },
  },
})
