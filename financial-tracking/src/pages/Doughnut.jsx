import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Chart from "chart.js/auto";

function DoughnutChart() {
  const [incomeData, setIncomeData] = useState({ labels: [], datasets: [] });
  const [expenseData, setExpenseData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const incomeLabels = [...new Set(incomes.map((income) => income.incomeType))];
    const incomeValues = incomeLabels.map((label) => {
      const value = incomes
        .filter((income) => income.incomeType === label)
        .reduce((total, income) => total + parseFloat(income.incomeAmount), 0);
      return value.toFixed(2);
    });
    setIncomeData({
      labels: incomeLabels,
      datasets: [
        {
          label: "Income",
          data: incomeValues
        },
      ],
    });

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const expenseLabels = [...new Set(expenses.map((expense) => expense.expenseType))];
    const expenseValues = expenseLabels.map((label) => {
      const value = expenses
        .filter((expense) => expense.expenseType === label)
        .reduce((total, expense) => total + parseFloat(expense.expenseAmount), 0);
      return value.toFixed(2);
    });
    setExpenseData({
      labels: expenseLabels,
      datasets: [
        {
          label: "Expenses",
          data: expenseValues,
        },
      ],
    });
  }, []);

  useEffect(() => {
    const incomeCtx = document.getElementById("incomeChart").getContext("2d");
    const expenseCtx = document.getElementById("expenseChart").getContext("2d");

    const incomeChart = new Chart(incomeCtx, {
      type: "doughnut",
      data: incomeData,
      options: {
        cutout: '70%',
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
    
    const expenseChart = new Chart(expenseCtx, {
      type: "doughnut",
      data: expenseData,
      options: {
        cutout: '70%',
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      incomeChart.destroy();
      expenseChart.destroy();
    };
  }, [incomeData, expenseData]);

  return (
    <Box display="flex">
    <Box width="48%"  rounded="md" m={2} p={4} boxShadow='lg' borderWidth="1px" borderRadius="xl" borderColor="green.500" color='green.500'>
      <Heading size='lg' textAlign='center' mb={5}>Income Breakdown</Heading>
      <canvas id="incomeChart"></canvas>
      </Box>
      <Box width="48%" rounded="md" m={2} p={4} boxShadow='lg' borderWidth="1px" borderRadius="xl" borderColor="red.500" color='red.500'>
      <Heading size='lg' textAlign='center' mb={5}>Expenses Breakdown</Heading>
      <canvas id="expenseChart"></canvas>
    </Box>
    </Box>
  );
}

export default DoughnutChart;
