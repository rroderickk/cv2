import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from "react/cjs/react.production.min";
import { Theme } from "./components/Theme";
import { App } from "@routes/App";


ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);