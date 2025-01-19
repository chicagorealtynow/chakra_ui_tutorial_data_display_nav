import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      Code,
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      Button,
    } from '@chakra-ui/react';

    function CardPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Card Example
            </Heading>
            <Text mb={4}>
              Cards are used to display content in a structured way.
            </Text>
            <Card maxW="md" mb={4}>
              <CardHeader>
                <Heading size="md">Card Title</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  This is the content of the card. It can contain any kind of
                  information.
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue">Action</Button>
              </CardFooter>
            </Card>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <Card maxW="md">
      <CardHeader>
        <Heading size="md">Card Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          This is the content of the card.
        </Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Action</Button>
      </CardFooter>
    </Card>
              `}
            </Code>
            <Text>
              This code shows a basic card with a header, body, and footer.
            </Text>
          </Box>
        </Container>
      );
    }

    export default CardPage;
