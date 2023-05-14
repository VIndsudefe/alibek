import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
function Nav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menupart1}><li className={styles.menuItem}><Link className={styles.link} to='/'>Logonpm</Link></li></li>
        
        <li className={styles.menupart2}>
          <li className={styles.menuItem}><Link className={styles.link} to='/'>MENU</Link> </li>
          <li className={styles.menuItem}><Link className={styles.link} to='/about'>ABOUT US</Link></li>
          
          <div><a href="" style={{textDecoration:"none" , color:"white"}}> INSTAGRAM</a></div>
          <div><a href="" style={{textDecoration:"none" , color:"white"}}> WHATSAPP</a></div>
        </li>
      </ul>
    </div>
  )
}

export default Nav

