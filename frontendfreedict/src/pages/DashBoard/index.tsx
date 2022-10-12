import { Center, HStack, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { WordDetails } from "../../components/WordDetails";
import { WordTable } from "../../components/WordsTable";

export const DashBoard = () => {
  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");
  const token = localStorage.getItem("@AcessToken");

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
