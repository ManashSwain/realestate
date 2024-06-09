import React, { useState } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';

const navbar = () => {
  const [open , setOpen] = useState(false)
  return (
    <>
    <nav>
      <div className="nav-left">
        <Link to="/" className='logo'><img src="/public/logo.png" alt="real-estate" />
        <span>Real Estate</span>
        </Link>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/agents'>Agents</Link>
        {/* remove Featured Properties during backend  */}
        <Link to='/list'>Featured Properties</Link>
      </div>
      <div className="nav-right">
       <Link to='/signin' >Sign in</Link>
       <Link to='/signup' className='btn'>Sign up</Link>
       <div className="menuIcon">
        <img src="../../public/menu.png" alt="menu-icon" onClick={()=>setOpen(prev => !prev)} />
       </div>
       <div className={ open ? "menu active" : "menu"}>
       <a href="">Home</a>
        <Link to='/about' href="">About</Link>
        <Link to='/contact' href="">Contact</Link>
        <Link to='/agents' href="">Agents</Link>
            {/* remove Featured Properties during backend  */}
        <Link to='/list'>Featured Properties</Link>
        <Link to='/signin' href="">Sign in</Link>
        <Link to='/signup' href="">Sign up</Link>
       </div>
      </div>
    </nav>
    </>
  )
}

export default navbar
