import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Landing/landing.module.css"
const Landing = () => {
  return (
   
      <div className={styles.container}>
           <div className={styles.link}>
           <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt=""   width={"400"}  />
          {/*  <h1 className={styles.h1}>Rick and Morty Api</h1> */}
          <br/>
           <Link to='/home'><button className={styles.btn}>Get Schwifty</button></Link>
           <br/>
           </div>
           
           <img  src="https://i0.wp.com/www.coliseugeek.com.br/wp-content/uploads/2023/01/c930c-clickwallpapers-rickandmorty-desenho-4k-img8-minbase-scaled-1.jpg?resize=1024%2C576&ssl=1" alt=""  /> 
       {/*https://poptv.orange.es/wp-content/uploads/sites/3/2018/03/Rick-and-Morty-3p-1100x619.jpg*/}
       {/* https://i.hbrcdn.com/haber/2023/01/25/rick-and-morty-bitti-mi-final-mi-yapacak-rick-15584821_7870_amp.jpg */}
       </div>


   
  )
}

export default Landing
