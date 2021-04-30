import Header from '../componentes/header'
import { FilterContext } from '../contexts/contexts'
import '../styles/global-style.scss'
import '../styles/country-style.scss'
import '../styles/dark.scss'
import React from 'react'

function MyApp({ Component, pageProps }) {

  const mainRef = React.createRef()

  return (
    <FilterContext>
      <Header />
      <Component  {...pageProps} />   
    </FilterContext>
  )
}

export default MyApp
