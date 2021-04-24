import Image from 'next/image';
import Link from 'next/link';

export function getStaticPaths() {
  return { 
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const country = context.params.country
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

function Country(props) {
  const country = props.data
  console.log(country)
  return (
    <main className="countriesContainer">
      <Link href="/"><button>↜ Back</button></Link>
      <Image
        src={country.flag}
        width='200px'
        height='300px' 
        objectFit="cover"
        className="countryFlag"
      />
      <div className="countryContainer">
        <h1>{country.name}</h1>
        <div className="countryInfos">       
          <p>Native Name: <span>{country.nativeName}</span></p>
          <p>Population: <span>{country.population}</span></p>
          <p>Region: <span>{country.region}</span></p>
          <p>Sub Region: <span>{country.subregion}</span></p>
          <p>Capital: <span>{country.capital}</span></p>
            
        </div>

        <div className="countryDomain">

        <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
            <p>Currencies: 
              <span>{country.currencies.map((currencie) => {
                  return (
                    ' ' + currencie.name + ', '
                  )
                })}
              </span>
            </p>
            <p>Languages: 
              <span>{country.languages.map((language) => {
                  return (
                    ' ' + language.name + ', '
                  )
                })}
              </span>
          </p>

        </div>

        <div className="countryBorders">
          <h3>Border Countries: </h3>
          <ul>
            {country.borders.map((border) => {
              return <li>{border}</li>
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Country

