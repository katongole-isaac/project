import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontFamily:
          //   "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontFamily: "Helvetica ",
        },
      },
    },
  },

  breakpoints: {},
});

export default theme;
