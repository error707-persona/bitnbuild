import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'; 
const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      data: [12, 19,2,5,2,3]
    }] 
  };
  return (
    <div>
      <Doughnut
      data = {data}
      
      />
    
    </div>
  )
}

export default DoughnutChart