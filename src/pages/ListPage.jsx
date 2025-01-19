import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      List,
      ListItem,
      ListIcon,
      Code,
    } from '@chakra-ui/react';
    import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

    function ListPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              List Example
            </Heading>
            <Text mb={4}>
              Lists are used to display a series of items.
            </Text>
            <List spacing={3} mb={4}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Item 1
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Item 2
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color="red.500" />
                Item 3
              </ListItem>
            </List>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Item 1
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Item 2
      </ListItem>
      <ListItem>
        <ListIcon as={CloseIcon} color="red.500" />
        Item 3
      </ListItem>
    </List>
              `}
            </Code>
            <Text>
              This code shows how to use lists with icons.
            </Text>
          </Box>
        </Container>
      );
    }

    export default ListPage;
