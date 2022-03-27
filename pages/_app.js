import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "../components";
import {
  darkTheme,
  GlobalStyle,
  lightTheme,
  theme,
} from "../global/GlobalStyle";
import portfolioData from "../data/portfolioData.json";

export default function App({ Component, pageProps }) {
  const [toggleTheme, setToggleTheme] = useState("");

  // const checkTheme = () => {
  //   if (toggleTheme === "light") {
  //     setToggleTheme("dark");
  //     localStorage.setItem("omars-dark-value", "dark");
  //   } else if (toggleTheme === "dark") {
  //     setToggleTheme("light");
  //     localStorage.setItem("omars-dark-value", "light");
  //   }
  // };

  const checkTheme = () => {
    switch (toggleTheme) {
      case "light":
        setToggleTheme("dark");
        localStorage.setItem("toggleTheme", "dark");
        return document.documentElement.setAttribute("data-theme", "dark");

      case "dark":
        setToggleTheme("light");
        localStorage.setItem("toggleTheme", "light");
        return document.documentElement.setAttribute("data-theme", "light");

      default:
        setToggleTheme("light");
        localStorage.setItem("toggleTheme", "light");
        return document.documentElement.setAttribute("data-theme", "light");
    }
  };

  // useEffect(() => {
  //   const themeValue = localStorage.getItem("omars-dark-value");
  //   setToggleTheme(themeValue);
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("toggleTheme")) {
      setToggleTheme(localStorage.getItem("toggleTheme"));
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      checkTheme(null);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={toggleTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar
          toggleTheme={toggleTheme}
          checkTheme={checkTheme}
          data={portfolioData.navbar}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  );
}
