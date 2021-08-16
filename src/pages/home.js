import { Button, Text, Box, useBreakpointValue, Image, Link } from '@chakra-ui/react';
import { Navigation, Footer } from '../components/';
const Home = () => {
    const responsiveHeight = useBreakpointValue({ base: "1000px", sm: "1100px", md: "1300px" })
    const responsiveGrid = useBreakpointValue({ base: "row", sm:"row"})
    return(
        <Box w="100%" h="100%" bg="#F5F5F5" >
            <Navigation home="currNav" aboutme="nav" projects="nav" achievements="nav" contact="nav"/>
            <Box><Image width="400px" src="/img/kiriAtas.png" alt="I Gede Arya"/></Box>
            <Box w="100%" h="100vh" display="flex"  flexDir={responsiveGrid} marginTop="-250px" paddingX="20%" bg="#F5F5F5">
                <Box w="100%" display="flex" flexDir="column" justifyContent="center" >
                    <Text fontFamily="Montserrat" fontSize="2xl" fontWeight="600">Computer Science ITB 2020 —</Text>
                    <Text fontFamily="Montserrat" color="blue" fontSize="4xl" fontWeight="500" marginTop={10}>Hello! my name is</Text>
                    <Text  bgGradient="linear(to-l, #E94057, #8A2387)" bgClip="text" fontSize="6xl" fontWeight="black" fontFamily="Montserrat">I Gede Arya Raditya Parameswara</Text>
                    <Box>
                    <Link href="https://github.com/gedearyarp" isExternal>
                        <Button colorScheme="teal" variant="outline"
                        size="md"
                        height="60px"
                        width="250px"
                        border="2px">
                            <Text fontFamily="Montserrat" color="blue" fontSize="xl">Get to Know Me!</Text>
                        </Button>
                    </Link>
                    </Box>
                </Box>
                <Box w="100%" height="auto" display="flex" justifyContent="center"  alignItems="center">
                    <Image  boxSize="600px" src="/img/gedearyarp_home_pic.png" alt="I Gede Arya"/>
                </Box>
            </Box>
            <Box position="absolute" bottom="300px" right={0}><Image w="300px" src="/img/bawahKanan.png" alt="I Gede Arya"/></Box>
            <Footer/>
        </Box>
    )
}

export default Home