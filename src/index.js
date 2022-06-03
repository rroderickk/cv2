import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from "@components/Theme";
import { App } from "@routes/App";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);