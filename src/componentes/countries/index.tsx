import styles from './countries.module.scss'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'

function Countries(props) {

  const countries = props.data

  return (
    <main className={styles.countriesContainer}>
      <ul>
        {
          countries.map((country) => {
            return (
              <li key={country.code}>
                <Link href={`countries/${country.alpha2Code}`}>
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