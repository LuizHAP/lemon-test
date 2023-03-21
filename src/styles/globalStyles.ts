import { globalCss } from '@/styles/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
  },
  'body, #root': {
    height: '100vh',
    backgroundColor: '$background',
  },
  'body, input, textarea, select, legend, button': {
    fontFamily: '$inter',
  },
})
