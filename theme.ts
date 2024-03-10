"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: '"Inter", sans-serif',
  primaryColor: 'primary-red',
  colors: {
    'primary-red': [
      "#ffe7e7",
      "#ffcece",
      "#ff9b9b",
      "#ff6363",
      "#ff3636",
      "#ff1818",
      "#ff0307",
      "#e40000",
      "#cc0000",
      "#b20000"
    ],
    'green': [
      "#e7ffe7", 
      "#b2ffb2",
      "#7fff7f",
      "#4dff4d",
      "#1aff1a",
      "#00e600",
      "#00b200",
      "#008000",
      "#004d00",
      "#003300" 
    ],
    dark: [
        "#ffffff",
        "#e6e6e6",
        "#cccccc",
        "#b3b3b3",
        "#292929",
        "#1f1f1f",
        "#1f1f1f",
        "#0f0f0f",
        "#333333",
        "#1a1a1a",
        "#000000"
      ]
  },
  fontSmoothing: true,
});
