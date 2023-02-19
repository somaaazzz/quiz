import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import Title from "./components/Title";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Question from "./components/Question";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
        <Title></Title>
        <Button></Button>
        <Question></Question>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
