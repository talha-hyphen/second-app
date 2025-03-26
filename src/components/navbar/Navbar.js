import React from 'react'
import { Link } from 'react-router'
import '../.././App.css'
export default function Navbar() {
  return (
    <div>
        <nav className='navBar' >
            <ul>
            <li>
                <Link to="/" className='navLink' >Home</Link>
            </li>
            <li>
                <Link to="/about" className='navLink'>About</Link>
            </li>
            <li>
                <Link to="/contact" className='navLink'>Contact</Link>
            </li>
            <li>
                <Link to="/renting" className='navLink'>Renting</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}
