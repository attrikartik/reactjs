import React from 'react'
import Logo from '../../../images/logo.jpg'
import './header.css'
    
export default Header = () =>{
    return (
     <div className='header'>
     <div className='header-logo'>
         <img className='logo' src={Logo}/>
     </div>
         <div className='nav-container'>
             <ul className='nav-items'>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
             </ul>
         </div>
     </div>
    )
 }
 