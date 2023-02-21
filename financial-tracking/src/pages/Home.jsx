import React from 'react';
import Income from './Income';
import Expenses from './Expenses';
import Savings from './Savings';
import Balance from './Balance';
import Doughnut from './Doughnut';
import SignUpButton from './SignUpButton';
import IncomeTotal from './IncomeTotal';
import ExpensesTotal from './ExpensesTotal';
import { Flex, ChakraProvider, Spacer, Box, Heading, Text, Button, Divider, Stack } from '@chakra-ui/react';

function Home() {
    return (
        <div>

            <ChakraProvider>
                <Box maxW='60rem' pl={8} pt={4}>
                    <Heading mb={4} as='h1' size='2xl'>Am I Rich Yet? [Working Name] </Heading>
                    <Text fontSize='xl'>
                        <p> [Working Name] mission is to empower you by providing a comprehensive and intuitive solution for tracking your daily expenses and monthly income.</p>
                    </Text>
                    <Stack direction='row'  p={4}>
                        <Divider orientation='vertical' h='auto' w='1px' bg='gray.300' />
                        <Stack pl={4}>
                            <Heading mb={2} as='h3' size='lg'>How does it work?</Heading>
                            <Text fontSize='md'>
                                <li>Keep track of your income, expenses, and savings all in one place</li>
                                <li> Categorise your entries to easily see where your money is going</li>
                                <li>See a summary of your finances at a glance, including your total income, expenses, and savings</li>
                                <li>Visualize your spending and saving habits with easy-to-read charts and graphs</li>
                                <li>Save your financial data locally, so you can access it whenever you need it</li>
                                <li>With [Am I Rich Yet?], you'll be able to take control of your finances and make better decisions about your money.</li>
                                <li><strong>Start making smarter money decisions today!</strong></li>

                            </Text>
                        </Stack>
                    </Stack>
                    {/* <Button size='lg' colorScheme='green' mt='24px' id='signUpBtn'>
                        Sign up for free 
                    </Button> */}
                    <SignUpButton/>{/* This is a place where we could implement netlify forms and data collection? */}
                </Box>

                <Flex borderWidth="1px" borderRadius="xl">

                    <Spacer />
                    <Income />
                    <Spacer />
                    <Expenses />
                    <Spacer />
                </Flex>

                <Savings />

                <Flex borderWidth="1px" borderRadius="xl">
                <IncomeTotal />
                <ExpensesTotal />
                </Flex>
                <Balance />
                <Doughnut />
            </ChakraProvider>

        </div>
    )
}
export default Home