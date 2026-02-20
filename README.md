# StrukturKlar®️ Portfolio Website

A professional, single-page portfolio website for StrukturKlar®️ - Strategic Business Structure Development.

## Features

- ✅ **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- ✅ **Multi-language Support** - German (main), English, Ukrainian, and Russian
- ✅ **Smooth Scrolling Navigation** - Fixed navigation with active section highlighting
- ✅ **Mobile Menu** - Slide-in hamburger menu for mobile devices
- ✅ **Professional Design** - Business-focused aesthetic with clean typography
- ✅ **8 Content Sections** - Hero, Introduction, Problem, Approach, Target Audience, Strategy Check, Stance, and Contact

## Technology Stack

- **Vite** - Fast build tool and dev server
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **react-i18next** - Internationalization
- **react-scroll** - Smooth scrolling navigation
- **react-icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The development server will start at `http://localhost:5173/`

## Project Structure

```
StrukturKlar/
├── public/
│   └── images/           # Place contact photo here
├── src/
│   ├── components/
│   │   ├── layout/       # Navigation components
│   │   ├── sections/     # Page sections
│   │   └── common/       # Reusable components
│   ├── locales/          # Translation files (de, en, uk, ru)
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

## Adding a Contact Photo

To add a professional contact photo:

1. Place your image in `public/images/contact-photo.jpg`
2. Update the Contact component at `src/components/sections/Contact.tsx`
3. Replace the placeholder SVG with:
   ```tsx
   <img
     src="/images/contact-photo.jpg"
     alt={t('contact.photoAlt')}
     className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white/20"
   />
   ```

## Translations

Translation files are located in `src/locales/`:
- `de/translation.json` - German (main language)
- `en/translation.json` - English
- `uk/translation.json` - Ukrainian
- `ru/translation.json` - Russian

To edit content, update the appropriate translation file.

## Navigation Sections

The website has 8 main sections accessible via navigation:

1. **Hero** - Title and tagline with CTA
2. **Introduction** - About entrepreneurial success
3. **Problem** - When numbers exist but no control
4. **Approach** - StrukturKlar methodology
5. **Target Audience** - Who benefits from services
6. **Strategy Check** - The 4-step analysis process
7. **Stance** - Professional philosophy
8. **Contact** - Contact information and photo

## Design System

### Colors
- **Primary**: Deep blue (#0369a1) - Trust and professionalism
- **Secondary**: Light blue (#0ea5e9) - Modern and approachable
- **Accent**: Gold/Amber (#f59e0b) - Highlights and CTAs

### Typography
- **Font**: Inter (via Google Fonts)
- **Scale**: Responsive from mobile to desktop

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deployment Options

- **Vercel**: Recommended for Vite projects (auto-deploy from GitHub)
- **Netlify**: Simple drag-and-drop deployment
- **GitHub Pages**: Static hosting
- **AWS S3 + CloudFront**: Enterprise hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 StrukturKlar®️. All rights reserved.

## Contact

For questions or support regarding this website, please refer to the contact section of the website.
