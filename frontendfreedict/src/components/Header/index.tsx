import { Center, Flex, Image, keyframes } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";

export const Header = () => {
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
      </Flex>
    </>
  );
};
