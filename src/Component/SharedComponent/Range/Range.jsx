import React from 'react'
import styles from './range.module.scss'
function Range({width}) {
    
  return (
    <div className={styles.rangeContainer}>
        <div className={styles.tracker} style={{width:`${width}%`}}></div>

    </div>
  )
}

export default Range