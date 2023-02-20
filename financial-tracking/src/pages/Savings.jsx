import React, { useState, useEffect } from 'react';
import {
  Tab, Tabs, TabList, TabPanel, TabPanels,
  Stat, StatLabel,
  StatNumber, Table, Tr, Td, Tbody, TableContainer,
} from '@chakra-ui/react';

function Savings() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
    const incomesData = JSON.parse(localStorage.getItem('incomes')) || [];
    setIncomes(incomesData);
    const expensesData = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(expensesData);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
  }, []);

  useEffect(() => {
    const totalIncome = incomes.reduce(
      (total, income) => total + parseFloat(income.incomeAmount),
      0
    );
    const totalExpense = expenses.reduce(
      (total, expense) => total + parseFloat(expense.expenseAmount),
      0
    );
    const totalBalance = totalIncome - totalExpense;
    setBalance(totalBalance);
  }, [incomes, expenses]);

  return (
    <div>
      <Tabs
        isFitted
        variant='enclosed'
        p={2}
        m={2}
        boxShadow='lg'
        borderWidth='1px'
        borderRadius='xl'
        borderColor='gray.200'
      >
        <TabList mb='1em'>
          <Tab color='green.500'>Income</Tab>
          <Tab color='red.500'>Expenses</Tab>
        </TabList>

        <TabPanels borderBottomWidth='1px' borderColor='gray.200'>
          {/* incomeType + amount in local storage */}
          <TabPanel>
            <TableContainer>
              <Table variant='simple' color="green.500">
                <Tbody>
                  {incomes.map((income, index) => (
                    <Tr key={index}>
                      <Td width='33%'>{income.incomeType}</Td>
                      <Td width='33%'>£{income.incomeAmount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* expenseType + amount in local storage */}
          <TabPanel>
            <TableContainer>
              <Table variant='simple'>
                <Tbody color="red.500">
                  {expenses.map((expense, index) => (
                    <Tr key={index}>
                      <Td width='50%'>{expense.expenseType}</Td>
                      <Td width='50%'>£{expense.expenseAmount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>

        {/* Display total balance */}
        <Stat bgColor="green.100" p={2} m={2} borderRadius="xl">
          <StatLabel>Balance:</StatLabel>
          <StatNumber>£{balance.toFixed(2)}</StatNumber>
        </Stat>
      </Tabs>
    </div>
  );
}

export default Savings;
