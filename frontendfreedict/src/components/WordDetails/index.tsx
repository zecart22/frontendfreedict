import {
  Center,
  VStack,
  Text,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Button,
} from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";

export const WordDetails = () => {
  return (
    <VStack spacing={5} textAlign={"left"} alignItems={"flex-start"}>
      <Center
        h="150px"
        w={["230px", "280px"]}
        bg={"theme.pink"}
        border={"2px"}
        borderColor={"theme.black"}
      >
        <VStack>
          <Text>{"Hello"}</Text>
          <Text>{"həˈloʊ"}</Text>
        </VStack>
      </Center>
      <HStack>
        <FiPlay size={40} />
        <Slider
          aria-label="slider-ex-6"
          w={"230px"}
          defaultValue={0}
          min={0}
          max={300}
          step={30}
        >
          <SliderTrack h={"10px"}>
            <SliderFilledTrack h={"10px"} bg={"#99DDFF"} />
          </SliderTrack>
        </Slider>
      </HStack>
      <Text fontSize={30} fontWeight={"bold"}>
        Meanings
      </Text>
      <Text fontSize={15}>Verb - "Hello!" or an equivalent greeting.</Text>
      <HStack>
        <Button
          children={"Voltar"}
          bg={"theme.white"}
          border={"1px"}
          borderRadius={"0px"}
          borderColor={"theme.black"}
          color={"theme.black"}
          w={"125px"}
        />
        <Button
          children={"Próximo"}
          borderRadius={"0px"}
          bg={"theme.white"}
          border={"1px"}
          borderColor={"theme.black"}
          color={"theme.black"}
          w={"125px"}
        />
      </HStack>
    </VStack>
  );
};
