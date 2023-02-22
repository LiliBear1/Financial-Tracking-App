import SignUpButton from './SignUpButton';
import DarkMode from './DarkMode';
import {
    Flex, Box, Heading, Text, Image,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from "@chakra-ui/react";

function Welcome() {
    return (
        <div>
        <Flex direction="column" justify='center'>
            <Box m={10} align='center'>
            <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
                <Text fontSize='xl' align="center">
                    <p>Our mission is to empower you by providing a comprehensive and intuitive solution for tracking your daily expenses and monthly income.</p>
                </Text>
                <Accordion defaultIndex={[1]} allowMultiple p={2}>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading mb={2} as='h3' size='lg'>How does it work?</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel >
                            <li>Keep track of your income, expenses, and savings all in one place</li>
                            <li> Categorise your entries to easily see where your money is going</li>
                            <li>See a summary of your finances at a glance, including your total income, expenses, and savings</li>
                            <li>Visualize your spending and saving habits with easy-to-read charts and graphs</li>
                            <li>Save your financial data locally, so you can access it whenever you need it</li>
                            <li>With this app, you'll be able to take control of your finances and make better decisions about your money.</li>
                            <li><strong>Start making smarter money decisions today!</strong></li>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </Box>
        </Flex>
        <Flex justify='center'>
            <SignUpButton />
            <DarkMode />
        </Flex>
                </div>
    );
}

export default Welcome;