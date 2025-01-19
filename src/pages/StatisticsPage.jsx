import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      Stat,
      StatLabel,
      StatNumber,
      StatHelpText,
      StatGroup,
      Code,
    } from '@chakra-ui/react';

    function StatisticsPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Statistics Example
            </Heading>
            <Text mb={4}>
              Statistics are used to display numerical data.
            </Text>
            <StatGroup mb={4}>
              <Stat>
                <StatLabel>Total Users</StatLabel>
                <StatNumber>1000</StatNumber>
                <StatHelpText>Increase by 10%</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Active Users</StatLabel>
                <StatNumber>750</StatNumber>
                <StatHelpText>Decrease by 5%</StatHelpText>
              </Stat>
            </StatGroup>
            <Code p={2} display="block" whiteSpace="pre-wrap" mb={4}>
              {`
    <StatGroup>
      <Stat>
        <StatLabel>Total Users</StatLabel>
        <StatNumber>1000</StatNumber>
        <StatHelpText>Increase by 10%</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Active Users</StatLabel>
        <StatNumber>750</StatNumber>
        <StatHelpText>Decrease by 5%</StatHelpText>
      </Stat>
    </StatGroup>
              `}
            </Code>
            <Text>
              This code shows how to use the Stat component to display
              statistics.
            </Text>
          </Box>
        </Container>
      );
    }

    export default StatisticsPage;
