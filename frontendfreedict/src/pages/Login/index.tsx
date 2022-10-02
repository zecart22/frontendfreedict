import { Center, Image, VStack } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { LoginForm } from "../../components/Forms/LoginForm";

export const Login = () => {
  return (
    <>
      <Center mt={20}>
        <VStack spacing={5}>
          <Image src={logo} alt={"logo"} />
          <LoginForm />
        </VStack>
      </Center>
    </>
  );
};
