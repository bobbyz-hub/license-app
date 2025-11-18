import React from 'react';
import { Box, Container, Heading, VStack, Text, SimpleGrid, Avatar } from '@chakra-ui/react';

const testimonials = [
  {
    name: "Jane Daphne",
    role: "Insurance Agent",
    quote: "This platform helped me pass my exam on the first try! The study materials are excellent and easy to follow.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "John Smith",
    role: "Insurance Broker",
    quote: "I love how convenient and user-friendly the platform is. I could study anywhere and anytime.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Mary Johnson",
    role: "Insurance Advisor",
    quote: "Highly recommended! The content is clear, concise, and truly prepares you for the exam.",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
];

const Testimonials = () => {
  return (
    <Box id="testimonials" py={20} bg="gray.100">
      <Container maxW="container.lg">
        <Heading mb={10} textAlign="center">What Our Students Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((t) => (
            <Box key={t.name} p={6} bg="white" borderRadius="md" boxShadow="md">
              <VStack spacing={4}>
                <Avatar name={t.name} src={t.avatar} size="xl" />
                <Text fontSize="md" textAlign="center">"{t.quote}"</Text>
                <Text fontWeight="bold">{t.name}</Text>
                <Text fontSize="sm" color="gray.500">{t.role}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;
