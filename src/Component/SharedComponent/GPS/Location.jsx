import React from 'react'
import { MdGpsFixed } from 'react-icons/md';
import styles from './location.module.scss' ;

function Location({locationHandler}) {
  return (
    <div className={styles.locationContainer} onClick={locationHandler}>
        <MdGpsFixed className={styles.icons} />
    </div>
  )
}

export default Location ;