// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// 
// ChartJS.register(ArcElement, Tooltip, Legend);
// 
// const DoughnutChartPage = () => {
//   const data = {
//     labels: ["Принимающий", "Специалист", 'Бухгалтер', 'Pабота над счетчиком', 'B стенд', 'Документация'],
//     datasets: [
//       {
//         label: "Transaction",
//         data: [3, 6, 12, 8, 1, 15],
//         backgroundColor: [
//           "#FF6E2E",
//           "#FFC772",
//           "#9461FF",
//           "#76CA66",
//           "#3174BA",
//           "#DA1E28",
//         ],
//         borderColor: ["#fff"],
//       },
//     ],
//   };
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       labels: {
//         display: false,
//       },
//       title: {
//         display: false,
//         text: "Chart.js Doughnut Chart",
//       },
//     },
//   };
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-12" style={{ height: "400px" }}>
//             <Doughnut data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// 
// export default DoughnutChartPage;
// 


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