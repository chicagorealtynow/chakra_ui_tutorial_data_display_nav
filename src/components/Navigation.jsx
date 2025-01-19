import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button, Flex, Spacer } from '@chakra-ui/react';

    function Navigation() {
      return (
        <Flex p={4} align="center" bg="gray.100">
          <Link to="/">
            <Button colorScheme="teal" mr={4}>Home</Button>
          </Link>
          <Spacer />
        </Flex>
      );
    }

    export default Navigation;
