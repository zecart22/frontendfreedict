import { Center, Image, VStack } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { SignupForm } from "../../components/Forms/SignUpForm";

export const Signup = () => {
  return (
    <>
      <Center mt={20}>
        <VStack spacing={5}>
          <Image src={logo} alt={"logo"} />
          <SignupForm />
        </VStack>
      </Center>
    </>
  );
};
