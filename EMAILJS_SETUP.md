# EmailJS Setup Guide

The contact form uses EmailJS to send emails directly from the browser. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - Or use **Outlook**, **Yahoo**, etc.
4. Click **Connect Account** and authorize
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

### Template Content

**Subject:**
```
{{subject}}
```

**Body:**
```
Neue Kontaktanfrage von StrukturKlar Website

Kunden-Nummer: {{client_number}}

Name: {{from_name}}
E-Mail: {{from_email}}

Nachricht:
{{message}}

---
Gesendet über StrukturKlar Kontaktformular
```

4. **Save the template** and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz_public_key`)
3. Copy it

## Step 5: Update the Code

Open `src/components/common/ContactFormModal.tsx` and replace these values:

```typescript
// Line 33-35
const SERVICE_ID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'       // Replace with your Public Key
```

### Example:
```typescript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'
const PUBLIC_KEY = 'abc123xyz_public_key'
```

## Step 6: Test the Form

1. Save the file
2. The dev server will auto-reload
3. Click "Erstgespräch vereinbaren"
4. Fill out the form and submit
5. Check your email at **luisiya@gmail.com**

## Email Format

You will receive emails with this format:

**To:** luisiya@gmail.com
**Subject:** strukturklar-client-1708450320123
**Body:**
```
Neue Kontaktanfrage von StrukturKlar Website

Kunden-Nummer: 1708450320123

Name: Max Mustermann
E-Mail: max@example.com

Nachricht:
Ich interessiere mich für ein Erstgespräch...

---
Gesendet über StrukturKlar Kontaktformular
```

## Free Plan Limits

- **200 emails/month** (free)
- Upgrade to **Pro Plan** for more emails if needed

## Troubleshooting

### Form shows "Error sending"
- Check that Service ID, Template ID, and Public Key are correct
- Check browser console for detailed error messages
- Verify your EmailJS service is active

### Emails not arriving
- Check spam folder
- Verify the email template is set to send to: `luisiya@gmail.com`
- Check EmailJS dashboard → **Logs** for delivery status

### "Public Key not found" error
- Make sure you copied the Public Key from Account → General
- The key should start with a letter and contain alphanumeric characters

## Alternative: Simple Mailto Link (No Setup Required)

If you want a simpler solution without EmailJS setup, you can use a mailto link instead. This opens the user's email client:

Replace the submit button logic with:
```typescript
const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  const subject = `strukturklar-client-${Date.now()}`
  const body = `Name: ${formData.name}%0D%0AE-Mail: ${formData.email}%0D%0A%0D%0ANachricht:%0D%0A${formData.comment}`
  window.location.href = `mailto:luisiya@gmail.com?subject=${subject}&body=${body}`
  onClose()
}
```

**Note:** Mailto opens the user's email app (Outlook, Mail, Gmail) and requires them to click send.

---

For questions, refer to [EmailJS Documentation](https://www.emailjs.com/docs/)
