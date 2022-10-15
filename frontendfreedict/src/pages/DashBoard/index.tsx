import { Center } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { WordTable } from "../../components/WordsTable";

export const DashBoard = () => {
  return (
    <>
      <Header />
      <Center mt={100}>
        <>
          <WordTable />
        </>
      </Center>
    </>
  );
};
