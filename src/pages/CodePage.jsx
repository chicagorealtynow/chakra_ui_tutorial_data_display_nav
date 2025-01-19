import React from 'react';
    import Navigation from '../components/Navigation';
    import { Box, Heading, Text, Container, Code } from '@chakra-ui/react';

    function CodePage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Code Example
            </Heading>
            <Text mb={4}>
              The Code component is used to display inline code snippets or
              blocks of code.
            </Text>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    function helloWorld() {
      console.log("Hello, World!");
    }
              `}
            </Code>
            <Code p={2} colorScheme="yellow" mb={4}>
              {'const myVariable = "example";'}
            </Code>
            <Text>
              The first code block shows a multiline code snippet, and the second
              shows an inline code snippet with a yellow color scheme.
            </Text>
          </Box>
        </Container>
      );
    }

    export default CodePage;
