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
import { useCallback } from "react";
import { FiPlay } from "react-icons/fi";
import { api } from "../../services";

interface WordTableProps {
  word: string;
  wordId: string;
  favoriteWordId: string;
  showAllFavoriteWords: boolean;
  nextWord: () => void;
  previousWord: () => void;
  nextFavoriteWord: () => void;
  previousFavoriteWord: () => void;
  sendToFavoriteData: (word_id: string, word: string) => void;
  removeFavoritesWord: (word_id: string) => void;
}

export const WordDetails = ({
  word,
  wordId,
  favoriteWordId,
  showAllFavoriteWords,
  nextFavoriteWord,
  nextWord,
  previousFavoriteWord,
  previousWord,
  sendToFavoriteData,
  removeFavoritesWord,
}: WordTableProps) => {
  const token = localStorage.getItem("@AcessToken");
  const user_id = localStorage.getItem("@AcessUserID");

  

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
          <Text>{word}</Text>
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
        {showAllFavoriteWords ? (
          <>
            <Button
              children={"Voltar"}
              bg={"theme.white"}
              border={"1px"}
              borderRadius={"0px"}
              borderColor={"theme.black"}
              color={"theme.black"}
              w={"125px"}
              onClick={previousFavoriteWord}
            />
            <Button
              children={"Próximo"}
              borderRadius={"0px"}
              bg={"theme.white"}
              border={"1px"}
              borderColor={"theme.black"}
              color={"theme.black"}
              w={"125px"}
              onClick={nextFavoriteWord}
            />
          </>
        ) : (
          <>
            <Button
              children={"Voltar"}
              bg={"theme.white"}
              border={"1px"}
              borderRadius={"0px"}
              borderColor={"theme.black"}
              color={"theme.black"}
              w={"125px"}
              onClick={previousWord}
            />
            <Button
              children={"Próximo"}
              borderRadius={"0px"}
              bg={"theme.white"}
              border={"1px"}
              borderColor={"theme.black"}
              color={"theme.black"}
              w={"125px"}
              onClick={nextWord}
            />
          </>
        )}
      </HStack>

      <Text>{word?.toLocaleUpperCase()}</Text>
      <HStack spacing={10}>
        <Text as="button" onClick={() => sendToFavoriteData(wordId, word)}>
          Favoritar +{" "}
        </Text>
        <Text as="button" onClick={() => removeFavoritesWord(favoriteWordId)}>
          Desfavoritar -{" "}
        </Text>
      </HStack>
    </VStack>
  );
};
