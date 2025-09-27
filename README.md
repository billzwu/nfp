# Noble Fir Partners - Static Website

A self-contained static website for Noble Fir Partners, built with 11ty (Eleventy) static site generator.

## Overview

Noble Fir Partners is a private equity real estate investment firm specializing in NNN (Triple Net Lease) and multifamily properties, powered by AI technology from PropertyOne.AI.

## Project Structure

```
nfp/
├── src/
│   ├── layouts/           # 11ty layouts and partials
│   │   ├── base.njk      # Main layout template
│   │   └── partials/     # Header and footer components
│   ├── pages/            # Website pages
│   │   ├── index.njk     # Homepage
│   │   ├── about.njk     # About page
│   │   ├── technology.njk # Technology page
│   │   ├── contact.njk   # Contact page
│   │   ├── privacy.njk   # Privacy policy
│   │   ├── terms.njk     # Terms of use
│   │   └── blog.njk      # Blog overview
│   └── assets/           # Static assets
│       ├── css/          # Stylesheets
│       └── images/       # Images
├── _site/                # Generated static site (build output)
├── .eleventy.js          # 11ty configuration
├── package.json          # Node.js dependencies and scripts
└── README.md            # This file
```

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# or
npm start
```
This starts a local development server with live reloading at `http://localhost:8080`

### Build for Production
```bash
npm run build
```
Generates the static site in the `_site/` directory.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **Static Site Generation**: Fast loading with pre-rendered HTML
- **SEO Optimized**: Clean URLs and proper meta tags
- **Google Verification**: Includes Google Search Console verification
- **Modern Stack**: Built with 11ty, Nunjucks templates, and vanilla CSS/JS

## Pages

1. **Homepage** (`/`) - Company overview and value proposition
2. **About** (`/about/`) - Company story and investment philosophy
3. **Technology** (`/technology/`) - AI technology and PropertyOne.AI integration
4. **Contact** (`/contact/`) - Contact form and company information
5. **Privacy Policy** (`/privacy/`) - Privacy policy and data handling
6. **Terms of Use** (`/terms/`) - Legal terms and disclaimers
7. **Blog** (`/blog/`) - Blog overview and article categories

## Deployment

The `_site/` directory contains the complete static website ready for deployment to any static hosting service:

- **Netlify**: Connect your Git repository and deploy automatically
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Push `_site/` contents to a GitHub Pages repository
- **AWS S3**: Upload `_site/` contents to an S3 bucket with static hosting
- **Traditional Web Hosting**: Upload `_site/` contents via FTP

## Design System

### Colors
- **Primary**: #004225 (Dark Forest Green)
- **Secondary**: #D4AF37 (Gold)
- **Dark**: #1a1a1a
- **Light**: #f8f8f8

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Navigation with active states
- Hero sections with call-to-action buttons
- Card-based content grids
- Contact forms with validation
- Mobile-responsive hamburger menu

## Maintenance

This is a static site with minimal maintenance requirements:
- Update content by editing `.njk` files in `src/pages/`
- Rebuild with `npm run build` after changes
- Deploy updated `_site/` directory

For content updates, no server restart or database changes are required.