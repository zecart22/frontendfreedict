import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    theme: {
      white: "#FFFF",
      red: "#9F0101",
      pink: "#E6D0DE",
      gray100: "#CCCCCC",
      grafit: "#211D1D",
      yellow: "#F8E00C",
      lightBlue: "#99DDFF",
      darkgreen: "#089605",
      blue: "#1BA1E2",
    },
    gray: {
      0: "#f5f5f5",
      10: "#F2ECEC",
      50: "#F4EAEA",
      100: "#e0e0e0",
      300: "#828282",
      600: "#464646",
    },
  },

  styles: {
    global: {
      body: {
        bg: "theme.white",
        color: "gray.600",
      },
    },
  },
});

export default theme;
