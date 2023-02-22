import { Box, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import lili from '../images/lili.jfif';
import shannon from '../images/shannon.jfif';
const developers = [
  {
    firstname: "Lili",
    lastname: "Begum",
    nickname1: "Strategy",
    nickname2: "Savant",
    avatar: "lili",
    github: "https://github.com/LiliBear1",
  },
  {
    firstname: "Shannon",
    lastname: "Yap",
    nickname1: "Frontend",
    nickname2: "Fanatic",
    avatar: "https://via.placeholder.com/150",
    github: "https://github.com/Damnsemicolon",
    },
    {
    firstname: "Najma",
    lastname: "Alibhai",
    nickname1: "Backend",
    nickname2: "Boss",
    avatar: "https://via.placeholder.com/150",
    github: "https://github.com/Najma53",
    },
    {
    firstname: "Yu",
    lastname: "Chen",
    nickname1: "Graphic",
    nickname2: "Guru",
    avatar: "https://via.placeholder.com/150",
    github: "https://github.com/Cherryyeer",
    },
];


function Contact() {
  return (
    <Box p={10}>
      <Heading mb={5} textAlign="center">Meet the Penny Pinchers</Heading>
      <Flex direction='row' justifyContent="center">
        {developers.map((developer) => (
          <Box
            key={developer.name}
            bg="white"
            borderRadius="xl"
            boxShadow="lg"
            m={3}
            p={3}
            maxW="sm"
            w="25%"
            textAlign="center"
          >
            <Center mt={5} mb={5}>
              <Image
                src={developer.avatar}
                alt={`Avatar for ${developer.name}`}
                boxSize="150px"
                objectFit="cover"
                borderRadius="full"
              />
            </Center>
            <Heading mb={2} size="md">
             {developer.firstname}<br/>{developer.lastname}
            </Heading>
            <Text mb={4}>{developer.nickname1}<br/>{developer.nickname2}</Text>
            <Link href={developer.github} isExternal>
              GitHub
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Contact;
