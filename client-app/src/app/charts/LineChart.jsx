import { Chart, registerables } from 'chart.js';
import React, { useEffect } from 'react'

const LineChart = () => {
    const Line  = React.createRef();

    useEffect(() => {
        buildChart();
      }, [])
      const buildChart = () => {
     
       // const canvas = (document.getElementById('myChart') as HTMLCanvasElement);
       // const ctx = canvas.getContext('2d');
     
       const ctx = Line.current.getContext('2d');
       Chart.register(...registerables);
     
        var myChart = new Chart(ctx, {
         type: 'line',
         data: {
           labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
           datasets: [{
             label: 'Sales',
             data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
             backgroundColor: 'rgba(63,82,227,.8)',
             borderWidth: 2,
             borderColor: 'transparent',
             pointBorderWidth: 0,
             pointRadius: 3.5,
             pointBackgroundColor: 'transparent',
             pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
           },
           {
             label: 'Budget',
             data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
             backgroundColor: 'rgba(254,86,83,.7)',
             borderWidth: 2,
             borderColor: 'transparent',
             pointBorderWidth: 0 ,
             pointRadius: 3.5,
             pointBackgroundColor: 'transparent',
             pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
           }]
         }
         ,
         options: {
           legend: {
             display: false
           },
           scales: {
             yAxes: [{
               gridLines: {
                 // display: false,
                 drawBorder: false,
                 color: '#f2f2f2',
               },
               ticks: {
                 beginAtZero: true,
                 stepSize: 1500,
                 callback: function(value, index, values) {
                   return '$' + value;
                 }
               }
             }],
             xAxes: [{
               gridLines: {
                 display: false,
                 tickMarkLength: 15,
               }
             }]
           },
         }
        
       });
       
      }

    return (
        <canvas ref={Line} id="myChart" height="158"></canvas>
    )
}

export default LineChart
