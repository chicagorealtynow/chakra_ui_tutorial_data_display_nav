import React from 'react';
    import Navigation from '../components/Navigation';
    import {
      Box,
      Heading,
      Text,
      Container,
      Stepper,
      Step,
      StepIndicator,
      StepStatus,
      StepTitle,
      StepDescription,
      StepSeparator,
      Code,
    } from '@chakra-ui/react';

    function StepperPage() {
      return (
        <Container maxW="container.md">
          <Navigation />
          <Box p={4}>
            <Heading as="h1" mb={4}>
              Stepper Example
            </Heading>
            <Text mb={4}>
              Steppers are used to guide users through a multi-step process.
            </Text>
            <Stepper size="sm" mb={4}>
              <Step>
                <StepIndicator>
                  <StepStatus complete={true} active={false} />
                </StepIndicator>
                <Box flexShrink={0}>
                  <StepTitle>Step 1</StepTitle>
                  <StepDescription>Description for step 1</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
              <Step>
                <StepIndicator>
                  <StepStatus complete={false} active={true} />
                </StepIndicator>
                <Box flexShrink={0}>
                  <StepTitle>Step 2</StepTitle>
                  <StepDescription>Description for step 2</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
              <Step>
                <StepIndicator>
                  <StepStatus complete={false} active={false} />
                </StepIndicator>
                <Box flexShrink={0}>
                  <StepTitle>Step 3</StepTitle>
                  <StepDescription>Description for step 3</StepDescription>
                </Box>
              </Step>
            </Stepper>
            <Code p={2} display="block" whiteSpace="pre-wrap" mt={4}>
              {`
    <Stepper size="sm">
      <Step>
        <StepIndicator>
          <StepStatus complete={true} active={false} />
        </StepIndicator>
        <Box flexShrink={0}>
          <StepTitle>Step 1</StepTitle>
          <StepDescription>Description for step 1</StepDescription>
        </Box>
        <StepSeparator />
      </Step>
      <Step>
        <StepIndicator>
          <StepStatus complete={false} active={true} />
        </StepIndicator>
        <Box flexShrink={0}>
          <StepTitle>Step 2</StepTitle>
          <StepDescription>Description for step 2</StepDescription>
        </Box>
        <StepSeparator />
      </Step>
      <Step>
        <StepIndicator>
          <StepStatus complete={false} active={false} />
        </StepIndicator>
        <Box flexShrink={0}>
          <StepTitle>Step 3</StepTitle>
          <StepDescription>Description for step 3</StepDescription>
        </Box>
      </Step>
    </Stepper>
              `}
            </Code>
            <Text>
              This code shows how to use the Stepper component to display a
              multi-step process.
            </Text>
          </Box>
        </Container>
      );
    }

    export default StepperPage;
