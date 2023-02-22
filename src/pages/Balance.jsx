import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Balance() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Sep 1', 'Sep 2', 'Sep 3', 'Sep 4', 'Sep 5', 'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16', 'Sep 17','Sep 18', 'Sep 19', 'Sep 20', 'Sep 21', 'Sep 22', 'Sep 23', 'Sep 24', 'Sep 25', 'Sep 26', 'Sep 27','Sep 28', 'Sep 29', 'Sep 30'],
      datasets: [
        {
          label: 'Balance',
          data: [2476.50, 2438.96, 2438.96, 2438.96, 2286.84, 3486.84, 2661.84, 2610.79, 2610.79, 2610.79, 2511.29, 2459.15, 2421.05, 2388.16, 2362.15, 2280.00, 2011.02, 1966.62, 1939.25, 1920.15, 1705.15, 1688.15, 1630, 1500, 1400, 1300, 1200, 1100, 1100, 1100],
          borderColor: '#36a2eb',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
        }
        // {
        //   label: 'Income',
        //   data: [2500, 0, 0, 0, 0, 1200, 0, 0, 0, 0],
        //   borderColor: '#4bc0c0',
        //   backgroundColor: 'rgba(75, 192, 192, 0.1)',
        // },
        // {
        //   label: 'Expenses',
        //   data: [23.5, 37.54, 0, 0, 152.12, 0, 825, 51.05, 0, 0],
        //   borderColor: '#ff6384',
        //   backgroundColor: 'rgba(255, 99, 132, 0.1)',
        // },
      ],
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return '$' + value;
              },
            },
          },
        },
      },
    };

    const chart = new Chart(canvasRef.current, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Balance;
