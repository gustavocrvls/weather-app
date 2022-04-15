import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary: '#3C47E9',
    secondary: '#6E707A',
  },
  typography: {
    primary: 'black',
    secondary: 'white',
  },
}

const dark: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary: '#3C47E9',
    secondary: '#6E707A',
  },
  typography: {
    primary: 'white',
    secondary: 'black',
  },
}

export { light, dark }
