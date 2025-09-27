# Cloudflare Pages Deployment Guide

## Fixed Deployment Configuration

The NFP website is now properly configured for Cloudflare Pages deployment.

## Cloudflare Pages Settings

Use these settings in your Cloudflare Pages dashboard:

### Build Configuration
- **Framework preset**: `None` or `Static site`
- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `_site`
- **Root directory**: `/` (leave empty)

### Environment Variables
No environment variables needed - this is a pure static site.

## Files Added for Cloudflare

1. **`wrangler.toml`** - Cloudflare Workers/Pages configuration
2. **`_redirects`** - URL routing rules for clean URLs
3. **Updated `package.json`** - Added build scripts for Cloudflare

## Build Process

The deployment now follows this process:

1. **Install dependencies**: `npm install`
2. **Build static files**: `npm run build:cloudflare`
3. **Deploy**: Cloudflare serves files from `_site/` directory

## Alternative: Direct Static File Deployment

If the build process still has issues, you can deploy the `static-site/` folder directly:

### Option 1: Upload static-site folder
1. In Cloudflare Pages, create a new project
2. Choose "Upload assets" instead of connecting to Git
3. Upload the entire `static-site/` folder
4. Set as your site root

### Option 2: Change build output directory
In Cloudflare Pages settings, change:
- **Build output directory**: `static-site`

## Testing

The website should now deploy successfully to Cloudflare Pages with:
- ✅ All pages working correctly
- ✅ CSS and styling applied
- ✅ Navigation between pages
- ✅ Responsive design
- ✅ Contact form functionality

## Troubleshooting

If deployment still fails:

1. **Check build logs** for specific error messages
2. **Try the static folder**: Set build output to `static-site` instead of `_site`
3. **Manual upload**: Use the "Upload assets" option with the `static-site/` folder
4. **Contact support**: The configuration should now work with standard Cloudflare Pages

The key fix was adding the `wrangler.toml` file with proper assets directory configuration and build scripts that prepare the static files correctly.