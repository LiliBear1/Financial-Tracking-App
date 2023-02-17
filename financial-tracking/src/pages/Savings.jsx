import React from 'react'
import {
    Tab, Tabs, TabList, TabPanel, TabPanels,
    Stat, StatLabel, StatNumber, StatHelpText,
    Table, Tr, Td, Tbody, TableContainer
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
                                    {/* Line 1 */}
                                    <Tr>
                                        <Td width="33%">Salary</Td>
                                        <Td width="33%">£2,500.00</Td>
                                        <Td width="33%">01 February 2023</Td>
                                    </Tr>
                                    {/* Line 2 */}
                                    <Tr>
                                        <Td width="33%">Bonus</Td>
                                        <Td width="33%">£1,200.00</Td>
                                        <Td width="33%">06 February 2023</Td>
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
                                     {/* Line 1 */}
                                    <Tr>
                                        <Td width="33%">Transportation</Td>
                                        <Td width="33%">£7.90</Td>
                                        <Td width="33%">13 February 2023</Td>
                                    </Tr>
                                    {/* Line 2 */}
                                    <Tr>
                                        <Td width="33%">Food</Td>
                                        <Td width="33%">£13.00</Td>
                                        <Td width="33%">13 February 2023</Td>
                                    </Tr>
                                    {/* Line 3 */}
                                    <Tr>
                                        <Td width="33%">Fun</Td>
                                        <Td width="33%">£35.00</Td>
                                        <Td width="33%">13 February 2023</Td>
                                    </Tr>
                                    {/* Line 4 */}
                                    <Tr>
                                        <Td width="33%">Transportation</Td>
                                        <Td width="33%">£7.90</Td>
                                        <Td width="33%">13 February 2023</Td>
                                    </Tr>
                                    {/* Line 5 */}
                                    <Tr>
                                        <Td width="33%">Groceries</Td>
                                        <Td width="33%">£23.37</Td>
                                        <Td width="33%">13 February 2023</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </TabPanels>

                {/* Add js to calculate total balance on hand */}
                <Stat bgColor="green.100" p={2} m={2} borderRadius="xl">
                    <StatLabel>Balance:</StatLabel>
                    <StatNumber>£3,623.77</StatNumber>
                    <StatHelpText>Feb 01 - Feb 28</StatHelpText>
                </Stat>
            </Tabs>
        </div>
    )
}
export default Savings