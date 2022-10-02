import {
  Center,
  VStack,
  Text,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Flex,
  Table,
  Tr,
  Td,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

export const WordTable = () => {
  const arrayWords = [
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
    "Hello",
    "World",
    "Hello",
    "Perfect",
    "Hello",
    "World",
    "Wonderfull",
    "World",
  ];

  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");
  return (
    <>
      {isLargerThan1302 ? (
        <>
          <VStack spacing={0} alignItems={"normal"}>
            <HStack>
              <Box w={"25px"} />
              <Button
                children={"Word List"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                borderBottomColor={"theme.white"}
                color={"gray"}
                w={"125px"}
              />
              <Button
                children={"Favorites"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                borderBottomColor={"theme.white"}
                color={"gray"}
                w={"125px"}
              />
              <Button
                children={"History"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                borderBottomColor={"theme.white"}
                color={"gray"}
                w={"125px"}
              />
            </HStack>

            <Box border={"1px"} borderColor={"theme.black"} bg="theme.white">
              <Wrap
                m={[5, 5, 5, 5]}
                spacing="0px"
                w={["200px", "280px", "380px", "480px"]}
                bg="theme.white"
              >
                {arrayWords &&
                  arrayWords.map((word: string) => (
                    <WrapItem>
                      <Center
                        h="40px"
                        w={["100px", "120px"]}
                        bg="theme.white"
                        color={"theme.black"}
                        border={"1px"}
                        borderColor={"gray.300"}
                      >
                        {word}
                      </Center>
                    </WrapItem>
                  ))}
              </Wrap>
            </Box>
          </VStack>
        </>
      ) : (
        <>
          <VStack spacing={5} alignItems={"flex-start"} textAlign={"left"}>
            <HStack spacing={0}>
              <Button
                children={"Word List"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
              />
              <Button
                children={"Favorites"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
              />
              <Button
                children={"History"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
              />
            </HStack>
            <Text fontWeight={"bold"} fontSize={20}>
              Word List
            </Text>
            <Box borderColor={"theme.black"} bg="theme.white">
              <Wrap
                m={[5, 5, 5, 5]}
                spacing="0px"
                w={["200px", "280px", "380px", "480px"]}
                bg="theme.white"
              >
                {arrayWords &&
                  arrayWords.map((word: string) => (
                    <WrapItem>
                      <Center
                        h="40px"
                        w={["100px", "120px"]}
                        bg="theme.white"
                        color={"theme.black"}
                        border={"1px"}
                        borderColor={"gray.300"}
                      >
                        {word}
                      </Center>
                    </WrapItem>
                  ))}
              </Wrap>
            </Box>
          </VStack>
        </>
      )}
    </>
  );
};
