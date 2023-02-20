import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onClose = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // perform sign up request with email and password
    console.log('Email:', email);
    const hiddenPassword = '*'.repeat(password.length);
    console.log('Password:', hiddenPassword);

    onClose();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button id="signUpBtn" size='lg' colorScheme='green' mt='24px' onClick={handleOpen}>
        Sign up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} isRequired />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm password</FormLabel>
                  <Input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} isRequired />
                </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} type="submit">
                Sign up
              </Button>
              <Button colorScheme='gray' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUpModal;
