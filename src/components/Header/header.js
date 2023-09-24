import React from 'react'
import Logo from '../../../images/logo.jpg'
import {Link} from 'react-router-dom'
// import './header.css'
    
export default Header = () =>{
    return (
     <div className='flex justify-between p-2 m-2 shadow-lg'>
     <div className=''>
         <img className='w-56' src={Logo}/>
     </div>
         <div className='flex items-center'>
             <ul className='flex p-4 m-6'>
                <li  className='px-6'>
                    <Link to="/">Home</Link>
                </li>
                <li  className='px-6'>
                    <Link to="/about">About Us</Link>
                </li>
                <li  className='px-6'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li  className='px-6'>
                    <Link to="/cart">Cart</Link>
                </li>
             </ul>
         </div>
     </div>
    )
 }
 