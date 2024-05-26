import React from "react";
import { Container, VStack, Box, Text, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const homeworkAssignments = [
  { id: 1, title: "Math Homework", description: "Complete exercises 1-20 on page 32." },
  { id: 2, title: "Science Project", description: "Prepare a presentation on the solar system." },
  { id: 3, title: "History Essay", description: "Write a 2-page essay on World War II." },
];

const Index = () => {
  const bgColor = useColorModeValue("black", "gray.800");
  const accentColor = useColorModeValue("gold", "yellow.400");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={accentColor}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" mb={4}>
          Homework List
        </Heading>
        {homeworkAssignments.map((homework) => (
          <Box key={homework.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="100%" bg="gray.700" color="white">
            <Heading fontSize="xl">{homework.title}</Heading>
            <Text mt={4}>{homework.description}</Text>
            <Button mt={4} rightIcon={<FaArrowRight />} colorScheme="yellow" variant="outline">
              Submit Homework
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
