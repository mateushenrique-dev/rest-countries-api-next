import { AiOutlineSearch } from 'react-icons/ai'
import styles from './filter.module.scss';

function Filter() {
  return (
    <section className={styles.filter}>
      <div>
       <span><AiOutlineSearch size="18" color="hsl(0, 0%, 52%)" /></span> <input type="search" placeholder="Search for a Country..."/>
      </div>
      <div>
      <select name="" id="">
        <option value="">Filter by Region...</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Ásia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
      </div>
    </section>
  )
}

export default Filter