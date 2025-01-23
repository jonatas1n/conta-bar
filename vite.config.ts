import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react'],
          vendorDom: ['react-dom'],
          style: ['@mui/material']
        },
      },
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  base: '/',
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
        type: 'module',
      },
      workbox: {
        globPatterns: [
          '**/*.{html,js,css,png,jpg,json}'
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/divideai.co/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'divideai-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
              },
            },
          },
        ],
      },
      includeAssets: [
        '**/*.{png,jpg,woff,woff2,css}'
      ],
      manifest: {
        name: 'divide-ai',
        short_name: 'DivideAí',
        description: 'Uma aplicação para dividir contas de bares e restaurantes',
        theme_color: '#0e4d1f',
        scope: "/",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
        ]
      }
    })
  ]
})
