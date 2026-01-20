import React from 'react'
import Button from './Button'
import Header from './header'
import Footer from './footer'
function Content() {
  return (
    <>
    
    <div className='container'>
      <div className='p-5 text-centre bg-light-dark rounded'>
        <h1 className='text-light'> Portal to Use AI Models</h1>
        <p className='text-light lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptates quasi doloremque, quod sint maxime accusamus nesciunt? Ut quod, quaerat minus, laudantium culpa esse, animi voluptatibus omnis cupiditate praesentium ea.</p>
        <Button text='Explore' class='btn-outline-info' url='/dashboard'/>
      </div>
      
    </div>
    
      
    </>
  )
}

export default Content