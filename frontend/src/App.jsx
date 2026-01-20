import { Component, useState } from 'react'
import Content from './components/content'
import './assets/css/style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/Register'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>

      <Route path = '/' element= {<Content />}/>
      <Route path='/register' element= {<Register />} />
      <Route path='/login'  element = {<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  )
}

export default App
