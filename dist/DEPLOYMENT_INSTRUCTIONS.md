# cPanel Deployment Instructions

## Files to Upload
Upload ALL contents of this dist/ folder to your cPanel public_html directory.

## Important Notes:
1. Make sure .htaccess file is uploaded (it's included in this folder)
2. All file permissions should be set to 644 for files and 755 for directories
3. The website uses React Router, so the .htaccess file handles client-side routing

## File Structure After Upload:
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── css/
│   ├── images/
│   └── [other asset files]
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── sw.js

## Performance Optimization:
- All assets are optimized and compressed
- Browser caching is configured via .htaccess
- Gzip compression is enabled
- Security headers are implemented

## Testing:
After upload, test the following:
1. Homepage loads correctly
2. All navigation links work
3. Contact form functions properly
4. Privacy Policy and Terms of Service pages are accessible
5. Mobile responsiveness

## Support:
If you encounter any issues, check:
1. File permissions (644 for files, 755 for directories)
2. .htaccess file is present and readable
3. All files were uploaded completely

Build completed: 2025-06-27T01:10:15.543Z
