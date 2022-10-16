import { Center, Flex } from "@chakra-ui/react";
import ImageBox from "./ImageBox";
import RegistrationForm from "./RegistrationForm";

const RegistrationContainer: React.FC = () => {
  return (
    <Center width={"90%"} height={"90%"}>
      <Flex
        width={{ base: "500px", form: "900px" }}
        height={"90%"}
        borderRadius={"20px"}
        overflow={"hidden"}
        boxShadow={"-5px -5px 30px 5px red, 5px 5px 30px 5px blue"}
      >
        <ImageBox />
        <RegistrationForm />
      </Flex>
    </Center>
  );
};
export default RegistrationContainer;
