import { Component, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import './assets/css/style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content/>
      <Footer />

    </>
  )
}

export default App
