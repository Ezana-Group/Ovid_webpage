# cPanel Deployment Guide for OVID International Website

## 🚀 Quick Start

1. **Build for Production:**
   ```bash
   npm run deploy:cpanel
   ```

2. **Upload to cPanel:**
   - Upload ALL contents of the `dist/` folder to your cPanel `public_html` directory
   - Ensure `.htaccess` file is included

3. **Set Permissions:**
   - Files: 644
   - Directories: 755

## 📋 Pre-Deployment Checklist

### ✅ Build Optimization
- [ ] Run `npm run build:cpanel` to create optimized production build
- [ ] Verify all assets are properly optimized
- [ ] Check that `.htaccess` file is included in `dist/` folder
- [ ] Review `DEPLOYMENT_INSTRUCTIONS.md` in the build folder

### ✅ cPanel Requirements
- [ ] cPanel hosting with Apache server
- [ ] Support for `.htaccess` files
- [ ] PHP 7.4+ (for some hosting features)
- [ ] SSL certificate (recommended)

### ✅ Domain Configuration
- [ ] Domain points to cPanel hosting
- [ ] SSL certificate installed (if using HTTPS)
- [ ] DNS records properly configured

## 🔧 Detailed Deployment Steps

### Step 1: Prepare the Build
```bash
# Clean previous builds
npm run clean

# Install dependencies (if needed)
npm install

# Create production build
npm run deploy:cpanel
```

### Step 2: Access cPanel
1. Log into your cPanel account
2. Navigate to **File Manager**
3. Open the `public_html` directory

### Step 3: Upload Files
1. **Backup existing files** (if any)
2. **Upload all contents** of the `dist/` folder to `public_html`
3. **Ensure file structure** matches:
   ```
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
   ```

### Step 4: Set File Permissions
```bash
# Files: 644
find . -type f -exec chmod 644 {} \;

# Directories: 755
find . -type d -exec chmod 755 {} \;

# .htaccess: 644 (important!)
chmod 644 .htaccess
```

### Step 5: Test the Website
1. **Homepage**: Visit your domain
2. **Navigation**: Test all menu links
3. **Contact Form**: Verify form submission
4. **Legal Pages**: Check Privacy Policy and Terms of Service
5. **Mobile**: Test responsive design
6. **Performance**: Run Lighthouse audit

## 🛠️ Troubleshooting

### Common Issues

#### 1. 404 Errors on Navigation
**Problem**: Links return 404 errors
**Solution**: 
- Ensure `.htaccess` file is uploaded and has correct permissions (644)
- Verify Apache mod_rewrite is enabled
- Check that all files are in the correct directory

#### 2. Assets Not Loading
**Problem**: CSS/JS files not found
**Solution**:
- Verify `assets/` folder is uploaded completely
- Check file permissions (644 for files, 755 for directories)
- Clear browser cache and try again

#### 3. Slow Loading
**Problem**: Website loads slowly
**Solution**:
- Verify `.htaccess` compression is working
- Check that caching headers are set
- Optimize images if needed
- Consider CDN for better performance

#### 4. SSL/HTTPS Issues
**Problem**: Mixed content warnings or SSL errors
**Solution**:
- Install SSL certificate in cPanel
- Update all internal links to use HTTPS
- Check Content Security Policy in `.htaccess`

### Performance Optimization

#### Enable Gzip Compression
The `.htaccess` file includes compression settings, but verify:
1. Apache mod_deflate is enabled
2. Compression is working (check browser dev tools)

#### Browser Caching
The `.htaccess` file sets aggressive caching for static assets:
- CSS/JS: 1 year
- Images: 1 year
- HTML: 1 hour

#### CDN Integration (Optional)
For better performance, consider:
1. Cloudflare CDN
2. AWS CloudFront
3. Google Cloud CDN

## 📊 Post-Deployment Monitoring

### Performance Metrics
- **Page Load Time**: < 3 seconds
- **Lighthouse Score**: > 90
- **Mobile Performance**: > 85
- **SEO Score**: > 90

### Monitoring Tools
1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **WebPageTest**
4. **Lighthouse CI**

### Analytics Setup
1. **Google Analytics**: Track user behavior
2. **Google Search Console**: Monitor SEO performance
3. **Custom Analytics**: Track form submissions and conversions

## 🔒 Security Considerations

### Security Headers
The `.htaccess` file includes:
- X-Frame-Options: Prevent clickjacking
- X-Content-Type-Options: Prevent MIME sniffing
- X-XSS-Protection: Enable XSS protection
- Content Security Policy: Control resource loading
- Referrer Policy: Control referrer information

### File Permissions
- **Files**: 644 (readable by web server, writable by owner)
- **Directories**: 755 (executable by web server)
- **Sensitive files**: Blocked from direct access

### Regular Maintenance
1. **Update dependencies** regularly
2. **Monitor security headers**
3. **Backup website files**
4. **Check for broken links**
5. **Monitor performance metrics**

## 📞 Support

### Before Contacting Support
1. Check this deployment guide
2. Review `DEPLOYMENT_INSTRUCTIONS.md` in the build folder
3. Test with different browsers
4. Check browser developer console for errors

### Useful Commands
```bash
# Test production build locally
npm run preview:production

# Run performance audit
npm run speed:test

# Analyze bundle size
npm run bundle:analyze

# Clean and rebuild
npm run clean:all
```

### Contact Information
- **Technical Issues**: Check browser console and server logs
- **Performance Issues**: Run Lighthouse audit
- **Security Issues**: Review security headers and permissions

---

**Last Updated**: ${new Date().toISOString()}
**Version**: 1.0.0
**Compatible with**: React 19, Vite 7, cPanel 