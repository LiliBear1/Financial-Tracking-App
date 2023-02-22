import React from 'react';
import Income from './Income';
import Expenses from './Expenses';
import Savings from './Savings';
import Balance from './Balance';
import Doughnut from './Doughnut';
import IncomeTotal from './IncomeTotal';
import ExpensesTotal from './ExpensesTotal';
import Welcome from './Welcome';
import Contact from './Contact';
import { Flex, ChakraProvider, Spacer } from '@chakra-ui/react';

function Home() {
    return (
        <div>
            <ChakraProvider>
                <Welcome/>

                <Flex borderWidth="1px" borderRadius="xl" boxShadow='lg'>
                    <Spacer />
                    <Income />
                    <Spacer />
                    <Expenses />
                    <Spacer />
                </Flex>

                <Savings />

                <Flex borderWidth="1px" borderRadius="xl" boxShadow='lg'>
                    <IncomeTotal />
                    <ExpensesTotal />
                </Flex>
                
                <Doughnut />
                <Balance />
                <Contact />
                </ChakraProvider>
        </div>
    )
}
export default Home