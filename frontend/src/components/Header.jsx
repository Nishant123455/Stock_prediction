import React from 'react'
import Button from './Button'
function Header() {
  return (
    <>
    <nav className='navbar container pt-3 pd-3 align-items-start'>
        <a className='navbar-brand text-light' href="">AI trained models</a>

        <div>
            <Button text='Login' class='btn-outline-info'/>
            &nbsp;
            <Button text='Register' class="btn-info"/>
        </div>
    </nav>
        
    </>
  )
}

export default Header