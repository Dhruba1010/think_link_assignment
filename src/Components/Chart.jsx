import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as chartJs } from 'chart.js/auto';

const Chart = () => {
    let chartData = {
        labels: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
        datasets: [{
            label: 'Sales',
            data: [1, 5, 6.5, 5.5, 7.5, 7.3, 10, 50 ],
            backgroundColor: '#2FCA72',
            color: 'white',
            borderColor: '#2FCA72',
        }]
    }

    let option = {
        scales: {
            y: {
                max: 100,
                min:1,
            }
        }
    }

  return (
    <Line data={chartData} options={option} />
  )
}

export default Chart

