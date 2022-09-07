import React, { useEffect, useState } from 'react'
import Card from '../SharedComponent/card/Card'
import styles from './MainComponent.module.scss'

import { RiWindyLine, RiRainyLine, RiSunLine } from 'react-icons/ri'
import { MdOutlineWaves } from 'react-icons/md'
import { BsCloudFog2 } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'
import TempChartComponent from '../SharedComponent/TempChart/TempChartComponent'
import { RingLoader } from '../RingLoader/RingLoader'
import NoResult from '../SharedComponent/error/NoResult'


function MainComponent({ current_info, isLoading, forcasts, status_code }) {
  const { pressure_mb, humidity, uv, wind_kph, vis_km, cloud } = current_info;
  const [ maxtemp , setMaxTemp]  = useState([]);
  const [ mintemp , setMinTemp]  = useState([]);
  const [  xaxislabel , setXLabel]  = useState([]);
  let max_temp = [];
  let min_temp = [];
  let x_axis_date = [];
console.log(status_code)

  useEffect(() => {

    const getMaxMinTemp = () => {

      forcasts?.map(data => {

        const { date } = data
        const weekDay = new Date(date)
        const { maxtemp_c, mintemp_c, } = data.day
       max_temp.push(maxtemp_c);
        min_temp.push(mintemp_c); 
        const arr = weekDay.toDateString().split(" ");
        const x_axis = `${arr[2]},${arr[1]}`;
        x_axis_date.push(x_axis);
      })
    }
    getMaxMinTemp()
    setMaxTemp(max_temp);
    setMinTemp(min_temp);
    setXLabel(x_axis_date);
  }, [current_info/* , maxtemp,mintemp , xaxislabel */]);

  const data = [
    {
      id: 1,
      component: <RiWindyLine fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "Wind Speed",
      value: `${wind_kph}km/h`
    }, {
      id: 2,
      component: <RiRainyLine fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "Rain Chance",
      value: `${cloud}%`
    },
    {
      id: 3,
      component: <MdOutlineWaves fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "Pressure",
      value: `${pressure_mb}mb`
    },
    {
      id: 4,
      component: <RiSunLine fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "UX index",
      value: `${uv}`
    }
    , {
      id: 5,
      component: <BsCloudFog2 fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "Visibility",
      value: `${vis_km}km`
    },
    {
      id: 6,
      component: <WiHumidity fontSize="44px" color='rgba(0, 128, 255, 0.872)' />,
      title: "Humidity",
      value: `${humidity}%`
    },

  ]

  return (
    <>
      {!isLoading ?
        <>
          {  status_code === 200?
            <div className={styles.mainParent}>
              <p>Todays overview</p>
              <div className={styles.overView}>
                {
                  data.map((info, index) => {
                    return (
                      <Card info={info} index={index} key={index} />
                    )
                  })

                }
              </div>
              <p>Day MAX Temperature Scale</p>
              <div className={styles.chart}>
                <TempChartComponent max_temp={max_temp} min_temp={min_temp} x_axis_date={x_axis_date} />
              </div>
            </div>
            : <NoResult/>
          }

        </>
        : <RingLoader />
      }
    </>
  )
}

export default MainComponent

/*   : 
         } */