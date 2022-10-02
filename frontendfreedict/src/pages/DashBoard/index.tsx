import { Center, HStack, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { WordDetails } from "../../components/WordDetails";
import { WordTable } from "../../components/WordsTable";

export const DashBoard = () => {
  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");
  return (
    <>
      <Header />
      <Center mt={100}>
        {isLargerThan1302 ? (
          <>
            <HStack spacing={10}>
              <WordDetails />
              <WordTable />
            </HStack>
          </>
        ) : (
          <>
            <WordTable />
          </>
        )}
      </Center>
    </>
  );
};
