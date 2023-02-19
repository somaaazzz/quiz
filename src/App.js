import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Title from "./components/Title";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Question from "./components/Question";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" align="center">
        <Title></Title>
        <Button></Button>
        <Question></Question>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
