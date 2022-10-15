import { VStack, Text, Button, useToast, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

interface SignUpDataProps {
  name: string;
  email: string;
  password: string;
  type: string;
  adress: string;
}

const signupSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup.string().required("Senha obrigatória"),
});

export const SignupForm = () => {
  const history = useHistory();
  const { singnUp } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpDataProps>({
    resolver: yupResolver(signupSchema),
  });

  const toast = useToast();
  const handleSignup = (data: SignUpDataProps) => {
    singnUp(data)
      .then((response) => {
        console.log(response);
        toast({
          position: "top",
          title: "Yes...!",
          description: "Cadastro feito com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Center
      _hover={{
        transform: "translateY(-2px)",
      }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      w={["230px", "450px"]}
      h={"600px"}
      border={"1px"}
      borderColor={"theme.grafit"}
      boxShadow={"dark-lg"}
      bg={"theme.white"}
      justifyContent={"center"}
      color={"theme.grafit"}
    >
      <VStack spacing={6}>
        <Text fontSize={30}>Cadastro</Text>

        <Input
          placeholder={"nome completo"}
          {...register("name")}
          label="Nome"
          error={errors.name}
          {...register("name")}
        />

        <Input
          placeholder={"adicione seu email"}
          {...register("email")}
          type={"email"}
          label="E-mail"
          error={errors.email}
        />

        <Input
          placeholder={"escolha uma senha forte"}
          type="password"
          {...register("password")}
          label="Senha"
          error={errors.password}
        />

        <Button
          w={["200px", "350px"]}
          color={"theme.white"}
          bg={"theme.green"}
          fontWeight={"bold"}
          h={"50px"}
          border={"2px"}
          borderColor={"theme.grafit"}
          boxShadow={"md"}
          type={"submit"}
          onClick={handleSubmit(handleSignup as any)}
        >
          Cadastrar
        </Button>

        <VStack>
          <Text>Já tem cadastro ?</Text>
          <Link to={"/"}>
            <Text fontSize={15} color={"theme.red"}>
              Clique aqui para logar
            </Text>
          </Link>
        </VStack>
      </VStack>
    </Center>
  );
};
