import React from 'react';
import Income from './Income';
import Expenses from './Expenses';
import Savings from './Savings';
import Balance from './Balance';
import Doughnut from './Doughnut';
import SignUpButton from './SignUpButton';
import IncomeTotal from './IncomeTotal';
import ExpensesTotal from './ExpensesTotal';
import DarkMode from './DarkMode';
import Welcome from './Welcome';
import { Flex, ChakraProvider, Spacer, Box, Heading, Text, Button, Divider, Stack, 
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
 } from '@chakra-ui/react';

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
                </ChakraProvider>

        </div>
    )
}
export default Home

// comment test