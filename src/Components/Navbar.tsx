import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../Assets/logo.gif'
import './Navbar.css'

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} alt="logo" className="logo"/>
            <Text className="logo-name" >Gamer Triumphs</Text>
        </HStack>
    )}

export default Navbar