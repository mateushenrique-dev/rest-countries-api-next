import { FaRegMoon } from 'react-icons/fa'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Where in the world</h1>
        <div>
          <FaRegMoon />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  )
}

export default Header