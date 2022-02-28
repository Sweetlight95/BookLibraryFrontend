import React from 'react'
import {Box, Img} from '@chakra-ui/react'
import logo from '../Img/logo.svg'

const Logo = () => {
  return (
     <Box margin="35px 50px">
            <Img src={logo} />
        </Box> 
  )
}

export default Logo
