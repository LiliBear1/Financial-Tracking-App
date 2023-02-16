import React from 'react';
import Income from './Income';
import Expenses from './Expenses';
import Savings from './Savings';
import { Flex, ChakraProvider, Spacer } from '@chakra-ui/react';

function Home() {
    return (
        <div>
            
            <ChakraProvider>
                <p>Home world</p>
               
                <Flex borderWidth="1px" borderRadius="xl">
                    <Spacer />
                        <Income />
                    <Spacer />
                        <Expenses />
                    <Spacer />
                </Flex>
            
                <Savings />
            </ChakraProvider>
            
        </div>
    )
}
export default Home