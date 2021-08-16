import { Box, Link, Text, Image, Grid } from "@chakra-ui/react"
import '../index.css'
const Footer = () => {
    return(
        <Box w="100%" bgGradient="linear(to-r, #ad1deb, #6e72fc)" h="300px">
            <Box paddingTop={100} w="100%" display="flex" flexDir="column" alignItems="center" >
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    <Box>
                        <Link href="https://www.linkedin.com/in/i-gede-arya-raditya-parameswara-30a0861aa/" isExternal>
                            <Image boxSize="40px" src="/img/linkedin.png" alt="Linked In"/>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://github.com/gedearyarp" isExternal>
                            <Image boxSize="40px" src="/img/github.png" alt="Github"/>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.instagram.com/gedearyarp/" isExternal>
                            <Image boxSize="40px" src="/img/instagram.png" alt="Instagram"/>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://twitter.com/gedearyarp" isExternal>
                            <Image boxSize="40px" src="/img/twitter.png" alt="Twitter"/>
                        </Link>
                    </Box>
                </Grid>
                <Box marginTop="20px">
                    <Text fontFamily="Libre Baskerville" fontSize="md">© 2021 I Gede Arya Raditya Parameswara</Text>
                </Box>
            </Box>
        </Box>
    )
}
export default Footer;