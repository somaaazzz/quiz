import { Stack, Radio, RadioGroup, Box, Text } from "@chakra-ui/react";
function Option({ option1, option2, option3, option4 }) {
  return (
    <RadioGroup>
      <Stack direction="column">
        <Box bg="#EFF1F3" borderRadius="6px">
          <Radio value="1" size="lg">
            <Text color="#423E28">{option1}</Text>
          </Radio>
        </Box>
        <Box bg="#EFF1F3" borderRadius="6px">
          <Radio value="2" size="lg">
          <Text color="#423E28">{option2}</Text>
          </Radio>
        </Box>
        <Box bg="#EFF1F3" borderRadius="6px">
          <Radio value="3" size="lg">
          <Text color="#423E28">{option3}</Text>
          </Radio>
        </Box>
        <Box bg="#EFF1F3" borderRadius="6px">
          <Radio value="4" size="lg">
          <Text color="#423E28">{option4}</Text>
          </Radio>
        </Box>
      </Stack>
    </RadioGroup>
  );
}
export default Option;
