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
  },
  breakpoints:{
    
  }
});

export default theme;
