# Noble Fir Partners - Pure Static Website

This is a completely static version of the Noble Fir Partners website that requires **no build process** and can be opened directly in any web browser.

## How to Use

### Option 1: Open Directly in Browser
1. Double-click `index.html` to open in your default browser
2. Or right-click `index.html` → "Open with" → Choose your browser

### Option 2: Simple HTTP Server (Optional)
If you want to test with a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Website Structure

```
static-site/
├── index.html              # Homepage
├── about/index.html         # About page
├── technology/index.html    # Technology page
├── contact/index.html       # Contact page
├── privacy/index.html       # Privacy policy
├── terms/index.html         # Terms of use
├── blog/index.html          # Blog overview
├── assets/
│   └── css/
│       └── nfp.css         # All styling
└── google48f47a945c6ffe4c.html  # Google verification
```

## Features

✅ **Zero Dependencies** - No Node.js, npm, or build tools required
✅ **Pure HTML/CSS** - Works in any modern browser
✅ **Responsive Design** - Mobile and desktop friendly
✅ **Professional Styling** - Forest green and gold theme
✅ **Working Navigation** - All links properly configured
✅ **Contact Form** - Basic JavaScript validation
✅ **SEO Ready** - Proper meta tags and structure

## Deployment

Simply upload the entire `static-site/` folder to any web hosting service:

- **GitHub Pages**: Upload to a repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Import the folder as a new project
- **Traditional Web Hosting**: Upload via FTP/SFTP
- **AWS S3**: Upload to S3 bucket with static hosting enabled

## No Build Process Needed!

This website is ready to use as-is. No installation, no compilation, no npm commands required. Just open `index.html` in your browser and it works!