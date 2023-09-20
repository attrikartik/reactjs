import React from 'react'
import Logo from '../../../images/logo.jpg'
import {Link} from 'react-router-dom'
import './header.css'
    
export default Header = () =>{
    return (
     <div className='header'>
     <div className='header-logo'>
         <img className='logo' src={Logo}/>
     </div>
         <div className='nav-container'>
             <ul className='nav-items'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
             </ul>
         </div>
     </div>
    )
 }
 