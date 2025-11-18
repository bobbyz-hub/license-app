import React from 'react';
import { Box, Heading, Text, Button, VStack, Container } from '@chakra-ui/react';

const Hero = ({ onGetStarted }) => {
  return (
    <Box
      id="home"
      w="100%"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      py={{ base: 20, md: 32 }}
    >
      <Container maxW="container.lg" textAlign="center">
        <VStack spacing={6}>
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            Get Your Online License in our school
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Apply easily, pay securely, and learn with us
          </Text>
          <Button
            size="lg"
            bg="gold"
            variant="solid"
            onClick={onGetStarted}
          >
            Get Started Today
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
