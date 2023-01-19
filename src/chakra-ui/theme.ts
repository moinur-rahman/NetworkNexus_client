import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  form: "1000px",
};

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({ breakpoints,fonts });

export default theme;
