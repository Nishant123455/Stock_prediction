import React,{Children, useContext} from 'react'
// need login status we need useContext
import { AuthContext } from './authProvider'
import { Navigate } from 'react-router-dom'


const PublicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? (
    children
  ) : (
    <Navigator to='/dashboard' /> 
  )
}

export default PublicRoute