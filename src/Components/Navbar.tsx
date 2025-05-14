import { HStack, Box, Image, Text } from "@chakra-ui/react"
import logo from '../Assets/logo.gif'
import './Navbar.css'
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
    return (
        <HStack className="nav_container">
            <Box className="brand">
                <Image src={logo} alt="logo" className="logo"/>
                <Text className="logo-name" >Gamer Triumphs</Text>
            </Box>
            <ColorModeSwitch/>
        </HStack>
    )}

export default Navbar