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
  },
  fontSmoothing: true,
});
