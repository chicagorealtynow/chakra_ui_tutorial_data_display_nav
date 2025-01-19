import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      LinkOverlay,
      LinkBox,
      Code,
    } from '@chakra-ui/react';

    function LinkOverlayPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Link Overlay Example
            </Heading>
            <Text mb={4}>
              Link overlays are used to make an entire area clickable.
            </Text>
            <LinkBox border="1px solid gray" p={4} mb={4}>
              <Heading size="md" mb={2}>
                Clickable Box
              </Heading>
              <Text>This is a clickable box.</Text>
              <LinkOverlay href="https://chakra-ui.com" isExternal>
                Click here
              </LinkOverlay>
            </LinkBox>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <LinkBox border="1px solid gray" p={4}>
      <Heading size="md" mb={2}>Clickable Box</Heading>
      <Text>This is a clickable box.</Text>
      <LinkOverlay href="https://chakra-ui.com" isExternal>Click here</LinkOverlay>
    </LinkBox>
              `}
            </Code>
            <Text>
              This code shows how to use the LinkOverlay component to make a box
              clickable.
            </Text>
          </Box>
        </Container>
      );
    }

    export default LinkOverlayPage;
