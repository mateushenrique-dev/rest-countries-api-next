import styles from './countries.module.scss'
import Image from 'next/image'
import { GetStaticProps } from 'next'

function Countries(props) {

  const countries = props.data
  
  return (
    <main className={styles.countriesContainer}>
      <ul>
        {
          countries.map((country) => {
            return (
              <li>
                <a>
                  <div>
                    <Image
                      src={country.flag}
                      width="230"
                      height="150"
                      className={styles.flag}
                    />
                  </div>
                  <div className={styles.countryInfo}>
                    <h2>{country.name}</h2>
                    <p>Population: <span>{country.population}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                  </div>
                </a>
              </li>
            )
          })          
        }
      </ul>
    </main> 
    )
}

export default Countries


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