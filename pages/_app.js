import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, theme } from "../global/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  );
}
