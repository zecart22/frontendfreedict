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
import React, { useEffect, useState, useCallback } from "react";
import { ModalWordDetails } from "../modalWordDetails";

import { api } from "../../services";

export const WordTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataWords, setDataWords] = useState([]);

  const take = "28";
  const skip = "5";

  const token = localStorage.getItem("@AcessToken");
  const user_id = localStorage.getItem("@AcessUserID");

  const loadWords = useCallback(async () => {
    try {
      const response = await api.get(
        `/list/all/words?take=${take}&skip=${skip}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDataWords(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const loadFavoritesWords = useCallback(async () => {
    try {
      const response = await api.get(
        `/list/all/favorites/words?user_id=${user_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDataWords(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const loadHistoricalWords = useCallback(async () => {
    try {
      const response = await api.get(
        `/list/all/historical/words?user_id=${user_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDataWords(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadWords();
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("Sentry appears!", currentPage + 1);
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentry"));
    return () => intersectionObserver.disconnect();
  }, []);

  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");

  console.log(dataWords);
  console.log(user_id);
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
                onClick={loadWords}
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
                onClick={loadFavoritesWords}
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
                onClick={loadHistoricalWords}
              />
            </HStack>

            <Box
              border={"1px"}
              borderColor={"theme.black"}
              bg="theme.white"
              overflowY={"scroll"}
              h={"300px"}
            >
              <Wrap
                m={[5, 5, 5, 5]}
                spacing="0px"
                w={["200px", "280px", "380px", "480px"]}
                bg="theme.white"
              >
                {dataWords &&
                  dataWords.map((word) => (
                    <WrapItem>
                      <Center
                        h="40px"
                        w={["100px", "150px"]}
                        bg="theme.white"
                        color={"theme.black"}
                        border={"1px"}
                        borderColor={"gray.100"}
                        fontSize={"14px"}
                        padding={"8px"}
                      >
                        {word.word}
                      </Center>
                    </WrapItem>
                  ))}
                <Box id="sentry" />
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
                onClick={loadWords}
              />
              <Button
                children={"Favorites"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
                onClick={loadFavoritesWords}
              />
              <Button
                children={"History"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
                onClick={loadHistoricalWords}
              />
            </HStack>
            <Text fontWeight={"bold"} fontSize={20}>
              Word List
            </Text>
            <Box
              borderColor={"theme.black"}
              bg="theme.white"
              overflowY={"scroll"}
              h={"300px"}
            >
              <Wrap
                m={[5, 5, 5, 5]}
                spacing="0px"
                w={["200px", "280px", "380px", "480px"]}
                bg="theme.white"
              >
                {dataWords &&
                  dataWords.map((word) => (
                    <WrapItem>
                      <Center
                        h="40px"
                        w={["200px", "120px"]}
                        bg="theme.white"
                        color={"theme.black"}
                        border={"1px"}
                        borderColor={"gray.100"}
                      >
                        <ModalWordDetails word={word.word} />
                      </Center>
                    </WrapItem>
                  ))}
                <Box id="sentry" />
              </Wrap>
            </Box>
          </VStack>
        </>
      )}
    </>
  );
};
