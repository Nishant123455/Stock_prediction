import React,{Children, useContext} from 'react'
// need login status we need useContext
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

// we are making private route to hide dashboard so that non login user can see it , we we didi make it we still the some content of dashboard without login

const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute
