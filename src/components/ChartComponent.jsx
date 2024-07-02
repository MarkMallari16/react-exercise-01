import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const ChartComponent = () => {
    const data = {
        labels: ["September 28", "September 29", "September 30", "October 1", "October 2"],
        datasets: [{
            data: [7, 7.2, 6, 8, 7, 5, 6],
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 5,
            tension: 0.5
        }],


    };
    const options = {
       
    };




    return (
        <div className="container d-flex justify-content-center mt-5">
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default ChartComponent