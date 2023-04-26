import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <div className='siginup'>
    <Box color={'goldenrod'} border={'1px solid red'} w={'420px'} h={'450px'} m={'auto'}>
 <FormControl>
 <Box  w={'80%'} m={' 10px auto'} border={'1px solid goldenrod'}>User Sign up</Box>
 <Box><label>First Name</label><Input placeholder='First Name'/></Box>
 <Box><label>Last Name</label><Input placeholder='Last Name'/></Box>
 <Box><label>Email</label><Input placeholder='Email'/></Box>
 <Box><label>Password</label><Input placeholder='Password'/></Box>
 <Box m={'10px'}><Button>Sign in</Button></Box>
 </FormControl>


    </Box>
    
    </div>
  )
}

export default Signup