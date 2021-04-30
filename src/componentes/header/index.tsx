import React from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { bodyRef } from '../../pages/index'
import styles from './header.module.scss'

function Header(props) {

  const headerRef = React.createRef<HTMLElement>()

  function handleToggleMode() {
    console.log(bodyRef.current)
    bodyRef.current.classList.toggle('dark')
    headerRef.current.classList.toggle('dark')
  }

  return (
    <header className={styles.header} ref={headerRef}>
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