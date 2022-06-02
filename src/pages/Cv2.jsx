import React  from "react";
import { Button, Box, Link, Heading, Text, 
  Divider, Stack, useColorModeValue,
} from "@chakra-ui/react";
import { DownloadIcon,ArrowForwardIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { AnimateIntro } from "../components/AnimateIntro";
import { GithubIcon } from "../components/GithubIcon"
import { Animate } from "../components/Animate";
import pdfocr from "../../public/Curriculum_Vitae-RODRIGO_MORENO(ocr).pdf";

const Cv2 =()=> { 
  const s = useColorModeValue('brand.100', 'black')
  const g = useColorModeValue('gray.500', 'gray.700')
  <h1>const style = {
    brh2: { base: 20, md: 24 },
    brh3: { base: 16, md: 18 },
    filterblur: "blur(0.444444px)",
    filterblur2: "blur(0.344443px)",
    filterblur3: "blur(0.244442px)",
  };</h1>

return ( <> <Animate> <Box w='100%' h='100%'
  bgGradient='linear(to-l, whiteAlpha.100, whiteAlpha.200)'
  style={{ textAlign: "left", fontFamily: "Arial" }}
> <AnimateIntro> <ThemeToggleButton/>
    <a href={pdfocr} download="RODRIGO_MORENO_DEVELOPER">
      <Button leftIcon={<DownloadIcon />} css={{
        background : "transparent", color: "crimson", 
        fontWeight: "bold", filter: "blur(0.4px)", 
        padding: "4px 8px", }} _hover={{ color: "red" }}
      > Download &ensp;<small>(OCR actived)</small> </Button> 
      <Text display="inline" color={'gold'}>| |</Text>
    </a>

    <Button rightIcon={<ArrowForwardIcon />} css={{
      background : "transparent", fontWeight: "bold", 
      filter: "blur(0.4px)", padding: "4px 8px", }} 
      onClick={ ()=> window.print() } color="brand.s4vitarBlueTeam"
      _hover={{ color: "brand.700" }}
    > Print </Button>
  </AnimateIntro>

  <Box p={{base: '4px 40px', md: '30px 40px'}}  
    display={{ md: "left" }}  mt={-6}
  > <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} 
      color={s} filter="contrast(0.8)"
    > <Heading as="h1" color={s}
        style={{ textTransform: "uppercase" }}
        _hover={{ color: "tomato" }}
        sx={{ filter: style.filterblur }}
        display={{ md: "left" }}
        fontSize={{ base: "28", md: "32", lg: "42" }}
      > <strong>Rodrigo A. Moreno P.</strong>
      </Heading>

      <Text fontSize="xl" color={s}
        letterSpacing={1} my={4}
        sx={{ filter: 'contrast(0.7)' }}
        fontFamily="Times new roman"
        w='full'
      ><strong>Web Developer</strong> | Colombia | rmresidente@gmail.com |
        <Text d={'inline'}> Portfolio:{' '}
          <Text display="inline" fontWeight={'bolder'} 
            textDecoration="Highlight"
            _hover={{ color: 'brand.s4vitarRedTeam'}}
          > <a href="https://rroderickk.github.io/Deploy_library/"
              target="_blank"> Deploy library
            </a>
          </Text>
        </Text>
      </Text>

<Divider my={5} borderColor={s}/>

      <Text fontWeight="bold"
        fontSize="sm" color={s}
        letterSpacing="wide"
      > <Heading my={2} fontSize={style.brh2} 
          as="h2" color={s} filter={style.filterblur3}
        >SKILLS </Heading>
        <Text sx={{ filter: style.filterblur3 }} 
          style={{ wordSpacing: '13px' }} my={1}
        >
          Front-end HTML5 | CSS3+ | SCSS | Javascript 
          | ES6+ | React | Chakra-UI | Node | Next | Webpack | SPa<br/>

          Back-end Node | Nest | Python 
        </Text>
          # Active current learning Typescript | Python | Bash
        <Text fontWeight="normal" mt={1}
          fontSize="md" color={s}
          filter={'contrast(0.8)'}
        > 
          Solid front-end knowledge of React, ES6+, Javascript, understanding of design principles, UI/UX, advanced CSS (<b>CSS Modules, Scss, Emotion, Chakra-UI, Styled-components</b>), and responsive design.
          Positive attitude, strong work ethic, a drive for results while focusing on high code quality and performance.
        </Text>
      </Text>
      
<Divider my={5} borderColor={s} sx={{ filter: "blur(0.6px)" }}/>

      <Heading my={2} fontSize={style.brh2} display='inline'
        color={s} filter={style.filterblur3}
      > SOLO DEVELOPER{' '}
      </Heading> <em>Independent</em> | 28/09/2021 ~ 2022<br/>

      <Text color={g} display='inline'>
        I have worked on my own projects to strengthen my knowledge of development, frontend and backend, in my portfolio and others.  With the aim of having projects to show in job interviews to be able to get my first job as developer, i've applied my design and automation knowledge, all my learning notes are in my {' '}
        <Box display="inline" _hover={{color: 'purple', cursor: 'pointer'}} onClick={()=> 
          window.open('https://github.com/rroderickk', "_blank", "width=400, height=690")}
        >
          <b>GithHub profile.</b>
        </Box><br/><br/>
      </Text>

      <Heading fontSize={style.brh2} display='inline'
        color={s} filter={style.filterblur3}
      > EDUCATION{' '} </Heading>

      <Text mt={2} color={g} css={{wordSpacing: '2px'}}>
        28/09/2021 ~ At the moment Self-taught with 13+ certificates of completion, Platzi & Others platforms | React.js | Node.js | Python | Typescript | Typescript Advanced | Closures and scope Javascript | CSS3 | SCSS | Javascript | ES6+ | OOP | Node | Nest | Next | Webpack | SPa | Effective time management | Responsive design: mobile first | SOFTWARE ENGINEERING FUNDAMENTALS.
      </Text>

<Divider my={4} borderColor={s} sx={{ filter: "blur(0.6px)" }}/>

      <Heading fontSize={style.brh3} display='inline'
        color={s} filter={style.filterblur3}
      > SIDE CARRER{' '}
      </Heading>
      <Text mt={2} color={g} css={{wordSpacing: '2px'}} display="inline">
        06/2009 ~ 10/2016 Mining engineer specializing in road geotechnics. View more in
          <Text display="inline" fontWeight={'bolder'} 
            _hover={{ color: 'brand.800'}}
          > <a href="https://www.linkedin.com/in/rodrigo-moreno-rr"
              target="_blank"> LinkedIn.  </a>
          </Text>
      </Text><br/><br/>

      <Heading my={2} fontSize={style.brh3} display='inline'
        color={s} filter={style.filterblur3} 
      > EXPERIENCE{' '}
      </Heading> <em>Supervisor Assistant </em>| <b>DRUMMOND LTD</b> | 03/10/2018 ~ 03/10/2022

      <Text color={g}>
        Supervision of mining equipment, mining operation, dumps and backfill. Pribbenow Mine, in parallel, risk and hazard measurement was carried out on members of the organization.<br/><br/>
      </Text>
      
      <em>Resident engineer </em> | <b>INGENIEROS GF S.A.S</b> | 06/03/17 ~ 05/04/18
      <Text color={g}>
        Resident of road work, supervision of operation, excavation transport and conformation of rocky material.
      </Text>

      <br/><em>Hardware and software technician</em> | <b>ENLACE</b> | 08/2016 ~ 01/2017
      <Text color={g}>
        Equipment inventory (Hardware) and equipment maintenance (Hardware), cleaning, formatting, installation of software in the field. Remote delivery of reports. Servicios de Tecnologías de Información y comunicaciones -TIC
      </Text>

<Divider mt={5} borderColor={s}/>

      <Stack direction={'row'}>
        <Box>
          <Link mt={1} fontSize="lg" target={'_blank'}
            fontWeight="semibold" color={'brand.900'}
            href="https://twitter.com/cheatmodes4"
          > <Text bgGradient="linear(to-l, #7928CA, #FF0080)" 
              bgClip="text" fontSize="md" my={4}
            >Twitter: @CheatModes4</Text> 
          </Link>
        </Box>
        <Box>
          <Link mt={1} fontSize="lg" target={'_blank'}
            fontWeight="semibold" color={'brand.900'}
            href="https://htbmachines.github.io/"
          > <Text bgGradient="linear(to-t, green.200, pink.500)"
              bgClip="text" fontSize="md" my={4}
            >| Htbmachines</Text> 
          </Link>
        </Box>
        <Box>
          <Link mt={1} fontSize="lg" target={'_blank'}
            fontWeight="semibold" color={'brand.900'}
            href="https://github.com/rroderickk/nodemachine"
          > <Text bgGradient="radial(gray.300, yellow.400, pink.200)"
              bgClip="text" fontSize="md" my={4}
            >| Nodemachine</Text>
          </Link>
        </Box>
        <Box onClick={()=> 
          window.open('https://github.com/rroderickk', "_blank", "width=400, height=690")}
        >
          &ensp;<GithubIcon mt={5} css={{ cursor: 'help',}} _hover={{ fill: 'purple' }} fill={s}/>
        </Box>
      </Stack>

    </Box>
  </Box>
</Box> </Animate> </> ); }; export { Cv2 };