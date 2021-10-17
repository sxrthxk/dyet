import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </ChakraProvider>
  );
}
export default MyApp;
