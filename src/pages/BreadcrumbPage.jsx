import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      Breadcrumb,
      BreadcrumbItem,
      BreadcrumbLink,
      Code,
    } from '@chakra-ui/react';
    import { Link } from 'react-router-dom';

    function BreadcrumbPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Breadcrumb Example
            </Heading>
            <Text mb={4}>
              Breadcrumbs are used to show the user's current location within a
              site.
            </Text>
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/breadcrumb">
                  Breadcrumb
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/breadcrumb">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
              `}
            </Code>
            <Text>
              This code shows how to use the Breadcrumb component to display the
              navigation path.
            </Text>
          </Box>
        </Container>
      );
    }

    export default BreadcrumbPage;
