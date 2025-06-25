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
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
          icons: ['lucide-react', 'react-icons'],
          // Separate analytics and utilities
          utils: ['web-vitals']
        },
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
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
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
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'lucide-react',
      'web-vitals'
    ],
    exclude: ['@react-three/drei']
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