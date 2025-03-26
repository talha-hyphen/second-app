import { BrowserRouter,Route,Routes } from 'react-router'
import React from 'react'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Renting from '../pages/renting/Renting'
import Navbar from '../components/navbar/Navbar'
export default function Routing() {
  return (
    <div>
        { <BrowserRouter> 
        <Navbar/>
             <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/renting' element={<Renting/>}/>
                 <Route path='/contact' element={<Contact/>}/>
                 <Route path='/about' element={<About/>}/>
             </Routes>
         </BrowserRouter> }

    </div>
  )
}
