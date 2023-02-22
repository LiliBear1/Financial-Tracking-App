import React, { useState, useEffect } from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

function ExpensesTotal() {
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.expenseAmount), 0);
    setTotalExpense(total);
  }, []);

  return (
    <Stat align="center" bgColor="red.400" p={2} m={2} borderRadius="xl">
      <StatLabel>Total Expenses:</StatLabel>
      <StatNumber>£{totalExpense.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</StatNumber>
    </Stat>
  );
}

export default ExpensesTotal;