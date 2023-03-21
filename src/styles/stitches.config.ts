import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  prefix: 'lemon-test',
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#1F1F1F',
    },
    fonts: {
      inter: 'Inter, sans-serif',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
})
