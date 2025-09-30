import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
});
// since the component from the source had its own stylers and fonts, we changed its properties
// like so to be able to use our own fonts. basically we rewrite the chosen part.

export default theme;
