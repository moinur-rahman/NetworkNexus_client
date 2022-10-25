import { Center } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import RegistrationContainer from "../components/RegistrationPage/RegistrationContainer";

const Registration: NextPage = () => {
  return (
    <Center
      background={"url('/images/background.jpg')"}
      backgroundPosition={"center"}
      backgroundSize={"contain"}
      width={"100vw"}
      height={"100vh"}
    >
      <Head>
        <title>Registration</title>
      </Head>
      <RegistrationContainer />
    </Center>
  );
};

export default Registration;
