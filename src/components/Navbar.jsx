import React from 'react';
import { Box, Flex, HStack, Link, Button, useColorModeValue } from '@chakra-ui/react';

const Navbar = ({ onSignup }) => {
  return (
    <Box
      as="nav"
      w="100%"
      px={8}
      py={4}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Box fontWeight="bold" fontSize="xl">GetTheLicense</Box>
        <HStack spacing={8}>
          <Link href="#home">Home</Link>
          <Link href="#features">Available Courses</Link>
          <Link href="#how">Learning Tools</Link>
          <Link href="#pricing">Contact</Link>
          <Button colorScheme="teal" onClick={onSignup}>Sign Up</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
