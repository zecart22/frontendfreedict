import { Center, VStack, Text, HStack, Button } from "@chakra-ui/react";

import { AudioPlayer } from "../AudioPlayer";

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
  wordDictApi: any;
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
  wordDictApi,
}: WordTableProps) => {
  if (wordDictApi.length === 0) {
    window.localStorage.setItem("@Phonetic", "");

    window.localStorage.setItem("@Type", "");

    window.localStorage.setItem("@Definition", "");

    window.localStorage.setItem("@Audio", "");
  } else {
    const phonect = wordDictApi.phonetic;

    window.localStorage.setItem("@Phonetic", phonect);

    const type = wordDictApi.meanings[0].partOfSpeech;

    window.localStorage.setItem("@Type", type);

    const definition = wordDictApi.meanings[0].definitions[0].definition;

    window.localStorage.setItem("@Definition", definition);

    if (wordDictApi.phonetics.length === 0) {
      window.localStorage.setItem("@Audio", "");
    } else {
      const audio = wordDictApi.phonetics[0].audio;

      window.localStorage.setItem("@Audio", audio);
    }
  }

  const phonect = localStorage.getItem("@Phonetic");
  const type = localStorage.getItem("@Type");
  const definition = localStorage.getItem("@Definition");
  const Word = localStorage.getItem("@Word");

  return (
    <VStack spacing={5} textAlign={"left"} alignItems={"flex-start"}>
      {wordDictApi.length === 0 ? (
        <>
          <Text w={["230px", "280px"]} color={"theme.red"} fontSize={"12px"}>
            Não foi possivel carregar todas informações da palavra escolhida.
          </Text>
        </>
      ) : (
        <></>
      )}
      <Center
        h="150px"
        w={["230px", "280px"]}
        bg={"theme.pink"}
        border={"2px"}
        borderColor={"theme.black"}
      >
        <VStack>
          <Text>{Word}</Text>
          {phonect === "undefined" ? (
            <></>
          ) : (
            <>
              <Text>{phonect?.replace("/", "").replace("/", "")}</Text>
            </>
          )}
        </VStack>
      </Center>
      <HStack>
        <AudioPlayer />
      </HStack>
      <Text fontSize={30} fontWeight={"bold"}>
        Meanings
      </Text>
      <Text fontSize={15} w={["230px", "280px"]}>
        {type} - {definition}
      </Text>
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

      <Text>{Word?.toLocaleUpperCase()}</Text>
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
