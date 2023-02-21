import React, { useState, useEffect } from 'react';
import {
  Tab, Tabs, TabList, TabPanel, TabPanels,
  Stat, StatLabel,
  StatNumber, Table, Tr, Td, Tbody, TableContainer, Button
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
  }, );

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

  const handleDelete = (index, type) => {
    if (type === 'income') {
      const newIncomes = [...incomes];
      newIncomes.splice(index, 1);
      localStorage.setItem('incomes', JSON.stringify(newIncomes));
      setIncomes(newIncomes);
    } else if (type === 'expense') {
      const newExpenses = [...expenses];
      newExpenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      setExpenses(newExpenses);
    }
  };

  return (
    <div>
      <Tabs
        isFitted
        variant='enclosed'
        p={2}
        mt={2}
        mb={2}
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
              <Table variant='simple' color='green.500'>
                <Tbody>
                  {incomes.map((income, index) => (
                    <Tr key={index}>
                      <Td width='45%'>{income.incomeType}</Td>
                      <Td width='45%'>£{income.incomeAmount}</Td>
                      <Td width='10%'>
                        <Button
                          color='red.500'
                          variant='outline'
                          aria-label='delete'
                          
                          onClick={() => handleDelete(index, 'income')}
                        >Delete</Button>
                      </Td>
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
                      <Td width='10%'>
                        <Button
                          color='red.500'
                          variant='outline'
                          aria-label='delete'
                          
                          onClick={() => handleDelete(index, 'expense')}
                        >Delete</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>

        {/* Display total balance */}
        <Stat align="center" bgColor="gray.300" p={2} m={2} borderRadius="xl">
          <StatLabel>Balance:</StatLabel>
          <StatNumber>£{balance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</StatNumber>
        </Stat>
      </Tabs>
    </div>
  );
}

export default Savings;
