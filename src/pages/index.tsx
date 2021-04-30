import Filter from '../componentes/filter'
import Countries from '../componentes/countries'
import { GetStaticProps } from 'next'
import React from 'react'

  
export const bodyRef = React.createRef<HTMLElement>()

export default function Home(props) {

  return (
    <section ref={bodyRef}>
      <Filter />
      <Countries data={props.data}/>
    </section>
  )
}


export const getStaticProps = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json()
  return {
    props: { 
      data
    },
    revalidate: 1,
  } 
}