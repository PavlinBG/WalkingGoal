// import React, { useRef, useEffect } from 'react';
// import { Chart, LineController, CategoryScale, LineElement } from 'chart.js';
// Chart.register(LineController, CategoryScale, LineElement);

// function ChartComponent({ walkingGoals }) {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);

//   useEffect(() => {
//     if (walkingGoals && walkingGoals.length > 0) {
//       const xValues = walkingGoals.map(goal => goal.day);
//       const yValues = walkingGoals.map(goal => goal.steps);

//       // Destroy previous chart instance if it exists
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }

//       chartInstanceRef.current = new Chart(chartRef.current, {
//         type: 'line',
//         data: {
//           labels: xValues,
//           datasets: [
//             {
//               data: yValues,
//               borderColor: 'red',
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               type: 'linear',
//             },
//             x: {
//               type: 'category',
//             },
//           },
//           plugins: {
//             legend: { display: false },
//           },
//         },
//       });
//     }
//   }, [walkingGoals]);

//   return <canvas ref={chartRef} style={{ width: '100%', maxWidth: '600px' }} />;
// }

// export default ChartComponent;
