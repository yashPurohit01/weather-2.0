import React, { useState } from 'react'
import {  Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function TempChartComponent({max_temp , min_temp , x_axis_date}) {
    const [userData , setUserData] = useState({
        labels:x_axis_date,
        datasets:[{
            label:"Max temp",
            data:max_temp,
            borderColor:["rgba(13, 38, 74, 0.863)"],
            backgroundColor:["rgba(255, 255, 255, 0.034)"],
            fill:true,
            tension:0.4,
             pointBorderColor:"rgba(13, 38, 74, 0.863)", 
            showLine:true,
            pointRadius:3,
            pointBorderWidth:3,

        },
        {
            label:"Min temp",
            data:min_temp,
            backgroundColor:["rgba(255, 255, 255, 0.034)"],
            borderColor:["orange"],
            fill:true,
            tension:0.3,
           /*  pointBorderColor:"rgba(13, 38, 74, 0.863)" */
            showLine:true,
            pointRadius:3,
            pointBorderWidth:3,

        }    
    ]
        
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