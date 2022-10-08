import {
  Center,
  VStack,
  Text,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Box,
  useMediaQuery,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { InfiniteScroll } from "../InfiniteScroll";
import { ModalWordDetails } from "../modalWordDetails";

import { api } from "../../services";

interface WordsResponse {
  id: string;
  word: string;
}

export const WordTable = () => {
  const [dataWords, setDataWords] = useState<WordsResponse[]>([]);
  const [dataHistoricalWords, setDataHistoricalWords] = useState<
    WordsResponse[]
  >([]);
  const [dataFavoriteWords, setDataFavoriteWords] = useState<WordsResponse[]>(
    []
  );
  const [take, setTake] = useState(27);
  const [showAllWords, setShowAllWords] = useState(true);
  const [showAllFavoriteWords, setShowAllFavoriteWords] = useState(false);
  const [showAllHistoricalWords, setShowAllHistoricalWords] = useState(false);
  const token = localStorage.getItem("@AcessToken");
  const user_id = localStorage.getItem("@AcessUserID");
  const skip = 50;
  const limit = take;

  const handleAllWords = () => {
    setShowAllWords(true);
    setShowAllFavoriteWords(false);
    setShowAllHistoricalWords(false);
  };

  const handleAllFavoriteWords = () => {
    setShowAllFavoriteWords(true);
    setShowAllWords(false);
    setShowAllHistoricalWords(false);
  };

  const handleAllHistoricalWords = () => {
    setShowAllHistoricalWords(true);
    setShowAllFavoriteWords(false);
    setShowAllWords(false);
  };

  const loadWords = useCallback(async (limit: number) => {
    try {
      const response = await api.get(
        `/list/all/words?take=${limit}&skip=${skip}`,
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
      setDataFavoriteWords(response.data);
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
      setDataHistoricalWords(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");

  useEffect(() => {
    loadWords(limit);
  }, [loadWords, take]);

  useEffect(() => {
    loadFavoritesWords();
  }, []);

  useEffect(() => {
    loadHistoricalWords();
  }, []);

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
                onClick={handleAllWords}
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
                onClick={handleAllFavoriteWords}
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
                onClick={handleAllHistoricalWords}
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
                {showAllWords ? (
                  <>
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
                    <InfiniteScroll
                      callback={() =>
                        setTake((previousTake: number) => previousTake + 200)
                      }
                    />
                  </>
                ) : showAllHistoricalWords ? (
                  <>
                    {dataHistoricalWords &&
                      dataHistoricalWords.map((word) => (
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
                  </>
                ) : showAllFavoriteWords ? (
                  <>
                    {dataFavoriteWords &&
                      dataFavoriteWords.map((word) => (
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
                  </>
                ) : (
                  <></>
                )}
              </Wrap>
              {showAllWords ? (
                <>
                  <HStack ml={200}>
                    <CircularProgress
                      size={30}
                      isIndeterminate
                      color="gray.300"
                    />
                    <Text>carregando...</Text>
                  </HStack>
                </>
              ) : (
                <></>
              )}
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
                onClick={handleAllWords}
              />
              <Button
                children={"Favorites"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
                onClick={handleAllFavoriteWords}
              />
              <Button
                children={"History"}
                borderRadius={"0px"}
                bg={"theme.white"}
                border={"1px"}
                borderColor={"theme.black"}
                color={"gray"}
                w={["80px", "125px"]}
                onClick={handleAllHistoricalWords}
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
                {showAllWords ? (
                  <>
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
                    <InfiniteScroll
                      callback={() =>
                        setTake((previousTake: number) => previousTake + 200)
                      }
                    />
                  </>
                ) : showAllHistoricalWords ? (
                  <>
                    {dataHistoricalWords &&
                      dataHistoricalWords.map((word) => (
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
                  </>
                ) : showAllFavoriteWords ? (
                  <>
                    {dataFavoriteWords &&
                      dataFavoriteWords.map((word) => (
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
                  </>
                ) : (
                  <></>
                )}
              </Wrap>
              {showAllWords ? (
                <>
                  <HStack>
                    <CircularProgress
                      size={30}
                      isIndeterminate
                      color="gray.300"
                    />
                    <Text>carregando...</Text>
                  </HStack>
                </>
              ) : (
                <></>
              )}
            </Box>
          </VStack>
        </>
      )}
    </>
  );
};
