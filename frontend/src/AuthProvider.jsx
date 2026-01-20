/* here we provide auth context */
import React, { Children } from 'react'
import { useContext, useState, createContext } from 'react'


// Create context
const AuthContext = createContext();

// note childrens are child component that are inside this authProvider
const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') // will will cheak the access token if present give true or if not false note : !! this sign use to covert the access token value to true or false
    )
  return (
    // provide context or provide data and children are nothing but components or app components beause we are going to wrap this authprovide inside the app component
    <AuthContext.Provider value= {{isLoggedIn, setIsLoggedIn}} > 
        {children} 

    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};