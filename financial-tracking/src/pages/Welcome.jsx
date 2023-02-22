import SignUpButton from './SignUpButton';
import DarkMode from './DarkMode';
import {
    Flex, Box, Heading, Text, Image,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid, Card, CardBody
} from "@chakra-ui/react";

function Welcome() {
    return (
        <div>
        <Flex direction="column" >
            <Box ml={10} mr={10} mt={10} align='center' >
            <Image src="piggy.jpg" id='piggy' alt="Piggy Bank" h='30vh' objectFit='cover' borderRadius='xl'/>
                <Text fontSize='xl'  maxW='500px' p={5} align='justify'>
                    <p>Our mission is to empower you by providing a comprehensive and intuitive solution for tracking your daily expenses and monthly income.</p>
                </Text>
                <Accordion defaultIndex={[1]} allowMultiple p={1} maxW='500px'>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading color='blue' mb={2} as='h3' size='lg'>How does it work?</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel >
 <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mb='10px'>
  <Card borderRadius='3xl'>
    <CardBody>
    <Image src="rocket.png" alt="rocket" h='10vh'/>
      <Text>Keep track of your income, expenses, and savings all in one place</Text>
    </CardBody>
  </Card>

  <Card borderRadius='3xl'>
  <CardBody>
    <Image src="catergory.png" alt="catergory" h='10vh'/>
      <Text>Categorise your entries to easily see where your money is going</Text>
    </CardBody>
  </Card>

  <Card borderRadius='3xl'>
   <CardBody>
   <Image src="star.png" alt="star" h='10vh'/>
      <Text>See a summary of your finances at a glance, including your total income, expenses, and savings</Text>
    </CardBody>
  </Card>

  <Card borderRadius='3xl'>
   <CardBody>
   <Image src="charts.png" alt="charts" h='10vh'/>
      <Text>Visualize your spending and saving habits with easy-to-read charts and graphs</Text>
    </CardBody>
  </Card>

  <Card borderRadius='3xl'>
   <CardBody>
   <Image src="folder.png" alt="folder" h='10vh'/>
      <Text>Save your financial data locally, so you can access it whenever you need it</Text>
    </CardBody>
  </Card>

  <Card borderRadius='3xl'>
   <CardBody>
   <Image src="money.png" alt="money" h='10vh'/>
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
        <Flex justify='center' mb={10}>
            <SignUpButton />
            <DarkMode />
        </Flex>
                </div>
    );
}

export default Welcome;