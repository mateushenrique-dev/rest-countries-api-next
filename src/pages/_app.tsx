import Header from '../componentes/header'
import '../styles/global-style.scss'
import '../styles/country-style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component  {...pageProps} />   
    </>
  )
}

export default MyApp
