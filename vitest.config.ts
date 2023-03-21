import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import { commonsConfig } from './vite.config'
import { resolve } from 'path'

export default mergeConfig(
  commonsConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      deps: {
        inline: ['vitest-canvas-mock'],
      },
      setupFiles: resolve(__dirname, 'src', 'test', 'setup.ts'),
      css: true,
    },
  }),
)
