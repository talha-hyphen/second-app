import React from 'react'
import { Link } from 'react-router'
import '../.././App.css'
import './Navbar.css'
import logo from '../.././assets/images/logo.png'
export default function Navbar() {
    return (
        <div>
            <nav className='flex_dev'>
                <div className='left_nav flex_dev'>
<img src={logo} alt='logo' className='logo'/>
                </div>
                <div className='right_nav flex_dev'>
<Link to='/' className='nav_link'>Home</Link>
<Link to='/renting' className='nav_link'>Renting</Link>
<Link to='/contact' className='nav_link'>Contact</Link>
<Link to='/about' className='nav_link'>About</Link>
                </div>
                
            </nav>
        </div>
    )
}
