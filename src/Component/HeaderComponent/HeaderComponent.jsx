import React, { useEffect, useState } from 'react'
import Location from '../SharedComponent/GPS/Location'
import Search from '../SharedComponent/SearchSection/Search'
import styles from './header.module.scss'

function HeaderComponent({setSearchQuery , searchQuery}) {
  const todayDAte = new Date() ; 
  let pos ;
  const Month = `${todayDAte.getMonth({month:'string'})} ${todayDAte.getFullYear()}`
  
  const getGeolocation = () =>{
  
    navigator.geolocation.getCurrentPosition((position)=>{
     pos = `${position.coords.latitude},${position.coords.longitude}`
    
     setSearchQuery(() => pos);
     
    })
  }

  useEffect(() =>{
    getGeolocation()
  }, [])
  return (
    <div className={styles.headerParent}>
       <div className={styles.date}>
           <p className={styles.dateHead}>{Month}</p>
           <p className={styles.low}>Thurday,Jan 4,2022</p>
       </div >
       <div className={styles.actions}>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
           <Location locationHandler={getGeolocation}/>
       </div>

    </div>
  )
}

export default HeaderComponent