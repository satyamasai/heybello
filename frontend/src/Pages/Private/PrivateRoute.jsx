import { useToast } from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const toast = useToast()
let hbToken = JSON.parse(localStorage.getItem("hbToken"))
if(!hbToken){
  toast({
    title: `You are not logged in!`,
    status: "error",
    isClosable: true,
  })
  children=<Navigate to="/login"/>
}

  return children
}

export default PrivateRoute