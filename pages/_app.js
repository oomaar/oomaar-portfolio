import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, theme } from "../global/GlobalStyle";

export default function App({ Component, pageProps }) {
  const [toggleTheme, setToggleTheme] = useState("");

  const checkTheme = () => {
    if (toggleTheme === "light") {
      setToggleTheme("dark");
      localStorage.setItem("omars-dark-value", "dark");
    } else if (toggleTheme === "dark") {
      setToggleTheme("light");
      localStorage.setItem("omars-dark-value", "light");
    }
  };

  useEffect(() => {
    const themeValue = localStorage.getItem("omars-dark-value");
    setToggleTheme(themeValue);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  );
}
