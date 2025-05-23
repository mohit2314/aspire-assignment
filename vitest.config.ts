// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './test/setup.ts', // optional setup
    include: ['tests/**/*.spec.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
