import Link from "next/link";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

import { CREATE_USER } from "../../mutations";
import { CHECK_DUPLICATE_EMAIL } from "../../queries";

interface FormValues {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}

interface UserData {
  email: string;
  name: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  /************* react hook *************/
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  /*********** react hook form *************/
  const { register, handleSubmit, watch, formState } = useForm<FormValues>();
  const watchPassword = watch("password");
  const watchRepeatPassword = watch("repeatPassword");
  const touchPassword = formState.touchedFields.password;
  const touchRepeatPassword = formState.touchedFields.repeatPassword;

  /*********** apollo client ************/
  const [checkDuplicateEmail, duplicateEmailOptions] = useLazyQuery<
    { checkDuplicateEmail: boolean },
    { email: string }
  >(CHECK_DUPLICATE_EMAIL, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  const [createUser] = useMutation<{ createUser: UserData }, UserData>(
    CREATE_USER,
    {
      errorPolicy: "all",
    }
  );

  /*************************** Event Handler *****************************/
  const onPasswordShowIconClick = () => {
    setShowPassword(!showPassword);
  };
  const onRepeatPasswordShowIconClick = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const onSubmit: SubmitHandler<FormValues> = async (
    { email, name, password },
    event
  ) => {
    event?.preventDefault();

    if (watchPassword != watchRepeatPassword) {
      return;
    }

    const result = await checkDuplicateEmail({
      variables: {
        email,
      },
    });

    if (result.data?.checkDuplicateEmail) {
      return;
    }
    await createUser({
      variables: {
        email,
        name,
        password,
      },
    });
  };

  return (
    <Center
      background={"white"}
      width={{ base: "100%", form: "50%" }}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Heading color={"#224957"} fontSize={{ base: "28px", form: "32px" }}>
        Welcome to NetworkNexus
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
            <FormControl
              width={"85%"}
              isRequired
              isInvalid={duplicateEmailOptions.data?.checkDuplicateEmail}
            >
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
              <FormErrorMessage>Email already exits</FormErrorMessage>
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
            <FormControl
              width={"85%"}
              isRequired
              isInvalid={touchPassword && watchPassword?.length < 6}
            >
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
              <Box position={"relative"} width={"100%"}>
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  backgroundColor={"#ADDDD0"}
                  placeholder={"Enter your password"}
                  width={"100%"}
                />
                <Text
                  fontSize={"20px"}
                  position={"absolute"}
                  top={"50%"}
                  left={"100%"}
                  transform={"translate(-160%, -50%)"}
                  cursor={"pointer"}
                  onClick={onPasswordShowIconClick}
                  zIndex={1}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </Text>
              </Box>

              <FormErrorMessage>
                password should be minimum 6 characters
              </FormErrorMessage>
            </FormControl>
            <FormControl
              width={"85%"}
              isRequired
              isInvalid={
                touchPassword &&
                touchRepeatPassword &&
                watchPassword != watchRepeatPassword
              }
            >
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
              <Box position={"relative"} width={"100%"}>
                <Input
                  {...register("repeatPassword")}
                  type={showRepeatPassword ? "text" : "password"}
                  backgroundColor={"#ADDDD0"}
                  placeholder={"Enter your password again"}
                  width={"100%"}
                />
                <Text
                  fontSize={"20px"}
                  position={"absolute"}
                  top={"50%"}
                  left={"100%"}
                  transform={"translate(-140%, -50%)"}
                  cursor={"pointer"}
                  onClick={onRepeatPasswordShowIconClick}
                  zIndex={1}
                >
                  {showRepeatPassword ? <BiShow /> : <BiHide />}
                </Text>
              </Box>

              <FormErrorMessage>Password do not match</FormErrorMessage>
            </FormControl>
          </Center>
          <Button colorScheme={"teal"} type="submit">
            Create an account
          </Button>
        </Center>
      </form>
      <Center width={"250px"} justifyContent={"space-evenly"}>
        <Text whiteSpace={"nowrap"}>Already have an account?</Text>
        <Link href={"/login"}>
          <Text
            color={"blue"}
            textDecorationLine={"underline"}
            whiteSpace={"nowrap"}
          >
            Log in
          </Text>
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
