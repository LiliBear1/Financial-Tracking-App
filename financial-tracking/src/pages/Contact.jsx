import { Box, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const developers = [
  {
    firstname: "Lili",
    lastname: "Begum",
    nickname1: "Strategy",
    nickname2: "Savant",
    avatar: "https://ca.slack-edge.com/T041KALGCKY-U046WHDH658-f8c2675cae30-512",
    github: "https://github.com/LiliBear1",
  },
  {
    firstname: "Shannon",
    lastname: "Yap",
    nickname1: "Frontend",
    nickname2: "Fanatic",
    avatar: "https://ca.slack-edge.com/T041KALGCKY-U046G1VBU5V-00ddeb69f108-512",
    github: "https://github.com/Damnsemicolon",
    },
    {
    firstname: "Najma",
    lastname: "Alibhai",
    nickname1: "Backend",
    nickname2: "Boss",
    avatar: "https://ca.slack-edge.com/T041KALGCKY-U046WF3CNJX-c5039635330d-512",
    github: "https://github.com/Najma53",
    },
    {
    firstname: "Yu",
    lastname: "Chen",
    nickname1: "Graphic",
    nickname2: "Guru",
    avatar: "https://ca.slack-edge.com/T041KALGCKY-U046WHKR1MY-52caf92968bc-512",
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
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.300"
            boxShadow="lg"
            m={3}
            p={3}
            maxW="sm"
            w="25%"
            textAlign="center"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Center mt={5} mb={5}>
              <Image
                src={developer.avatar}
                alt={`Avatar for ${developer.firstname}`}
                boxSize="150px"
                objectFit="cover"
                borderRadius="full"
              />
            </Center>
            <Heading mb={2} size="md">
             {developer.firstname}<br/>{developer.lastname}
            </Heading>
            <Text color='gray.500' mb={4}>{developer.nickname1}<br/>{developer.nickname2}</Text>
            <Link href={developer.github} isExternal color='gray.500'>
              GitHub
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Contact;
