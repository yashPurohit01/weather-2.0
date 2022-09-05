import React from 'react'
import styles from './nav.module.scss' ;
import { SiReactivex} from 'react-icons/si'


function NavBar({air_quality}) {
  const quality = Object.entries(air_quality)
  return (
    <div className={styles.navMain}>
       <div className={styles.navHead}>
          <SiReactivex className={styles.icons}/>
          <h2>weatherCast</h2>
       </div>
       <div className={styles.airQuality}>
          <h3>Air Quality (μg/m3)</h3>
           {
             quality.map((data,index) =>{
              return(
                <div className={styles.airContent} key={index}>
                  <p className={styles.name}>{data[0]}</p>
                  <p className={styles.value}>{parseInt(data[1])}</p>
                 </div> 
              )
             })
           }
       </div>
    </div>
  )
}

export default NavBar