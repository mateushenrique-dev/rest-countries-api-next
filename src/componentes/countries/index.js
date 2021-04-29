import styles from './countries.module.scss'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useFilterContext } from '../../contexts/contexts'

function Countries(props) {

  const countries = props.data
  const { filterRegion } = useFilterContext()  

  let countriesFiltered = countries.filter((country) => {

    const nameOfCountryUserSide = filterRegion.toLowerCase().replace(/[^a-zA-Zs]/g, "")
    const nameOfCountryApiSide = country.name.toLowerCase().replace(/[^a-zA-Zs]/g, "")
    if(country.region === "") {
      country.region = " "
    }
    return (country.region === filterRegion) || ((nameOfCountryApiSide.includes(nameOfCountryUserSide)) && (filterRegion !== ""))
  })

  return (
    <main className={styles.countriesContainer}>
      <ul>
        {
          (countriesFiltered.length ? countriesFiltered : countries).map((country) => {
            return (
              <li key={country.alpha2Code}>
                <Link href={`/countries/${country.alpha2Code}`}>
                  <a>
                    <div>
                      <Image
                        src={country.flag}
                        width="230"
                        height="150"
                        objectFit="cover"
                        alt={country.name + ' Flag'}
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
                </Link>
              </li>
            )
          })          
        }
      </ul>
    </main> 
    )
}

export default Countries