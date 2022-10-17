import Link from "next/link";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillChatTextFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

type FormValues = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Center
      background={"white"}
      width={{ base: "100%", form: "50%" }}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Heading color={"#224957"} fontSize={{ base: "28px", form: "32px" }}>
        Welcome to chat app
      </Heading>
      <form
        style={{ height: "70%", width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Center
          width={"100%"}
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Center
            width={"100%"}
            height={"80%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <FormControl width={"85%"} isRequired>
              <FormLabel>
                <Text
                  display={"inline-block"}
                  marginRight={"5px"}
                  fontSize={"15px"}
                >
                  <MdEmail />
                </Text>
                <Text display={"inline-block"} fontSize={"18px"}>
                  Email
                </Text>
              </FormLabel>
              <Input
                {...register("email")}
                type={"email"}
                backgroundColor={"#ADDDD0"}
                placeholder={"Enter your email"}
              />
            </FormControl>
            <FormControl width={"85%"} isRequired>
              <FormLabel>
                <Text
                  display={"inline-block"}
                  marginRight={"5px"}
                  fontSize={"15px"}
                >
                  <BsFillChatTextFill />
                </Text>
                <Text display={"inline-block"} fontSize={"18px"}>
                  Username
                </Text>
              </FormLabel>
              <Input
                {...register("name")}
                type={"text"}
                backgroundColor={"#ADDDD0"}
                placeholder={"Enter your user name"}
              />
            </FormControl>
            <FormControl width={"85%"} isRequired>
              <FormLabel>
                <Text
                  display={"inline-block"}
                  marginRight={"5px"}
                  fontSize={"15px"}
                >
                  <RiLockPasswordFill />
                </Text>
                <Text display={"inline-block"} fontSize={"18px"}>
                  Password
                </Text>
              </FormLabel>
              <Input
                {...register("password")}
                type={"password"}
                backgroundColor={"#ADDDD0"}
                placeholder={"Enter your password"}
              />
            </FormControl>
            <FormControl width={"85%"} isRequired>
              <FormLabel>
                <Text
                  display={"inline-block"}
                  marginRight={"5px"}
                  fontSize={"15px"}
                >
                  <RiLockPasswordFill />
                </Text>
                <Text display={"inline-block"} fontSize={"18px"}>
                  Repeat Password
                </Text>
              </FormLabel>
              <Input
                {...register("repeatPassword")}
                type={"password"}
                backgroundColor={"#ADDDD0"}
                placeholder={"Enter your password again"}
              />
            </FormControl>
          </Center>
          <Button colorScheme={"teal"} type="submit">
            Create an account
          </Button>
        </Center>
      </form>
      <Center width={"55%"} justifyContent={"space-evenly"}>
        Already have an account{" "}
        <Link href={"/login"}>
          <Text color={"blue"} textDecorationLine={"underline"}>Log in</Text>
        </Link>
      </Center>
      <Center>
        <Button
          fontSize={"1rem"}
          colorScheme={"teal"}
          variant={"outline"}
          leftIcon={<FcGoogle />}
        >
          Sign up with google
         </Button>
      </Center>
    </Center>
  );
};

export default RegistrationForm;
