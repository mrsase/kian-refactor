# KianGreenUp Backend Skill

> **Purpose**: This document specifies the minimal backend functionality needed for the project. The only server-side feature is a contact form that sends emails.

---

## 1. Overview

The project is **99% static frontend**. The only backend requirement:

| Feature | Purpose |
|---------|---------|
| Contact Form Submission | Send form data via email to a specified destination |

---

## 2. Technology Stack

### Recommended Approach
| Component | Choice | Reason |
|-----------|--------|--------|
| Framework | TanStack Start | Server functions built-in |
| Email Library | **Nodemailer** | Most straightforward, well-documented |
| Email Provider | Gmail SMTP | Simple setup, free tier sufficient |

### Alternative (if Gmail SMTP blocked)
| Component | Choice |
|-----------|--------|
| Email Service | Resend, SendGrid, or Mailgun |
| Note | Requires API key instead of Gmail credentials |

---

## 3. Environment Variables

```env
# Gmail SMTP Configuration
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
EMAIL_DESTINATION=destination@example.com
```

### Gmail App Password Setup
1. Enable 2-Factor Authentication on Gmail account
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"
4. Use the 16-character password (no spaces) as `GMAIL_APP_PASSWORD`

---

## 4. Contact Form Data Structure

### Input (from form)
```typescript
interface ContactFormData {
  name: string          // Required
  email: string         // Required, validated
  phone?: string        // Optional
  company?: string      // Optional
  industry?: string     // Optional (dropdown selection)
  message: string       // Required, min 10 chars
}
```

### Server Response
```typescript
interface ContactResponse {
  success: boolean
  message: string
}
```

---

## 5. Server Function Pattern (TanStack Start)

### Location
```
src/
  routes/
    api/
      contact.ts    # API route for contact form
```

### Implementation Pattern
```typescript
// TanStack Start server function
import { createAPIFileRoute } from '@tanstack/start/api'
import nodemailer from 'nodemailer'

export const Route = createAPIFileRoute('/api/contact')({
  POST: async ({ request }) => {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return Response.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_DESTINATION,
      subject: `Contact Form: ${data.name} - ${data.company || 'No Company'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${data.industry || 'Not specified'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
      replyTo: data.email,
    }

    try {
      await transporter.sendMail(mailOptions)
      return Response.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
      console.error('Email error:', error)
      return Response.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      )
    }
  },
})
```

---

## 6. Frontend Integration

### Form Submission Handler
```typescript
const handleSubmit = async (formData: ContactFormData) => {
  setLoading(true)
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const result = await response.json()
    
    if (result.success) {
      setSuccess(true)
      resetForm()
    } else {
      setError(result.message)
    }
  } catch {
    setError('Failed to send message. Please try again.')
  } finally {
    setLoading(false)
  }
}
```

---

## 7. Email Template

### Subject Line Format
```
Contact Form: {Name} - {Company or "No Company"}
```

### Email Body Structure
```
New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {name}
Email: {email}
Phone: {phone or "Not provided"}
Company: {company or "Not provided"}
Industry: {industry or "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
{message}
```

---

## 8. Validation Rules

| Field | Rule |
|-------|------|
| name | Required, non-empty string |
| email | Required, valid email format |
| phone | Optional |
| company | Optional |
| industry | Optional, one of predefined options |
| message | Required, minimum 10 characters |

### Client-side validation (in form)
### Server-side validation (in API route) - always re-validate

---

## 9. Error Handling

| Scenario | Response | Status |
|----------|----------|--------|
| Missing required fields | `{ success: false, message: "Missing required fields" }` | 400 |
| Invalid email format | `{ success: false, message: "Invalid email address" }` | 400 |
| Email send failure | `{ success: false, message: "Failed to send email" }` | 500 |
| Success | `{ success: true, message: "Email sent successfully" }` | 200 |

---

## 10. Dependencies

```json
{
  "dependencies": {
    "nodemailer": "^6.9.x"
  },
  "devDependencies": {
    "@types/nodemailer": "^6.4.x"
  }
}
```

---

## 11. Security Notes

- **Never expose** Gmail credentials in client-side code
- Store credentials in `.env` file (add to `.gitignore`)
- Use Gmail App Password, not actual account password
- Server-side validation prevents malformed data
- `replyTo` header allows replying directly to the sender
