import React from 'react';
import { Box, Heading, VStack, Text, Container, SimpleGrid, Card, CardBody } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={6}>Welcome, John!</Heading>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg">Your license applications:</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Card>
            <CardBody>
              <Heading size="md">Application #1</Heading>
              <Text>Status: Pending</Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Heading size="md">Application #2</Heading>
              <Text>Status: Approved</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Dashboard;
