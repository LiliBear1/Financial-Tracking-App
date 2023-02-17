import React from 'react';
import { Box } from '@chakra-ui/react';
import Chart from 'chart.js/auto';

const incomeData = {
  labels: ['Salary', 'Bonus'],
  datasets: [
    {
      label: 'Income',
      data: [2500, 1200],
      backgroundColor: ['#2ecc71', '#3498db'],
      borderWidth: 0,
    },
  ],
};

const expensesData = {
  labels: ['Transportation', 'Utilities', 'Food', 'Fun', 'Groceries', 'Health', 'Shopping'],
  datasets: [
    {
      label: 'Expenses',
      data: [161.55, 1817.06, 451.52, 441.50, 225.05, 43.98, 199.99],
      backgroundColor: [
        '#e74c3c',
        '#f1c40f',
        '#9b59b6',
        '#34495e',
        '#1abc9c',
        '#e67e22',
        '#7f8c8d',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

function Doughnut() {
  const incomeRef = React.useRef();
  const expensesRef = React.useRef();

  React.useEffect(() => {
    const incomeChart = new Chart(incomeRef.current, {
      type: 'doughnut',
      data: incomeData,
      options,
    });

    const expensesChart = new Chart(expensesRef.current, {
      type: 'doughnut',
      data: expensesData,
      options,
    });

    return () => {
      incomeChart.destroy();
      expensesChart.destroy();
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <p>hmm....donuts</p>
      {/* <canvas ref={incomeRef} />
      <canvas ref={expensesRef} /> */}
    </Box>
  );
}

export default Doughnut;
