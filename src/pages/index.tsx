import Filter from '../componentes/filter'
import Countries from '../componentes/countries'
import { GetStaticProps } from 'next'

export default function Home(props) {
  return (
    <>
      <Filter />
      <Countries data={props.data}/>
    </>
  )
}


export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json()
  return {
    props: { 
      data
    },
    revalidate: 1,
  } 
}