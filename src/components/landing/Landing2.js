import React, { useState }from 'react'
import { Box, Button, Text, Input, Img } from '@chakra-ui/react'
import book from '../../components/Img/book.svg'
import Logo from '../../components/landing/Logo'
import {Link} from 'react-router-dom'

const Landing2 = () => {
    const [tabRoute, setTabRoute] = useState("")

    function setTableIndex(route) {
        setTabRoute(route.name)
    }
    const routes = [
        { 
            name: "Overview",
        },
        { name: "About us"
        },
        { name: "Our Products"
        },
        { name: "Contact us"
        }
    ] 
    
    return (
    <Box>
        <Logo />
        <Box display ="flex" marginBottom="-5rem">
            <Box   marginLeft="13rem" >
            {routes.map((route, index) => (
                <Button onClick={() => setTableIndex(route)} key={index} height="20%"  fontSize="20px" 
                color="black" bg="none" width="25%" padding="12px" border="unset" marginTop="-10rem" justifyContent="space-evenly">{route.name}</Button>
            ))}
            </Box>
            <Box >           
            <Button  bg="none" border="none" marginTop="-10rem" height="3rem" width="8rem" marginLeft="25rem" ><Link to="/log-in" style={{textDecoration: "none", color: "black"}} >Sign in </Link></Button>
            <Button bg="#fe9833" border="none" marginTop="-10rem" borderRadius="0.3rem" width="8rem" height="3rem" marginLeft="2rem"><Link to="/sign-up" style={{textDecoration: "none", color: "black"}}>Sign up</Link></Button>
            </Box>
        </Box>
        <Box display="flex">
            <Box marginLeft="8rem" marginTop="4rem">
                <Text fontWeight="bold" fontSize="3rem" marginBottom="1rem">Online Library</Text>
                <Text fontSize="1rem" >Book help us fight off ignorance,gain perspective, <br />learn something new and also entertain yourself </Text>
                <Text></Text>
                        <Input height="2.1rem" width="18rem"
                            type="text" border="none" borderRadius="0.3rem"
                            placeholder="Find your books here" paddingLeft="1rem" fontSize="1rem"/>
                            <Button height="2.2rem" width='8rem' border="none" bg="#fe9833" borderRadius="0.3rem" fontSize="1rem">
                                Search Book
                            </Button>
            </Box>    
            <Box marginTop="2.6rem" marginLeft="10rem">
                <Img src={book} alt="book"/>
                </Box> 
        </Box>
    </Box>
    )
}

export default Landing2
