import React from 'react';
    import { Link } from 'react-router-dom';
    import { Box, Heading, List, ListItem, Container } from '@chakra-ui/react';

    function HomePage() {
      return (
        <Container maxW="container.md">
          <Box p={4}>
            <Heading as="h1" mb={6}>
              Chakra UI Component Examples
            </Heading>
            <Heading as="h2" size="lg" mb={4}>
              Data Display
            </Heading>
            <List spacing={3} mb={6}>
              <ListItem>
                <Link to="/badge">Badge</Link>
              </ListItem>
              <ListItem>
                <Link to="/card">Card</Link>
              </ListItem>
              <ListItem>
                <Link to="/code">Code</Link>
              </ListItem>
              <ListItem>
                <Link to="/divider">Divider</Link>
              </ListItem>
              <ListItem>
                <Link to="/keyboard">Keyboard</Link>
              </ListItem>
              <ListItem>
                <Link to="/list">List</Link>
              </ListItem>
              <ListItem>
                <Link to="/statistics">Statistics</Link>
              </ListItem>
              <ListItem>
                <Link to="/table">Table</Link>
              </ListItem>
              <ListItem>
                <Link to="/tag">Tag</Link>
              </ListItem>
            </List>
            <Heading as="h2" size="lg" mb={4}>
              Navigation
            </Heading>
            <List spacing={3}>
              <ListItem>
                <Link to="/breadcrumb">Breadcrumb</Link>
              </ListItem>
              <ListItem>
                <Link to="/link">Link</Link>
              </ListItem>
              <ListItem>
                <Link to="/linkoverlay">Link Overlay</Link>
              </ListItem>
              <ListItem>
                <Link to="/skipnav">Skip Nav</Link>
              </ListItem>
              <ListItem>
                <Link to="/stepper">Stepper</Link>
              </ListItem>
            </List>
          </Box>
        </Container>
      );
    }

    export default HomePage;
