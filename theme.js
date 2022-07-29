const { createTheme } = require("@mui/material");

const theme = createTheme({
  shadows: new Array(25).fill("none"),
  palette: {
    primary: {
      main: "#bdbdbd",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
  },
});

export default theme;
