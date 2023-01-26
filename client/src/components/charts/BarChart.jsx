import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'; 
const BarChart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          data: [12, 19,2,5,2,3]
        }] 
      };
  return (
    <div className='main-container__body'>
        <Bar 
        data={data}
        
                />
    </div>
  )
}

export default BarChart