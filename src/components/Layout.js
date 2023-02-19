import Option from "./Option";
import Question from "./Question";
import { Box } from "@chakra-ui/react";
function Layout() {
  return (
    <Box display="flex" borderRadius="lg" bg="#DBD3D8">
      <Box>
        <Question question="this is mock question"></Question>
        <Option option1="option1" option2="option2" option3="option3" option4="option4"></Option>
      </Box>
    </Box>
  );
}
export default Layout;
