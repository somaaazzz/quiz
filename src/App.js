import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import Title from "./components/Title";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
        <Title></Title>
        <Layout></Layout>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
