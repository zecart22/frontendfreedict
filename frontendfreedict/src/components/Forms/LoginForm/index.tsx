import {
  Flex,
  VStack,
  Text,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";

import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalFail } from "../../modalFailLogin";

interface LoginDataProps {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup.string().required("Senha obrigatória"),
});

export const LoginForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  /*  Auth de login */
  /* const { signIn } = useAuth(); */

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginDataProps>({
    resolver: yupResolver(loginSchema),
  });

  /*  função de login */

  /* const handleLogin = (data: LoginDataProps) => {
    signIn(data)
      .then((response) => {
        console.log(response);
        toast({
          position: "top",
          title: "Yes...!",
          description: "login realizado com sucesso",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        onOpen();
        setTimeout(onClose, 2000);
      });
  }; */

  return (
    <>
      <ModalFail isOpen={isOpen} onClose={onClose} />
      <Flex
        _hover={{
          transform: "translateY(-2px)",
        }}
        transition="border 0.2s, ease 0s, transform 0.2s"
        w={["230px", "450px"]}
        h={"550px"}
        border={"1px"}
        borderColor={"theme.grafit"}
        boxShadow={"dark-lg"}
        bg={"theme.white"}
        justifyContent={"center"}
        color={"theme.grafit"}
      >
        <VStack spacing={10}>
          <Text fontSize={30} mt={5}>
            Login
          </Text>

          <Input
            placeholder={"adicione seu email"}
            {...register("email")}
            label="Email"
            error={errors.email}
          />

          <Input
            placeholder={"coloque sua senha"}
            type="password"
            {...register("password")}
            label="Senha"
            error={errors.password}
          />

          <Button
            w={["200px", "320px"]}
            color={"theme.white"}
            bg={"theme.green"}
            fontWeight={"bold"}
            h={"50px"}
            border={"2px"}
            borderColor={"theme.grafit"}
            boxShadow={"md"}
            type={"submit"}
            _hover={{ color: "white", bg: "gray.200" }}
            /*  onClick={handleSubmit(handleLogin as any)} */
          >
            Entrar
          </Button>

          <VStack>
            <Text>Novo por aqui ?</Text>
            <Link to={"/signup"}>
              <Text fontSize={15} color={"theme.red"}>
                Clique aqui para se cadastrar
              </Text>
            </Link>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};
