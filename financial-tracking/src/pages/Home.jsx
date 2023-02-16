import React from 'react';
import Income from './Income';
import Expenses from './Expenses';
import Savings from './Savings';
import { ChakraProvider } from '@chakra-ui/react';


function Home() {
    return (
        <div>
        <ChakraProvider>
            <p>Home world</p>
        <Income />
        <Expenses />
        <Savings />
        </ChakraProvider>
        </div>
    )
}
export default Home