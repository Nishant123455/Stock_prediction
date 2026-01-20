import { Component, useState } from 'react'
import Content from './components/content'
import './assets/css/style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/Register'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import AuthProvider from './authProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
  
      <Routes>
  
        <Route path = '/' element= {<Content />}/>
        <Route path='/register' element= { <PublicRoute> <Register /> </PublicRoute> } />
        <Route path='/login'  element = { <PublicRoute> <Login /> </PublicRoute> } />
        <Route path='/dashboard' element= {<PrivateRoute> <Dashboard /> </PrivateRoute> } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
