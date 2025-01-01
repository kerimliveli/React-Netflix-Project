import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      common: "/src/common",
      Common: "/src/Common",
      icons: "/src/assets/icons",
      images: "/src/assets/images",
      locales: "/src/locales",
      utils: "/src/utils",
      pages: "/src/pages"
    },
  },






})
