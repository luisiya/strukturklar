# Quick Email Setup (2 Minutes)

Get real emails sent to **luisiya@gmail.com** in 2 simple steps:

## Step 1: Get Your Access Key (1 minute)

1. Go to: **https://web3forms.com**
2. Enter your email: **luisiya@gmail.com**
3. Click **"Get Access Key"**
4. Check your email inbox (luisiya@gmail.com)
5. Copy the Access Key (looks like: `abc123def-4567-89ab-cdef-0123456789ab`)

## Step 2: Update the Code (30 seconds)

1. Open: `src/components/common/ContactFormModal.tsx`
2. Find line 21:
   ```typescript
   formPayload.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:
   ```typescript
   formPayload.append('access_key', 'abc123def-4567-89ab-cdef-0123456789ab')
   ```
4. Save the file

## Done! ✅

Now when someone fills out the form, you'll receive an email at **luisiya@gmail.com** with:

**Subject:** `strukturklar-client-1708456789123`

**Body:**
```
Client Number: 1708456789123

Name: [User's name]
Email: [User's email]

Message:
[Their message]
```

## Test It

1. Open: http://localhost:5173/
2. Click "Erstgespräch vereinbaren"
3. Fill out the form
4. Click "Anfrage senden"
5. Check your email at **luisiya@gmail.com**

## Free Limits

- ✅ **250 emails/month** (FREE)
- ✅ No credit card needed
- ✅ No CORS issues
- ✅ Works immediately

## Alternative: Test Without Setup

Want to test the form now without receiving emails?
1. Open http://localhost:5173/
2. Click "Erstgespräch vereinbaren"
3. Fill the form and submit
4. Open browser console (F12)
5. See the demo data that would be sent

---

**Need help?** The form is currently in DEMO MODE - it shows success messages but logs data to console instead of sending real emails until you add the Access Key.
