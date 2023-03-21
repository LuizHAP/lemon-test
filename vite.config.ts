import { defineConfig, loadEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export const commonsConfig: UserConfig = {
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}

export default defineConfig(() => {
  const { plugins, resolve } = commonsConfig

  return {
    plugins,
    resolve,
  }
})
