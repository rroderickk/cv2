import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react"

const Layout =( {children} )=> {

  const color = useColorModeValue('black', '#ffffff')

  const styleLayout = {
    textAlign: "center",
    backgroundColor: color,
    minHeight: "100vh",
    minWidth: "350px",
    padding: "20px",
    maxWidth: "100vw",
  };

  return (
    <div className="Layout" 
      style={styleLayout}
    >
      {children}
    </div>
  ); 

}; export { Layout };
