import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  pallette: {
    black: '#101820',
    yellow: '#FFCD00',
    white: 'white'
  },
  typography: {
    fontFamily: {
      stratos: [
        'stratos',
        'sans-serif'
      ].join(','),
      gimlet: [
        'gimlet-display'
      ].join(','),
    },
    fontSize: {
      xxs: 12,
      xs: 20,
      sm: 24,
      md: 32,
      lm: 38,
      lg: 48,
      xl: 68,
      xxl: 88,
      xxxl: 150
    },
    fontWeight: {
      bold: 600
    },
    fontStyle: {
      light: 'Light',
      regular: 'Regular'
    },
    lineHeight: {
      xs: 1.2,
      s: 1.3,
      m: 1.4,
      l: 1.6,
      xl: 2
    }
  }
})

export default theme