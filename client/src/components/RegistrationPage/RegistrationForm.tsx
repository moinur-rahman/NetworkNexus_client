import { Button, Center, Heading } from "@chakra-ui/react";
import InputBox from "./InputBox";

const RegistrationForm: React.FC = () => {
  return (
    <Center
      background={"white"}
      width={{base:"100%",md:"50%"}}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Heading color={"#224957"} fontSize={{md:"1.8rem",lg:"2.2rem"}}>Welcome to chat app</Heading>
      <Center
        flexDirection={"column"}
        width={"90%"}
        height={"55%"}
        justifyContent={"space-between"}
      >
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
      <Button colorScheme={"green"}>Create an account</Button>
    </Center>
  );
};

export default RegistrationForm;
