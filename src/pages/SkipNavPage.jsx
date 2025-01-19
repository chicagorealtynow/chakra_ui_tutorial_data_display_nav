import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      SkipNavLink,
      SkipNavContent,
      Code,
    } from '@chakra-ui/react';

    function SkipNavPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <SkipNavLink>Skip to content</SkipNavLink>
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Skip Navigation Example
            </Heading>
            <Text mb={4}>
              Skip navigation links are used to improve accessibility by allowing
              users to skip over navigation menus.
            </Text>
            <SkipNavContent>
              <Text>
                This is the main content of the page. Use the "Skip to content"
                link to jump here.
              </Text>
            </SkipNavContent>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <SkipNavLink>Skip to content</SkipNavLink>
    <SkipNavContent>
      <Text>
        This is the main content of the page.
      </Text>
    </SkipNavContent>
              `}
            </Code>
            <Text>
              This code shows how to use the SkipNavLink and SkipNavContent
              components to create a skip navigation link.
            </Text>
          </Box>
        </Container>
      );
    }

    export default SkipNavPage;
