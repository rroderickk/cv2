import React from "react";
import { VStack, useColorModeValue } from "@chakra-ui/react";
import { Config } from "./config.links";
const { links } = Config;
const g = useColorModeValue('gray.500', 'gray.700')

/** 💬
 * ##### VStack component. -> Links <-
 * @void
 */
export const LINKS = () => <VStack
  sx={{ filter: "contrast(0.4)" }}
  textAlign='left' color={g} spacing="4"
  margin={0}
>
  <h3> - Docs - </h3>
  { links
      .sort((a,b) => a.length - b.length)
      .map( _ => <h4 key={`${Math.random()}${_}`}>{_}</h4>
    )
  }
</VStack>