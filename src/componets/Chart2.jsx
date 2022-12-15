import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
)

const Chart2 = () => {
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October'
        ],
        datasets: [
            {
                label: '369',
                data: ['500', '500', '500'],
                backgroundColor: '#3E975B',
                border: 0,
                outline: 'none'
            },
            {
                label: '369',
                data: [9, 3, 6],
                backgroundColor: '#BF504C',
                border: 0,
                outline: 'none'
            },
        ]
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
        <div className='Chart2'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        lorem
                        <Bar
                            data={data}
                            options={options}
                        ></Bar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart2