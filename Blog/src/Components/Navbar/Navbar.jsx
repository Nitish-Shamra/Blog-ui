import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/blog_logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menu, setmenu] = useState('home')
     
  return (
    <div className='navbar'>
        <div className="blog-logo">
            <img src={logo} alt="Blog Logo" />
            <p>Blogger</p>
        </div>
       <ul className="navbar-menu">
          <li onClick={() => setmenu('home')}><Link to="/">Home</Link>{menu === 'home' ?<hr/>: <></>}</li>
          <li onClick={() => setmenu('about')}><Link to="/about">About</Link>{menu === 'about' ?<hr/>: <></>}</li>
          <li onClick={() => setmenu('contact')}><Link to="/contact">Contact</Link>{menu === 'contact' ?<hr/>: <></>}</li>
       </ul>
         <div className="navbar-login">
           <Link to="/login">Login</Link>
         </div>
    </div>
  )
}

export default Navbar
