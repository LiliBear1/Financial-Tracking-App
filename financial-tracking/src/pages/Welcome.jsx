import SignUpButton from './SignUpButton';
import DarkMode from './DarkMode';
import {
    Flex, Box, Heading, Text, Image,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid, Card, CardBody
} from "@chakra-ui/react";

function Welcome() {
    return (
        <div>
        <Flex direction="column" justify='center'>
            <Box m={10} align='center'>
            <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
                <Text fontSize='xl' align="center" color="gray.500">
                    <p>Our mission is to empower you by providing a comprehensive and intuitive solution for tracking your daily expenses and monthly income.</p>
                </Text>
                <Accordion defaultIndex={[1]} allowMultiple p={2}>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading mb={2} as='h3' size='lg' color='#2c66ff'>How does it work?</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel color="gray.500">
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card borderRadius='3xl'>
    <CardBody>
    <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
      <Text>Keep track of your income, expenses, and savings all in one place</Text>
    </CardBody>
  </Card>

  <Card>
  <CardBody>
    <Image src="piggy.jpg" alt="catergory" h='30vh'/>
      <Text>Categorise your entries to easily see where your money is going</Text>
    </CardBody>
  </Card>

  <Card>
   <CardBody>
    <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
      <Text>See a summary of your finances at a glance, including your total income, expenses, and savings</Text>
    </CardBody>
  </Card>

  <Card>
   <CardBody>
    <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
      <Text>Visualize your spending and saving habits with easy-to-read charts and graphs</Text>
    </CardBody>
  </Card>

  <Card>
   <CardBody>
    <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
      <Text>Save your financial data locally, so you can access it whenever you need it</Text>
    </CardBody>
  </Card>

  <Card>
   <CardBody>
    <Image src="piggy.jpg" alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
      <Text>With this app, you'll be able to take control of your finances and make better decisions about your money.</Text>
    </CardBody>
  </Card>

</SimpleGrid>
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