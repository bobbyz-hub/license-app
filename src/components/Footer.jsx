import React from 'react';
import { Box, Container, Text, HStack, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6}>
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <Text>© {new Date().getFullYear()} GetTheLicense. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
