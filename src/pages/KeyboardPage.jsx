import React from 'react';
    import Navigation from '../components/Navigation';
    import { Box, Heading, Text, Container, Kbd } from '@chakra-ui/react';

    function KeyboardPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Keyboard Example
            </Heading>
            <Text mb={4}>
              The Kbd component is used to display keyboard input.
            </Text>
            <Text mb={2}>
              Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
            </Text>
            <Text mb={2}>
              Press <Kbd>Enter</Kbd> to submit.
            </Text>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <Text mb={2}>
      Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
    </Text>
    <Text mb={2}>
      Press <Kbd>Enter</Kbd> to submit.
    </Text>
              `}
            </Code>
            <Text>
              This code shows how to use the Kbd component to display keyboard
              shortcuts.
            </Text>
          </Box>
        </Container>
      );
    }

    export default KeyboardPage;
