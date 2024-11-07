import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          mycolor: {
            main: "#F6F9FC",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          bg: {
            main: "#f6f6f6",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          mycolor: {
            main: "#252b32",
          },
          neutral: {
            main: "#64748B",
          },
          bg: {
            main: "#1D2021",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("mode", newMode); // Store the new mode in localStorage
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};