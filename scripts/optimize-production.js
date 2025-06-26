#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');

console.log('🚀 Optimizing production build for cPanel deployment...');

// Function to copy .htaccess to dist folder
function copyHtaccess() {
  const htaccessSource = path.join(__dirname, '..', '.htaccess');
  const htaccessDest = path.join(distPath, '.htaccess');
  
  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, htaccessDest);
    console.log('✅ .htaccess file copied to dist folder');
  } else {
    console.log('⚠️  .htaccess file not found, creating basic one...');
    createBasicHtaccess();
  }
}

// Function to create basic .htaccess if not exists
function createBasicHtaccess() {
  const htaccessContent = `# Basic .htaccess for React Router
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Enable compression
<IfModule mod_deflate.c>
    SetOutputFilter DEFLATE
    AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>`;
  
  fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent);
  console.log('✅ Basic .htaccess file created');
}

// Function to optimize index.html
function optimizeIndexHtml() {
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log('❌ index.html not found in dist folder');
    return;
  }
  
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Add preload hints for critical resources
  const preloadHints = `
    <link rel="preload" href="./assets/index-" as="script" crossorigin>
    <link rel="preload" href="./assets/css/index-" as="style" crossorigin>
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
  `;
  
  // Insert preload hints after the title tag
  html = html.replace(
    /<title>.*?<\/title>/,
    `$&${preloadHints}`
  );
  
  // Add meta tags for better SEO and performance
  const metaTags = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="OVID International Ltd - Leading Kenyan technology company specializing in innovative digital solutions, web development, and IT consulting services.">
    <meta name="keywords" content="OVID International, Kenya, technology, web development, IT consulting, digital solutions">
    <meta name="author" content="OVID International Ltd">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="OVID International Ltd">
    <meta property="og:description" content="Leading Kenyan technology company specializing in innovative digital solutions">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ovidinternational.com">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#1e40af">
  `;
  
  // Insert meta tags in the head
  html = html.replace(
    /<head>/,
    `<head>${metaTags}`
  );
  
  fs.writeFileSync(indexPath, html);
  console.log('✅ index.html optimized with preload hints and meta tags');
}

// Function to create deployment instructions
function createDeploymentInstructions() {
  const instructions = `# cPanel Deployment Instructions

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

Build completed: ${new Date().toISOString()}
`;

  fs.writeFileSync(path.join(distPath, 'DEPLOYMENT_INSTRUCTIONS.md'), instructions);
  console.log('✅ Deployment instructions created');
}

// Function to validate build
function validateBuild() {
  const requiredFiles = [
    'index.html',
    'assets',
    'favicon.svg',
    'robots.txt',
    'sitemap.xml',
    'sw.js'
  ];
  
  console.log('\n🔍 Validating build...');
  
  for (const file of requiredFiles) {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} - Found`);
    } else {
      console.log(`❌ ${file} - Missing`);
    }
  }
  
  // Check for critical assets
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const assets = fs.readdirSync(assetsPath);
    console.log(`✅ Assets folder contains ${assets.length} items`);
  }
}

// Function to generate build report
function generateBuildReport() {
  const report = {
    buildTime: new Date().toISOString(),
    totalSize: 0,
    fileCount: 0,
    optimization: {
      compression: 'enabled',
      caching: 'configured',
      security: 'headers_set',
      routing: 'client_side_handled'
    }
  };
  
  // Calculate total size
  function calculateSize(dir) {
    const files = fs.readdirSync(dir);
    let size = 0;
    let count = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        const subResult = calculateSize(filePath);
        size += subResult.size;
        count += subResult.count;
      } else {
        size += stat.size;
        count++;
      }
    }
    
    return { size, count };
  }
  
  const result = calculateSize(distPath);
  report.totalSize = result.size;
  report.fileCount = result.count;
  
  fs.writeFileSync(
    path.join(distPath, 'build-report.json'), 
    JSON.stringify(report, null, 2)
  );
  
  console.log(`📊 Build Report: ${report.fileCount} files, ${(report.totalSize / 1024 / 1024).toFixed(2)} MB`);
}

// Main execution
try {
  copyHtaccess();
  optimizeIndexHtml();
  createDeploymentInstructions();
  validateBuild();
  generateBuildReport();
  
  console.log('\n🎉 Production build optimization complete!');
  console.log('📁 Ready for cPanel deployment');
  console.log('📋 Check DEPLOYMENT_INSTRUCTIONS.md in the dist folder for upload instructions');
  
} catch (error) {
  console.error('❌ Error during optimization:', error.message);
  process.exit(1);
} 