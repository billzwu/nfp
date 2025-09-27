# Noble Fir Partners - Static Website

Pure static website for Noble Fir Partners - NO BUILD PROCESS REQUIRED!

## Structure (Same as triplesaveweb)

This site uses the exact same structure as triplesaveweb that works on Cloudflare Pages:

```
nfp/
├── index.html              # Homepage
├── about/index.html        # About page
├── technology/index.html   # Technology page
├── contact/index.html      # Contact page
├── privacy/index.html      # Privacy policy
├── terms/index.html        # Terms of use
├── blog/index.html         # Blog overview
├── assets/
│   └── css/
│       └── nfp.css        # All styling
└── google48f47a945c6ffe4c.html  # Google verification
```

## Cloudflare Pages Deployment

Since this follows the same structure as triplesaveweb:

1. **Push to GitHub** - Just commit and push these files
2. **Cloudflare Settings**:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: (leave empty)
   - **Root directory**: /

No build process needed - Cloudflare will serve the files directly!

## Local Testing

```bash
# Python
python -m http.server 8000

# Or just open index.html directly in browser
open index.html
```

## Why This Works

- ✅ Same structure as working triplesaveweb site
- ✅ No build process = no build errors
- ✅ Direct file serving from repository
- ✅ All paths are relative and correct
- ✅ Simple, reliable deployment