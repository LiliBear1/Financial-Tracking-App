import { useColorMode, Button } from '@chakra-ui/react';

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button  size='lg' m={2} mt='24px' onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

export default DarkMode;
