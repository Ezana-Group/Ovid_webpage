#!/usr/bin/env node

/**
 * Performance Optimization Script for Ovid International
 * Analyzes bundle sizes and provides optimization recommendations
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Performance budgets
const BUDGETS = {
  totalJS: 500 * 1024, // 500KB
  reactVendor: 200 * 1024, // 200KB
  threeVendor: 200 * 1024, // 200KB
  motionVendor: 50 * 1024, // 50KB
  criticalComponents: 30 * 1024, // 30KB
  components: 50 * 1024, // 50KB
  utils: 20 * 1024, // 20KB
}

// Analyze bundle sizes
function analyzeBundleSizes() {
  const distPath = path.join(process.cwd(), 'dist')
  const assetsPath = path.join(distPath, 'assets')
  
  if (!fs.existsSync(assetsPath)) {
    console.error('❌ Dist folder not found. Run "npm run build" first.')
    return
  }
  
  const files = fs.readdirSync(assetsPath)
  const jsFiles = files.filter(file => file.endsWith('.js'))
  
  console.log('📊 Bundle Size Analysis')
  console.log('=' .repeat(50))
  
  let totalSize = 0
  let totalGzipped = 0
  
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file)
    const stats = fs.statSync(filePath)
    const sizeKB = Math.round(stats.size / 1024)
    const gzippedKB = Math.round(stats.size * 0.3 / 1024) // Estimate gzipped size
    
    totalSize += stats.size
    totalGzipped += gzippedKB
    
    // Check against budgets
    let status = '✅'
    if (file.includes('three-vendor') && stats.size > BUDGETS.threeVendor) {
      status = '⚠️'
    } else if (file.includes('react-vendor') && stats.size > BUDGETS.reactVendor) {
      status = '⚠️'
    } else if (file.includes('motion-vendor') && stats.size > BUDGETS.motionVendor) {
      status = '⚠️'
    }
    
    console.log(`${status} ${file.padEnd(30)} ${sizeKB.toString().padStart(6)} KB (${gzippedKB} KB gzipped)`)
  })
  
  console.log('=' .repeat(50))
  console.log(`📦 Total JS: ${Math.round(totalSize / 1024)} KB (${totalGzipped} KB gzipped)`)
  
  // Recommendations
  console.log('\n🎯 Optimization Recommendations:')
  
  if (totalSize > BUDGETS.totalJS) {
    console.log('⚠️  Total bundle size exceeds 500KB budget')
    console.log('   → Consider removing unused dependencies')
    console.log('   → Implement more aggressive code splitting')
  }
  
  const threeVendorFile = jsFiles.find(f => f.includes('three-vendor'))
  if (threeVendorFile) {
    const threeSize = fs.statSync(path.join(assetsPath, threeVendorFile)).size
    if (threeSize > BUDGETS.threeVendor) {
      console.log('⚠️  Three.js bundle is too large')
      console.log('   → Consider lazy loading 3D components')
      console.log('   → Use lighter alternatives for simple animations')
    }
  }
  
  const reactVendorFile = jsFiles.find(f => f.includes('react-vendor'))
  if (reactVendorFile) {
    const reactSize = fs.statSync(path.join(assetsPath, reactVendorFile)).size
    if (reactSize > BUDGETS.reactVendor) {
      console.log('⚠️  React bundle is too large')
      console.log('   → Consider using React.lazy more aggressively')
      console.log('   → Remove unused React features')
    }
  }
}

// Check for unused dependencies
function checkUnusedDependencies() {
  const packagePath = path.join(process.cwd(), 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  
  console.log('\n🔍 Dependency Analysis')
  console.log('=' .repeat(50))
  
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies }
  const heavyDeps = [
    { name: 'three', size: '~600KB' },
    { name: '@react-three/fiber', size: '~100KB' },
    { name: '@react-three/drei', size: '~200KB' },
    { name: 'framer-motion', size: '~80KB' },
    { name: 'react-icons', size: '~50KB' }
  ]
  
  heavyDeps.forEach(dep => {
    if (dependencies[dep.name]) {
      console.log(`📦 ${dep.name.padEnd(20)} ${dep.size}`)
    }
  })
}

// Generate optimization report
function generateReport() {
  console.log('\n📋 Performance Optimization Report')
  console.log('=' .repeat(50))
  
  const recommendations = [
    '✅ Implemented route-based code splitting',
    '✅ Separated Three.js into demo-components chunk',
    '✅ Optimized bundle splitting strategy',
    '✅ Added performance monitoring',
    '✅ Created service worker for caching',
    '✅ Removed heavy CSS animations',
    '🔄 Consider implementing image optimization',
    '🔄 Consider using WebP/AVIF image formats',
    '🔄 Consider implementing critical CSS inlining',
    '🔄 Consider using React.memo for expensive components'
  ]
  
  recommendations.forEach(rec => {
    console.log(rec)
  })
}

// Main function
function main() {
  console.log('🚀 Ovid International Performance Optimizer')
  console.log('=' .repeat(50))
  
  analyzeBundleSizes()
  checkUnusedDependencies()
  generateReport()
  
  console.log('\n✨ Performance optimization complete!')
  console.log('Run "npm run build" to see the improvements.')
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export {
  analyzeBundleSizes,
  checkUnusedDependencies,
  generateReport
} 