import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'bundle-analysis.html',
      gzipSize: true,
      brotliSize: true
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // 10kb
      deleteOriginFile: false
    })
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    headers: {
      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data:",
        "connect-src 'self'",
        "media-src 'self'",
        "object-src 'none'",
        "frame-src 'none'"
      ].join('; ')
    }
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          reactadmin: ['react-admin', 'ra-core', 'ra-ui-materialui'],
          monaco: ['@monaco-editor/react'],
          supabase: ['@supabase/supabase-js', 'ra-supabase']
        }
      }
    }
  },
  base: './',
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-admin',
      '@mui/material',
      '@emotion/react',
      '@monaco-editor/react'
    ],
    exclude: ['js-big-decimal']
  }
});