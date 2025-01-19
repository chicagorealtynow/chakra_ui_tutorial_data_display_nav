import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      Table,
      Thead,
      Tbody,
      Tr,
      Th,
      Td,
      Code,
    } from '@chakra-ui/react';

    function TablePage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Table Example
            </Heading>
            <Text mb={4}>
              Tables are used to display data in a structured way.
            </Text>
            <Table variant="simple" mb={4}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>City</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>John Doe</Td>
                  <Td>30</Td>
                  <Td>New York</Td>
                </Tr>
                <Tr>
                  <Td>Jane Doe</Td>
                  <Td>25</Td>
                  <Td>Los Angeles</Td>
                </Tr>
              </Tbody>
            </Table>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>City</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>John Doe</Td>
          <Td>30</Td>
          <Td>New York</Td>
        </Tr>
        <Tr>
          <Td>Jane Doe</Td>
          <Td>25</Td>
          <Td>Los Angeles</Td>
        </Tr>
      </Tbody>
    </Table>
              `}
            </Code>
            <Text>
              This code shows how to use the Table component to display data.
            </Text>
          </Box>
        </Container>
      );
    }

    export default TablePage;
