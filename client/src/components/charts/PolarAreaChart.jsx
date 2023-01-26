import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import Chart from 'chart.js/auto'; 

const PolarAreaChart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          data: [12, 19,2,5,2,3]
        }] 
      };
  return (
    <div>
        <PolarArea data={data}/>
    </div>
  )
}

export default PolarAreaChart