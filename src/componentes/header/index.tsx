import React from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { bodyRef } from '../../pages/index'
import styles from './header.module.scss'

function Header() {

  const headerRef = React.createRef<HTMLElement>()

  function handleToggleMode() {
    document.body.classList.toggle('dark')
  }

  return (
    <header className={styles.header}>
      <div>
        <h1>Where in the world</h1>
        <div className={styles.toggleMode} onClick={handleToggleMode}>
          <FaRegMoon />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  )
}

export default Header