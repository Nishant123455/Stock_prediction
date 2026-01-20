import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../authProvider'
import { useContext } from 'react'


function Header() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const navigate= useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLoggedIn(false)
        navigate('/login')

    }
  return (
    <>
    <nav className='navbar container pt-3 pd-3 align-items-start'>
        <Link className='navbar-brand text-light' to='/'>AI trained models</Link>

        <div>
            {isLoggedIn ? (
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            ): (
            <>
            <Button text='Login' class='btn-outline-info' url="/login"/>
            &nbsp;
            <Button text='Register' class="btn-info" url="/register"/> 
             </>
            )}
            
        </div>
    </nav>
        
    </>
  )
}

export default Header