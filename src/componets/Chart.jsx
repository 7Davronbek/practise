import React from 'react'
import { Line } from 'react-chartjs-2';
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

const Chart = () => {
    const data = {
        labels: [
            'January',
            'February',
            'March',
            // 'April',
            // 'May',
            // 'June',
            // 'July',
            // 'August',
            // 'September',
            // 'October',
        ],
        datasets: [{
            labels: 'Sales Week',
            data: [3, 5, 10],
            backgroundColor: '#000',
            borderColor: 'red',
            fill: true,
            tension: 0.9,
            borderWidth: 2,
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        }
    }

    return (
        <div className='Chart'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Line
                            data={data}
                            options={options}

                        // xField="x"
                        // yField="y"
                        >

                        </Line>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart