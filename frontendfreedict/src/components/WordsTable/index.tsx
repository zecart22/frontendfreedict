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
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { InfiniteScroll } from "../InfiniteScroll";
import { ModalWordDetails } from "../modalWordDetails";
import { WordDetails } from "../WordDetails";

import { api, dictionaryapi } from "../../services";

interface WordsResponse {
  wordsData: any;
  favoriteWordId: any;
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
  const [wordId, setWordId] = useState("");
  const [favoriteWordId, setFavoriteWordId] = useState("");
  const [word, setWord] = useState("");
  const [wordDictApi, setWordDictApi] = useState([]);
  const token = localStorage.getItem("@AcessToken");
  const user_id = localStorage.getItem("@AcessUserID");

  const skip = 50;
  const limit = take;
  window.localStorage.setItem("@Word", word);

  /* All words */

  const handleAllWords = () => {
    setShowAllWords(true);
    setShowAllFavoriteWords(false);
    setShowAllHistoricalWords(false);
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

  useEffect(() => {
    loadWords(limit);
  }, [loadWords, take]);

  /* Favorites Words */

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

  const sendToFavoritesWords = useCallback(async (wId: string) => {
    try {
      const response = await api.post(
        `/send/word/favorite?word_id=${wId}&user_id=${user_id}`
      );
      console.log(response);
      loadFavoritesWords();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const removeFavoritesWord = useCallback(async (wId: string) => {
    try {
      const response = await api.delete(
        `/remove/word/favorite?favoriteWord_id=${wId}`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      loadFavoritesWords();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const clearFavoritesWords = useCallback(async () => {
    try {
      const response = await api.delete(`/clear/favorite`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      loadFavoritesWords();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const sendToFavoriteData = (word_id: string, word: string) => {
    sendToFavoritesWords(word_id);
  };

  const handleAllFavoriteWords = () => {
    setShowAllFavoriteWords(true);
    setShowAllWords(false);
    setShowAllHistoricalWords(false);
    loadFavoritesWords();
  };

  useEffect(() => {
    loadFavoritesWords();
  }, []);

  /* Historical Words */

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

  const sendToHistoricalWords = useCallback(async (wId: string) => {
    try {
      const response = await api.post(
        `/send/word/historical?word_id=${wId}&user_id=${user_id}`
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  const clearHistoricalWords = useCallback(async () => {
    try {
      const response = await api.delete(`/clear/historical`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      loadHistoricalWords();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const sendToHistocalData = (
    word_id: string,
    word_word: string,
    id: string
  ) => {
    sendToHistoricalWords(word_id);
    loadHistoricalWords();
    setWordId(word_id);
    setWord(word_word);
    setFavoriteWordId(id);
    loadWordsInformation(word_word);
  };

  const handleAllHistoricalWords = () => {
    setShowAllHistoricalWords(true);
    setShowAllFavoriteWords(false);
    setShowAllWords(false);
    loadHistoricalWords();
  };

  useEffect(() => {
    loadHistoricalWords();
  }, []);

  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");

  /*  previous and next word functions */

  const arrayWords = dataWords.map((word) => word.word);
  const arrayWordId = dataWords.map((word) => word.id);
  const arrayFavoriteWords = dataFavoriteWords.map(
    (word) => word.wordsData.word
  );
  const arrayFavoriteWordsId = dataFavoriteWords.map(
    (word) => word.favoriteWordId
  );

  const index = (element: any) => element === word;

  const findPosition = arrayWords.findIndex(index);
  const findPositionFavoriteWords = arrayFavoriteWords.findIndex(index);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nextWord = () => {
    const nextWord = arrayWords[findPosition + 1];
    const nextWordId = arrayWordId[findPosition + 1];
    setWord(nextWord);
    setWordId(nextWordId);
    loadWordsInformation(nextWord);
    onClose();
    onOpen();
  };

  const previousWord = () => {
    const previusWord = arrayWords[findPosition - 1];
    const previusWordId = arrayWordId[findPosition - 1];
    setWord(previusWord);
    setWordId(previusWordId);
    loadWordsInformation(previusWord);
    onClose();
    onOpen();
  };

  const nextFavoriteWord = () => {
    const nextWord = arrayFavoriteWords[findPositionFavoriteWords + 1];
    const nextWordId = arrayFavoriteWordsId[findPositionFavoriteWords + 1];
    setWord(nextWord);
    setFavoriteWordId(nextWordId);
    loadWordsInformation(nextWord);
    onOpen();
  };

  const previousFavoriteWord = () => {
    const previusWord = arrayFavoriteWords[findPositionFavoriteWords - 1];
    const previusWordId = arrayFavoriteWordsId[findPositionFavoriteWords - 1];
    setWord(previusWord);
    setFavoriteWordId(previusWordId);
    loadWordsInformation(previusWord);
    onOpen();
  };

  /* word request */

  const loadWordsInformation = useCallback(async (word: string) => {
    try {
      const response = await dictionaryapi.get(`/${word}`);
      console.log(response.data);

      setWordDictApi(response.data[0]);
    } catch (err) {
      console.log(err);
      setWordDictApi([]);
    }
  }, []);

  return (
    <>
      {isLargerThan1302 ? (
        <HStack spacing={10}>
          <WordDetails
            wordId={wordId}
            word={word}
            favoriteWordId={favoriteWordId}
            sendToFavoriteData={sendToFavoriteData}
            removeFavoritesWord={removeFavoritesWord}
            nextWord={nextWord}
            previousWord={previousWord}
            nextFavoriteWord={nextFavoriteWord}
            previousFavoriteWord={previousFavoriteWord}
            showAllFavoriteWords={showAllFavoriteWords}
            wordDictApi={wordDictApi}
          />
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
                          <VStack>
                            <Center
                              flexDirection={"column"}
                              as="button"
                              h="40px"
                              w={["100px", "150px"]}
                              bg="theme.white"
                              color={"theme.black"}
                              border={"1px"}
                              borderColor={"gray.100"}
                              fontSize={"14px"}
                              padding={"8px"}
                              _hover={{
                                borderColor: "black",
                              }}
                              onClick={() =>
                                sendToHistocalData(word.id, word.word, "")
                              }
                            >
                              {word.word}
                            </Center>
                          </VStack>
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
                            _hover={{
                              borderColor: "black",
                            }}
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
                            as="button"
                            h="40px"
                            w={["100px", "150px"]}
                            bg="theme.white"
                            color={"theme.black"}
                            border={"1px"}
                            borderColor={"gray.100"}
                            fontSize={"14px"}
                            padding={"8px"}
                            _hover={{
                              borderColor: "black",
                            }}
                            onClick={() =>
                              sendToHistocalData(
                                word.wordsData.id,
                                word.wordsData.word,
                                word.favoriteWordId
                              )
                            }
                          >
                            {word.wordsData.word}
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
            {showAllHistoricalWords ? (
              <>
                <Button
                  children={"Limpar Histórico"}
                  fontSize={"12px"}
                  borderRadius={"0px"}
                  bg={"theme.white"}
                  color={"gray"}
                  w={"125px"}
                  onClick={clearHistoricalWords}
                />
              </>
            ) : showAllFavoriteWords ? (
              <>
                <Button
                  children={"Limpar Favoritos"}
                  fontSize={"12px"}
                  borderRadius={"0px"}
                  bg={"theme.white"}
                  color={"gray"}
                  w={"125px"}
                  onClick={clearFavoritesWords}
                />
              </>
            ) : (
              <></>
            )}
          </VStack>
        </HStack>
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
                            as={"button"}
                            h="40px"
                            w={["200px", "120px"]}
                            bg="theme.white"
                            color={"theme.black"}
                            border={"1px"}
                            borderColor={"gray.100"}
                            onClick={() =>
                              sendToHistocalData(word.id, word.word, "")
                            }
                          >
                            <ModalWordDetails
                              word={word.word}
                              wordId={word.id}
                              favoriteWordId={favoriteWordId}
                              sendToFavoriteData={sendToFavoriteData}
                              removeFavoritesWord={removeFavoritesWord}
                              nextWord={nextWord}
                              previousWord={previousWord}
                              nextFavoriteWord={nextFavoriteWord}
                              previousFavoriteWord={previousFavoriteWord}
                              showAllFavoriteWords={showAllFavoriteWords}
                              wordDictApi={wordDictApi}
                            />
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
                            <ModalWordDetails
                              word={word.word}
                              wordId={word.id}
                              favoriteWordId={favoriteWordId}
                              sendToFavoriteData={sendToFavoriteData}
                              removeFavoritesWord={removeFavoritesWord}
                              nextWord={nextWord}
                              previousWord={previousWord}
                              nextFavoriteWord={nextFavoriteWord}
                              previousFavoriteWord={previousFavoriteWord}
                              showAllFavoriteWords={showAllFavoriteWords}
                              wordDictApi={wordDictApi}
                            />
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
                            as="button"
                            h="40px"
                            w={["200px", "150px"]}
                            bg="theme.white"
                            color={"theme.black"}
                            border={"1px"}
                            borderColor={"gray.100"}
                            padding={"8px"}
                            _hover={{
                              borderColor: "black",
                            }}
                            onClick={() =>
                              sendToHistocalData(
                                word.wordsData.id,
                                word.wordsData.word,
                                word.favoriteWordId
                              )
                            }
                          >
                            <ModalWordDetails
                              word={word.wordsData.word}
                              wordId={word.wordsData.id}
                              favoriteWordId={favoriteWordId}
                              sendToFavoriteData={sendToFavoriteData}
                              removeFavoritesWord={removeFavoritesWord}
                              nextWord={nextWord}
                              previousWord={previousWord}
                              nextFavoriteWord={nextFavoriteWord}
                              previousFavoriteWord={previousFavoriteWord}
                              showAllFavoriteWords={showAllFavoriteWords}
                              wordDictApi={wordDictApi}
                            />
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
            {showAllHistoricalWords ? (
              <>
                <Button
                  children={"Limpar Histórico"}
                  fontSize={"12px"}
                  borderRadius={"0px"}
                  bg={"theme.white"}
                  color={"gray"}
                  w={"125px"}
                  onClick={clearHistoricalWords}
                />
              </>
            ) : showAllFavoriteWords ? (
              <>
                <Button
                  children={"Limpar Favoritos"}
                  fontSize={"12px"}
                  borderRadius={"0px"}
                  bg={"theme.white"}
                  color={"gray"}
                  w={"125px"}
                  onClick={clearFavoritesWords}
                />
              </>
            ) : (
              <></>
            )}
          </VStack>
        </>
      )}
    </>
  );
};
