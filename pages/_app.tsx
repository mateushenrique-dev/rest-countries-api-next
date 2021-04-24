import Header from './header'
import '../styles/global-style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component  {...pageProps} />   
    </>
  )
}

export default MyApp
