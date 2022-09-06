import React from 'react'
import styles from './temp.module.scss'
import { WiSunrise, WiSunset } from 'react-icons/wi'
import {BsClouds , BsCloudFog , BsCloudDrizzle  , BsSun ,BsMoonStars} from 'react-icons/bs'
import Range from '../SharedComponent/Range/Range'
import {IoCloudyNightOutline} from 'react-icons/io5'

const timeNow = () => {
  const time = new Date();
  let now = `${time.getHours()}:${time.getMinutes()} ${time.getHours() > 12 && time.getMinutes() > 0 ? "pm" : "am"}`

  return now;
}

function RightTempComponent({ astro, location, feelslike, temp, isLoading, hourly_Update ,  status_code }) {

  let time = new Date();

  const value = hourly_Update.filter((data, index) => index === time.getHours())

  const desc = value[0]?.condition.text;
  
  const icon = () =>{
      if(desc.includes("rain")){
        return <BsCloudDrizzle/>
      }
      else if(desc.includes("cloudy")){
        return <BsClouds/>
      }
      else if(desc.includes("fog")){
        return <BsCloudFog/>
      }
      else if(desc.toLowerCase().includes("clear")){
        if(value[0]?.is_day){
          return <BsSun/>
        }
        else{
          return <BsMoonStars/>
        }
      }

      
  } 
  return (

    <div className={styles.tempParent}>
      {
        !isLoading && status_code === 200?
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
             {icon()}
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
                  <tbody>
                    {
                     hourly_Update?.filter(data => {
                        const str = data?.time?.split(/[ :]/);
                        return str[1] >= time.getHours()

                      }) 
                      .map((data, index) => {
                        
                        const time = data.time.split(/[ :]/);
                        return (
                          <tr key={index}>
                            <td>{time[1]}:00{time[1]>12? " pm" :" am"}</td>
                            <td><Range width={data.cloud} /></td>
                            <td>{data.cloud}%</td>
                          </tr>
                        )
                      })

                    }

                  </tbody>
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
                <p className={styles.duration}>{/* {time.getHours() - parseInt(astro)} */}4 hours ago</p>
              </div>
              <div className={styles.detailContainer}>
                <WiSunset className={styles.icons} />
                <p className={styles.title}>Sunset</p>
                <p className={styles.value}>{astro.sunset}</p>
                <p className={styles.duration}> in 4 hours</p>
              </div>
            </div>
          </>
          : ""
      }
    </div>
  )
}

export default RightTempComponent