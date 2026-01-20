import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <nav className='navbar container pt-3 pd-3 align-items-start'>
        <Link className='navbar-brand text-light' to='/'>AI trained models</Link>

        <div>
            <Button text='Login' class='btn-outline-info' url="/login"/>
            &nbsp;
            <Button text='Register' class="btn-info" url="/register"/>
        </div>
    </nav>
        
    </>
  )
}

export default Header