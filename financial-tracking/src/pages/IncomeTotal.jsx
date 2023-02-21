import React, { useState, useEffect } from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

function IncomeTotal() {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const total = incomes.reduce((acc, income) => acc + parseFloat(income.incomeAmount), 0);
    setTotalIncome(total);
  }, []);

  return (
    <Stat align="center" bgColor="green.100" p={2} m={2} borderRadius="xl">
      <StatLabel>Total Income:</StatLabel>
      <StatNumber>£{totalIncome.toFixed(2)}</StatNumber>
    </Stat>
  );
}

export default IncomeTotal;
