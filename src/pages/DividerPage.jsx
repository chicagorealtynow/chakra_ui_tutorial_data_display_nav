import React from 'react';
    import Navigation from '../components/Navigation';
    import { Box, Heading, Text, Container, Divider } from '@chakra-ui/react';

    function DividerPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Divider Example
            </Heading>
            <Text mb={4}>
              Dividers are used to visually separate content.
            </Text>
            <Text mb={2}>Section 1</Text>
            <Divider mb={4} />
            <Text mb={2}>Section 2</Text>
            <Divider orientation="vertical" h="20px" mx={4} />
            <Text display="inline-block">Section 3</Text>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <Text mb={2}>Section 1</Text>
    <Divider mb={4} />
    <Text mb={2}>Section 2</Text>
    <Divider orientation="vertical" h="20px" mx={4} />
    <Text display="inline-block">Section 3</Text>
              `}
            </Code>
            <Text>
              This code shows how to use horizontal and vertical dividers.
            </Text>
          </Box>
        </Container>
      );
    }

    export default DividerPage;
