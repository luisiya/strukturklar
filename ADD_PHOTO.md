# How to Add Your Contact Photo

## Quick Steps

1. **Prepare your photo:**
   - Professional headshot or business photo
   - Square aspect ratio works best (e.g., 800x800px)
   - JPG or PNG format
   - File size: under 500KB recommended

2. **Name your photo:**
   ```
   contact-photo.jpg
   ```

3. **Place it here:**
   ```
   public/images/contact-photo.jpg
   ```

## Using Terminal

If you have your photo ready, use this command:

```bash
# Copy your photo to the correct location
cp /path/to/your/photo.jpg public/images/contact-photo.jpg
```

**Example:**
```bash
# If your photo is in Downloads
cp ~/Downloads/my-photo.jpg public/images/contact-photo.jpg

# If it's on Desktop
cp ~/Desktop/my-photo.jpg public/images/contact-photo.jpg
```

## Using Finder (macOS)

1. Open Finder
2. Navigate to your StrukturKlar project folder
3. Go to `public` → `images`
4. Drag and drop your photo here
5. Rename it to: `contact-photo.jpg`

## The Result

Once you add the photo, it will automatically appear in the Contact section with:

✅ **Professional circular frame** with gradient border
✅ **Shadow effects** for depth
✅ **Responsive sizing** - smaller on mobile, larger on desktop
✅ **Professional badge** showing "Verfügbar für Erstgespräche"
✅ **Your title** as "Ihr StrukturKlar Berater"
✅ **Trust indicators** (years of experience, confidentiality, response time)

## Current Photo Location

```
/Users/lkravchenko/Documents/Layouts/StrukturKlar/public/images/
```

## Fallback

If no photo is found, a professional placeholder icon will be displayed instead.

## Supported Formats

- ✅ .jpg / .jpeg (recommended)
- ✅ .png
- ✅ .webp

---

**The website will auto-reload when you add the photo!**
