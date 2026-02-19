#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.join(__dirname, '../public')
const assetsDir = path.join(publicDir, 'assets')

// Critical resources to preload
const criticalResources = {
  images: [
    'ovid-logo.svg',
    'ovid-logo2.svg'
  ],
  fonts: [
    'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2',
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2'
  ]
}

// Generate preload links
const generatePreloadLinks = () => {
  let preloadLinks = '\n    <!-- Critical Resource Preloading -->\n'
  
  // Preload critical images
  criticalResources.images.forEach(image => {
    const imagePath = `/assets/${image}`
    const imageType = path.extname(image).slice(1)
    preloadLinks += `    <link rel="preload" href="${imagePath}" as="image" type="image/${imageType}">\n`
  })
  
  // Preload critical fonts
  criticalResources.fonts.forEach(font => {
    preloadLinks += `    <link rel="preload" href="${font}" as="font" type="font/woff2" crossorigin>\n`
  })
  
  return preloadLinks
}

// Update index.html with preload links
const updateIndexHTML = () => {
  const indexPath = path.join(__dirname, '../index.html')
  
  try {
    let htmlContent = fs.readFileSync(indexPath, 'utf8')
    
    // Find the insertion point (after meta tags, before scripts)
    const insertionPoint = htmlContent.indexOf('    <!-- Google Analytics 4 -->')
    
    if (insertionPoint !== -1) {
      const preloadLinks = generatePreloadLinks()
      
      // Remove existing critical resource preloading section if it exists
      const existingPreloadStart = htmlContent.indexOf('    <!-- Critical Resource Preloading -->')
      if (existingPreloadStart !== -1) {
        const existingPreloadEnd = htmlContent.indexOf('    <!-- Google Analytics 4 -->', existingPreloadStart)
        htmlContent = htmlContent.slice(0, existingPreloadStart) + htmlContent.slice(existingPreloadEnd)
      }
      
      // Insert new preload links
      const beforeGA = htmlContent.slice(0, insertionPoint)
      const afterGA = htmlContent.slice(insertionPoint)
      
      htmlContent = beforeGA + preloadLinks + afterGA
      
      fs.writeFileSync(indexPath, htmlContent)
      console.log('✅ Successfully updated index.html with critical resource preloading')
      
      // Log what was preloaded
      console.log('📦 Preloaded resources:')
      criticalResources.images.forEach(img => console.log(`   - Image: ${img}`))
      criticalResources.fonts.forEach(font => console.log(`   - Font: ${font}`))
      
    } else {
      console.error('❌ Could not find insertion point in index.html')
    }
  } catch (error) {
    console.error('❌ Error updating index.html:', error.message)
  }
}

// Validate that critical resources exist
const validateResources = () => {
  let allValid = true
  
  console.log('🔍 Validating critical resources...')
  
  // Check images
  criticalResources.images.forEach(image => {
    const imagePath = path.join(assetsDir, image)
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️  Critical image not found: ${image}`)
      allValid = false
    } else {
      console.log(`✅ Found: ${image}`)
    }
  })
  
  return allValid
}

// Main execution
const main = () => {
  console.log('🚀 Starting critical resource preloading optimization...\n')
  
  // Validate resources exist
  const resourcesValid = validateResources()
  
  if (!resourcesValid) {
    console.log('\n⚠️  Some resources are missing, but continuing with available ones...\n')
  }
  
  // Update HTML with preload links
  updateIndexHTML()
  
  console.log('\n✨ Critical resource preloading optimization complete!')
  console.log('💡 This will improve initial page load performance by preloading essential assets.')
}

// Run the script
main() 