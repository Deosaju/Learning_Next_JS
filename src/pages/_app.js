import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components'
import Header from 'components/header'
import Footer from 'components/footer'
import '@/styles/layout.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return <>
    <Header />
    <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    <Footer />
  </>
}
