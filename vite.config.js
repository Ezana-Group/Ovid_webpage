import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    // Enhanced code splitting and optimization
    rollupOptions: {
      output: {
        // manualChunks: (id) => {
        //   // Separate Three.js into its own chunk - only load when needed
        //   if (id.includes('three') || id.includes('@react-three')) {
        //     return 'three-vendor'
        //   }
        //   // Separate React core
        //   if (id.includes('react') || id.includes('react-dom')) {
        //     return 'react-vendor'
        //   }
        //   // Separate UI libraries
        //   if (id.includes('framer-motion')) {
        //     return 'motion-vendor'
        //   }
        //   if (id.includes('lucide-react') || id.includes('react-icons')) {
        //     return 'icons-vendor'
        //   }
        //   // Separate analytics
        //   if (id.includes('web-vitals') || id.includes('gtag')) {
        //     return 'analytics-vendor'
        //   }
        //   // Separate utilities
        //   if (id.includes('/utils/')) {
        //     return 'utils'
        //   }
        //   // Separate legal pages (Privacy Policy, Terms of Service)
        //   if (id.includes('PrivacyPolicy') || id.includes('TermsOfService')) {
        //     return 'legal-pages'
        //   }
        //   // Separate demo components (3D heavy)
        //   if (id.includes('ThreeBackground') || id.includes('GlassLensDemo2') || id.includes('InteractiveShadows')) {
        //     return 'demo-components'
        //   }
        //   // Critical components (Hero, Navbar, Footer)
        //   if (id.includes('Hero') || id.includes('Navbar') || id.includes('Footer')) {
        //     return 'critical-components'
        //   }
        //   // Other components
        //   if (id.includes('/components/')) {
        //     return 'components'
        //   }
        //   // Vendor libraries
        //   if (id.includes('node_modules')) {
        //     return 'vendor'
        //   }
        // },
        // Optimize chunk file names with content hash
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Modern browser targets for better optimization
    target: 'es2015',
    // Enable minification with advanced options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        // More aggressive optimization
        dead_code: true,
        global_defs: {
          __DEV__: false
        }
      },
      mangle: {
        safari10: true,
        // Mangle property names for smaller bundles
        properties: {
          regex: /^_/
        }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 500, // Reduced from 1000
    // Enable source maps for debugging (disabled for production)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Report bundle size
    reportCompressedSize: true
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      'web-vitals'
    ],
    // Exclude heavy libraries from pre-bundling
    exclude: [
      'three',
      '@react-three/fiber',
      '@react-three/drei'
    ]
  },
  // Enable modern CSS features
  css: {
    devSourcemap: true
  },
  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production')
  },
  // Resolve aliases for better imports
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils'
    }
  },
  // Experimental features for better performance
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: filename }
      } else {
        return { relative: true }
      }
    }
  }
}) 