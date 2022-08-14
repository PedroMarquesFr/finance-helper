import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
