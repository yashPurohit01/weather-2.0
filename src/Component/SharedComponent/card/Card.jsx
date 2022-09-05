import React from 'react'
import styles from './card.module.scss';

import {RiWindyLine , RiRainyLine , RiSunLine} from 'react-icons/ri'
function Card({info , index}) {
    
  return ( 
    <div className={styles.cardContainer} >
      <p className={styles.title}>{info.title}</p>
      {
        info.component
      }
      <h2 className={styles.value}>{info.value}</h2>
      <div>

      </div>
     </div>
  )
}

export default Card