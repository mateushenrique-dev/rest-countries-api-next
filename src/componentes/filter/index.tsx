import { AiOutlineSearch } from 'react-icons/ai'
import { useFilterContext } from '../../contexts/contexts'
import styles from './filter.module.scss';

function Filter() {

  const teste = useFilterContext()

  console.log(teste)
  
  const {filterRegion, setFilterRegion} = useFilterContext()

  function filter(e) {
    console.log(e.target.value)
    setFilterRegion(e.target.value)
  }


  return (
    <section className={styles.filter}>
      <div className='searchField'>
       <span><AiOutlineSearch size="18" color="hsl(0, 0%, 52%)" /></span> <input onChange={filter} type="search" placeholder="Search for a Country..."/>
      </div>
      <div>
      <select onChange={filter} name="" id="regionField">
        <option value="">Filter by Region...</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      </div>
    </section>
  )
}

export default Filter