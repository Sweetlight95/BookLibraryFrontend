import React, { useState } from 'react'
import { Box, Input, Button, Text } from '@chakra-ui/react'
// import {Link} from 'react-router-dom'

const Login = (props) => {
  const inputFields = [
    {name: "email", label: "Email", placeholder: "Enter your email"},
    {name: "password", label: "Password", placeholder: "Enter your password"},
   
  ]
  const initialData = {
    email: "", password: "",

  }
  const [inputData, setInputData] = useState(initialData)

  return (
    <Box width="40vw" height="80vh" boxShadow="3px 3px 5px 5px #fffccf" bg="#fffccf" borderRadius="0.5rem" margin="80px 80px">
      <Box marginLeft="5rem" p={25} >
          <Text fontSize="2rem" fontWeight="bold">Sign up</Text>
            {inputFields.map((field, index) => 
            <Box >
                <Text marginLeft="200px" display="fixed" >{field.label}</Text>
                <Input  height="3rem" width="25rem" border="none" borderRadius="0.7rem" paddingLeft="0.9rem" value={inputData[field.name]} key={index} placeholder={field.placeholder} field={field}/>
            </Box>
            
        )}
        <Text  >Forget password?</Text>

        <Button height="3.8rem" width="25rem" bg="#fffc" border="none" borderRadius="1rem" fontSize="1.2rem"> Sign up</Button>
  
      </Box>
  </Box>
    
  )
}

export default Login
