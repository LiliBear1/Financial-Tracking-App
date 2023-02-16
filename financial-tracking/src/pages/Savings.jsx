import React from 'react'
import {
    Tab, Tabs, TabList, TabPanel, TabPanels,
    Stat, StatLabel, StatNumber, StatHelpText,
    Box, Table, Tr, Th, Td, Tbody, Thead, Thread, TableCaption, TableContainer, Tfoot
} from "@chakra-ui/react";
function Savings() {
    return (
        <div>
            <Tabs isFitted variant='enclosed' p={2} m={2} boxShadow='lg' borderWidth="1px" borderRadius="xl" borderColor="gray.200">
                <TabList mb='1em'>
                    {/* to grab incomeType in local storage */}
                    <Tab color="green.500">Income</Tab>
                    <Tab color="red.500">Expenses</Tab>
                </TabList>

                <TabPanels borderBottomWidth="1px" borderColor="gray.200">
                    {/* incomeType + amount in local storage */}
                    <TabPanel>
                    <TableContainer>
                            <Table variant='simple'>
                                
                                <Tbody>
                                    <Tr>
                                        <Td>Salary</Td>
                                        <Td>£2,500.00</Td>
                                        <Td>01 September 2023</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Bonus</Td>
                                        <Td>£1,200.00</Td>
                                        <Td>06 September 2023</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    {/* expenseType + amount in local storage */}
                    <TabPanel>
                    {/* <Box p={2} borderBottomWidth="1px" borderColor="gray.200">Transportation: £7.90</Box>
                    <Box p={2} borderBottomWidth="1px" borderColor="gray.200">Food: £8.70</Box>
                    <Box p={2} borderBottomWidth="1px" borderColor="gray.200">Fun: £35.00</Box>
                    <Box p={2} borderBottomWidth="1px" borderColor="gray.200">Transportation: £7.90</Box>
                    <Box p={2} borderBottomWidth="1px" borderColor="gray.200">Groceries: £22.37</Box> */}
                        <TableContainer>
                            <Table variant='simple'>
                                
                                <Tbody>
                                    <Tr>
                                        <Td>Transportation</Td>
                                        <Td>£7.90</Td>
                                        <Td>13 September 2023</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Food</Td>
                                        <Td>£13.00</Td>
                                        <Td>13 September 2023</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Fun</Td>
                                        <Td>£35.00</Td>
                                        <Td>13 September 2023</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Transportation</Td>
                                        <Td>£7.90</Td>
                                        <Td>13 September 2023</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Groceries</Td>
                                        <Td>£23.37</Td>
                                        <Td>13 September 2023</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </TabPanels>

                {/* Add js to calculate total balance on hand */}
                <Stat>
                    <StatLabel>Balance:</StatLabel>
                    <StatNumber>£0.00</StatNumber>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
            </Tabs>
        </div>
    )
}
export default Savings