import React from 'react';
    import Navigation from '../components/Navigation';
    import { Box, Heading, Text, Container, Tag, Code } from '@chakra-ui/react';

    function TagPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Tag Example
            </Heading>
            <Text mb={4}>
              Tags are used to categorize or label items.
            </Text>
            <Box mb={4}>
              <Tag mr={2} colorScheme="blue">
                Tag 1
              </Tag>
              <Tag mr={2} colorScheme="green">
                Tag 2
              </Tag>
              <Tag mr={2} colorScheme="red">
                Tag 3
              </Tag>
            </Box>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <Tag mr={2} colorScheme="blue">Tag 1</Tag>
    <Tag mr={2} colorScheme="green">Tag 2</Tag>
    <Tag mr={2} colorScheme="red">Tag 3</Tag>
              `}
            </Code>
            <Text>
              This code shows how to use the Tag component with different color
              schemes.
            </Text>
          </Box>
        </Container>
      );
    }

    export default TagPage;
