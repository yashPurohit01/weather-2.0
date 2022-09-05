import React from 'react'
import styles from './temp.module.scss'
import {WiSunrise, WiSunset} from 'react-icons/wi'
import { BsCloudSunFill} from 'react-icons/bs'
import Range from '../SharedComponent/Range/Range'


const timeNow = () =>{
 const time = new Date();
 let now = `${time.getHours()}:${time.getMinutes()} ${time.getHours() > 12 && time.getMinutes() > 0 ? "pm" : "am"}`

 return  now  ; 
}

function RightTempComponent({astro, location , feelslike ,  temp , isLoading, hourly_Update}) {

  let time = new Date();

  const value  = hourly_Update.filter((data , index) => index === time.getHours())
   
  const  desc = value[0]?.condition.text;
  return (

    <div className={styles.tempParent}>
      {
       ! isLoading ?
        <>
      <div className={styles.tempDetailheading}>
        <div>
           <p>{location?.name}</p>
          <p>{location?.region},{location?.country}</p> 
        </div>
        <p>{timeNow()}</p>
      </div>
      <div className={styles.tempDetails}>
        <div className={styles.icons}>
          <BsCloudSunFill />
        </div>
        <div className={styles.temp}>
          <div>
          <h2>{temp}°C</h2>
          <p className={styles.feels}>Feels: {feelslike}°C</p>
          </div>
          <p>
            {desc}
          </p>
        </div>

        <div className={styles.rainInfo}>
         <p className={styles.head}>Chance of rain </p>
         <table className={styles.table}>
            <tr>
              <td>4am</td>
              <td><Range width="40"/></td>
              <td>40%</td>
            </tr>
            <tr>
              <td>5am</td>
              <td><Range width="60"/></td>
              <td>60%</td>
            </tr>
            <tr>
              <td>6am</td>
              <td><Range  width="30"/></td>
              <td>30%</td>
            </tr>
            <tr>
              <td>7am</td>
              <td><Range  width="60"/></td>
              <td>60%</td>
            </tr>
            <tr>
              <td>8am</td>
              <td><Range  width="70"/></td>
              <td>70%</td>
            </tr>
            <tr>
              <td>9am</td>
              <td><Range  width="40"/></td>
              <td>40%</td>
            </tr>
         </table>
        </div>
      </div>
      <div className={styles.RiseSetDetail}>
         <div className={styles.head}>
          <p>Sunrise & Sunset</p>
          <p>Kolkata</p>
         </div>
         <div className={styles.detailContainer}>
           <WiSunrise className={styles.icons} />
           <p className={styles.title}>Sunrise</p>
           <p className={styles.value}>{astro.sunrise}</p>
           <p className={styles.duration}>4 hours ago</p>
         </div>
         <div className={styles.detailContainer}>
           <WiSunset  className={styles.icons} />
           <p className={styles.title}>Sunset</p>
           <p className={styles.value}>{astro.sunset}</p>
           <p className={styles.duration}> in 4 hours</p>
          </div>
      </div>
      </>
      :""
      }
    </div>
  )
}

export default RightTempComponent