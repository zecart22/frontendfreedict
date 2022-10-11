import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { WordDetails } from "../../components/WordDetails";

interface WordProps {
  word: string;
  wordId: string;
  favoriteWordId: string;
  sendToFavoriteData: (word_id: string, word: string) => void;
  removeFavoritesWord: (word_id: string) => void;
}

export const ModalWordDetails = ({
  word,
  wordId,
  favoriteWordId,
  sendToFavoriteData,
  removeFavoritesWord,
}: WordProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        _hover={{
          borderColor: "theme.white",
        }}
        fontSize={["20px", "12.5px"]}
      >
        {word}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Word Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WordDetails
              sendToFavoriteData={sendToFavoriteData}
              removeFavoritesWord={removeFavoritesWord}
              word={word}
              wordId={wordId}
              favoriteWordId={favoriteWordId}
            ></WordDetails>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
