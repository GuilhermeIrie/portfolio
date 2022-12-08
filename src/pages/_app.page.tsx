import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import '../jogo/TemplateData/style.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
