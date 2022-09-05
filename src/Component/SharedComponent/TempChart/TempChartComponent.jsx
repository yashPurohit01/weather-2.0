import React, { useState } from 'react'
import {  Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {userdata} from './data'

function TempChartComponent() {
    const [userData , setUserData] = useState({
        labels:['Sunday','Monday','Tuesday','WEdnseday','Thurday','Friday','saturday'],
        datasets:[{
            label:"temperature",
            data:[23,45,38,21,36,56,31],
            backgroundColor:"hsl(213.6, 100%, 95.1%)",
            borderColor:["rgba(13, 38, 74, 0.863)"],
            fill:true,
            tension:0.4,
            pointBorderColor:"rgba(13, 38, 74, 0.863)",
            showLine:true,
            pointRadius:3,
            pointBorderWidth:3,

        }]
    })
  return <Line
           data={userData}
           options={{
            scales:{
                y:{
                    grid:{
                        display:false
                    }
                },
                x:{
                    grid:{
                        display:false
                    }
                }
            }
            
           }}
           
           height={80}
        />
    
  
}

export default TempChartComponent