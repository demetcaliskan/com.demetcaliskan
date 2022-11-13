import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#ffc4e1',
    tertiary: '#020307',
  },
  fonts: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Red Hat Mono', monospace",
    tertiary: "'Italiana', serif",
  },
}

const Theme = ({ children }: { children: any }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
