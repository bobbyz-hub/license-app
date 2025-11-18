import React from 'react';
import { Box, Container, Text, VStack } from '@chakra-ui/react';

const Features = () => {
  return (
    <Box id="features" py={20} bg="gray.50">
      <Container maxW="container.lg">
        <VStack spacing={6} align="stretch">
          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" lineHeight="tall">
            We offer the most comprehensive online insurance school programs available anywhere. 
            We have built the most effective online training platform in existence all in a pursuit to assist you in passing your exam on your first attempt. 
            With our online insurance school, convenience, value and simplicity are just a mouse click away! 
            We specialize in providing you with the best insurance exam study material available, 
            which will ensure that you pass your exam on your first attempt and get your insurance license.
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" lineHeight="tall">
            Over the years we have seen massive amounts of research into adult learning modalities. 
            The term “learning modalities” refers to all the different ways in which people absorb, process, retain, and demonstrate what they know. 
            Much like the same shoe size doesn't fit everyone, neither does a single learning environment or instructional method. 
            Insurance license candidates come from different locales, cultures, life experiences and different educational backgrounds. 
            Different learning modalities have been recognized and integrated into our insurance license test prep course.  
            For instance, inductive Vs. deductive; global Vs. analytical; linear, intuitive, systematic, visual, auditory, and kinesthetic. We understand that everyone approaches learning differently.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features;
