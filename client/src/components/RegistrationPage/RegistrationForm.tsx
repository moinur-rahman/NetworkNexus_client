import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import InputBox from "./InputBox";

const RegistrationForm: React.FC = () => {
  return (
    <Center
      background={"white"}
      width={"50%"}
      height={"100%"}
      flexDirection={"column"}
    >
      <Heading color={"#224957"}>Welcome to chat app</Heading>
      <InputBox
        labelName={"Email"}
        inputName={"email"}
        inputType={"email"}
        inputPlaceHolder={"Enter your email address"}
      />
      <InputBox
        labelName={"User Name"}
        inputName={"name"}
        inputType={"text"}
        inputPlaceHolder={"Enter your name"}
      />
      <InputBox
        labelName={"Password"}
        inputName={"password"}
        inputType={"password"}
        inputPlaceHolder={"Enter your password"}
      />
      <InputBox
        labelName={"Repeat Password"}
        inputName={"repeatPassword"}
        inputType={"password"}
        inputPlaceHolder={"Enter your password again"}
      />
    </Center>
  );
};

export default RegistrationForm;
