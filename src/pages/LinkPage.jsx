import React from 'react';
    import Navigation from '../components/Navigation';
    import { Box, Heading, Text, Container, Link, Code } from '@chakra-ui/react';

    function LinkPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Link Example
            </Heading>
            <Text mb={4}>
              Links are used to navigate to other pages or resources.
            </Text>
            <Link href="https://chakra-ui.com" isExternal color="teal.500">
              Chakra UI Website
            </Link>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <Link href="https://chakra-ui.com" isExternal color="teal.500">
      Chakra UI Website
    </Link>
              `}
            </Code>
            <Text>
              This code shows how to use the Link component to navigate to an
              external website.
            </Text>
          </Box>
        </Container>
      );
    }

    export default LinkPage;
