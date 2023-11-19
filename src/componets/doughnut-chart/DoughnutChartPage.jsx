import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DoughnutChartPage = () => {
  const [options] = useState({
    dataLabels: {
        enabled: false
    },
    colors: ['#FFC772', '#CF54BC', '#FF6E2E', '#9461FF', '#76CA66'],
    labels: ['Apples', 'Oranges', 'Berries', 'Grapes', "RED"]
  });
  const [series] = useState([44, 55, 41, 17, 15]);
  const [labels] = useState(['A', 'B', 'C', 'D', 'E']);

  return (
    <div className="donut">
        <div className="container">
            <div className="row">
                <div className="col-4">
                <Chart options={options} series={series} type="donut" height="380" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default DoughnutChartPage;