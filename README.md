# UPEKSHA Engineering Website

A modern, production-ready corporate website for UPEKSHA Engineering (Private) Limited built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional corporate look with dark navy, steel gray, and white color scheme
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Metadata and semantic HTML for better search engine visibility
- **Accessible**: Built with accessibility best practices
- **Performance**: Optimized with Next.js Image and Font optimization

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── projects/           # Projects page
│   └── contact/            # Contact page
├── components/             # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ContactForm.tsx
│   └── icons.tsx
└── public/                 # Static assets
```

## Pages

- **Home (/)** - Hero section, services preview, industries, featured projects, testimonials
- **About (/about)** - Company story, vision, mission, values, why choose us
- **Services (/services)** - Complete service listings with detailed descriptions
- **Projects (/projects)** - Project portfolio with filtering
- **Contact (/contact)** - Contact form, map, and contact information

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `navy`: Primary dark blue
- `steel`: Gray tones

### Content

All content is in the page components. Update text, services, projects, and testimonials directly in the respective page files.

### Placeholders

Replace placeholder content marked with `[Placeholder]` in:
- Footer contact information
- Contact page details
- Map embed URL

## License

Private - UPEKSHA Engineering (Private) Limited

