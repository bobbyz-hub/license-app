import React from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, Text, Image } from '@chakra-ui/react';

const tools = [
  {
    title: "Video Courses",
    description: "Engaging video lessons that simplify complex concepts and help you retain information.",
    image: "https://img.icons8.com/fluency/96/video.png",
  },
  {
    title: "Audio Lessons",
    description: "Learn on the go with audio lessons, perfect for commuting or multitasking.",
    image: "https://img.icons8.com/fluency/96/microphone.png",
  },
  {
    title: "Flash Cards",
    description: "Quickly memorize key terms and concepts with interactive flash cards.",
    image: "https://img.icons8.com/fluency/96/cards.png",
  },
  {
    title: "Mind Maps",
    description: "Visualize relationships between concepts to improve understanding and memory.",
    image: "https://img.icons8.com/fluency/96/mind-map.png",
  },
  {
    title: "Practice Quizzes",
    description: "Test your knowledge and track your progress with practice quizzes.",
    image: "https://img.icons8.com/fluency/96/test-passed.png",
  },
  {
    title: "Personal Coach",
    description: "Get one-on-one guidance from experienced instructors for extra support.",
    image: "https://img.icons8.com/fluency/96/teacher.png",
  },
];

const HowItWorks = () => {
  return (
    <Box id="how" py={20} bg="gray.50">
      <Container maxW="container.lg">
        <Heading mb={10} textAlign="center">Learning Tools You Can Use</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {tools.map((tool) => (
            <Box
              key={tool.title}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={6}
              textAlign="center"
            >
              <Image
                src={tool.image}
                alt={tool.title}
                mx="auto"
                mb={4}
                boxSize="80px"
              />
              <Heading size="md" mb={2}>{tool.title}</Heading>
              <Text fontSize="sm" color="gray.600">{tool.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
