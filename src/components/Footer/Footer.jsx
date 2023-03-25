import React from 'react'
import styles from "../Footer/footer.module.css"


const Footer = () => {
  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <li><a href=''>Acerca de ...</a></li>
        <li><a href=''>Linkedin</a></li>
        <li><a href=''>Github</a></li>
      </ul>
    </div>
  )
}

export default Footer
