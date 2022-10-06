import { Center, Flex, Image, keyframes, Text, VStack } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";

export const Header = () => {
  const { signOut } = useAuth();

  const Appear = keyframes`
  from {opacity: 0;}
  to {transform: translateX(1px)}
  `;

  return (
    <>
      <Flex
        h="105px"
        flexDirection="row"
        justifyContent="space-between"
        px="5"
        py="1"
        bg={"theme.blue"}
        border={"2px"}
        borderColor={"#1BA1E2"}
        position="relative"
        width="100%"
        zIndex="100"
      >
        <Image src={logo} alt={"logo"} animation={`${Appear} 2s`} />
        <VStack mt={5} mr={5} as="button" onClick={signOut}>
          <BiLogOut size={30} color={"white"} />
          <Text fontWeight={"bold"} color={"white"}>
            Sair
          </Text>
        </VStack>
      </Flex>
    </>
  );
};
