import React from 'react'
import Logo from '../../../images/logo.jpg'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

    
const Header = () =>{

    // get cart state from store
    const cartItems = useSelector(store=>store.cart.items)
    console.log(cartItems)

    // label for cart item count to show in header
    const getCartCount = () => cartItems.length ? <span className='text-red-400'>{`(${cartItems.length})`}</span>: ""

    return (
     <div className='flex justify-between p-2 m-2 shadow-lg bg-green-50'>
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
                    <Link to="/cart" className='font-bold'>Cart {getCartCount()}</Link>
                </li>
             </ul>
         </div>
     </div>
    )
 }

 export default Header
 