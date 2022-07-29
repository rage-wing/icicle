import "styles/base.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
