import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "ESC CRM",
  description: "ESC CRM!",
};

export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={'light'}>
          <Toaster position="top-right" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
