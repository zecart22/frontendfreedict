import { Center } from "@chakra-ui/react";

interface WordProps {
  word: string;
  sendToHistocalData: (
    wordId: string,
    word: string,
    empetyString: string
  ) => void;
  wordId: string;
}

export const CardWords = ({ word, sendToHistocalData, wordId }: WordProps) => {
  return (
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
      onClick={() => sendToHistocalData(wordId, word, "")}
      className="wordCard"
    >
      {word}
    </Center>
  );
};

interface WordHistoricalProps {
  word: string;
}

export const CardHistoricalWords = ({ word }: WordHistoricalProps) => {
  return (
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
      className="historicalWordCard"
    >
      {word}
    </Center>
  );
};

interface WordFavoriteProps {
  word: string;
  wordId: string;
  favoriteWordId: string;
  sendToHistocalData: (
    wordId: string,
    word: string,
    favoriteWordId: string
  ) => void;
}

export const CardFavoriteWords = ({
  word,
  sendToHistocalData,
  wordId,
  favoriteWordId,
}: WordFavoriteProps) => {
  return (
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
      onClick={() => sendToHistocalData(wordId, word, favoriteWordId)}
      className="favoriteWordCard"
    >
      {word}
    </Center>
  );
};
