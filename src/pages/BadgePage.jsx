import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Badge,
      Box,
      Heading,
      Text,
      Container,
      Code,
      Stack,
    } from '@chakra-ui/react';

    function BadgePage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Badge Example
            </Heading>
            <Text mb={4}>
              Badges are used to highlight the status of an item or to show a
              count.
            </Text>
            <Stack direction="row" spacing={4} mb={4}>
              <Badge colorScheme="green">Success</Badge>
              <Badge colorScheme="red">Error</Badge>
              <Badge colorScheme="yellow">Warning</Badge>
              <Badge colorScheme="blue">Info</Badge>
            </Stack>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <Badge colorScheme="green">Success</Badge>
    <Badge colorScheme="red">Error</Badge>
    <Badge colorScheme="yellow">Warning</Badge>
    <Badge colorScheme="blue">Info</Badge>
              `}
            </Code>
            <Text>
              This code shows how to use different color schemes for badges.
            </Text>
          </Box>
        </Container>
      );
    }

    export default BadgePage;
