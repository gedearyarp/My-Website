import { Box, Flex, Text, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import '../index.css'
const Navigation = ({home, aboutme, achievements, projects, contact}) => {
    return (
        <Box
            paddingX={10}
            paddingY={5}
            position="sticky"
            bg="white"
        >
            <Box width={600}>
                <Flex>
                    <Box>
                        <Link to="/">
                            <Text className={home}>Home</Text>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/AboutMe">
                            <Text className={aboutme} >About Me</Text>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/Achievements">
                            <Text className={achievements}>Achievements</Text>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/Projects">
                            <Text className={projects}>Projects</Text>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/Contact">
                            <Text className={contact}>Contact</Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default Navigation