import React from 'react'
import { Box, Img } from '@chakra-ui/react'
import Landing2 from './Landing2'
import BackgroundImg from './BackgroundImg'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <Box bgColor="#ffffff" height="1000vh" display="fixed">
     <BackgroundImg />
      <Box height="80vh" 
          width="87vw" 
          margin="75px 80px" 
          borderRadius="2rem"
          bg="#EDC7B4"
          display="flex"
          // style={{background: linear-gradient(#edc7b4b, #)}}
          >
           
        <Landing2 />
      </Box>
    
    </Box>
  )
}

export default Landing