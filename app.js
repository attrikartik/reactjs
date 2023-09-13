import React from 'react'
import ReactDom from 'react-dom/client'
import Logo from './images/logo.jpg'
import styles from './app.css'
import {resList} from './utility.js'
/**
 *    Header Component 
 *         - Logo Component
 *         - Navbar Component
 *    Body Component
 *         - Search Bar Component
 *         - RestuarantContainer Component
 *                - Restaurant Cards Component
 *    Footer Component
 *         - Copy Right Component
 *         - Links Compnent
 *         - Info Component
 */

const RestaurantCard = (res) =>{
    const {name,avgRating,cuisines,deliveryTime,costForTwo,cloudinaryImageId} = res?.res?.data
    return(
        <div className='restaurant-card-container'>
          <div className='restaurant-card-img'>
            <img className='card-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId} `}/>
          </div>
          <div className='restaurant-card-info'>
            <h3>{name}</h3>
            <hp>{avgRating}</hp>
            <p>{cuisines.join(', ')}</p>
            <p>{deliveryTime} min Delivery time</p>
            <p>${costForTwo/100} for Two</p>
          </div>
        </div>
    )
}
const Body = () => {
    // console.log(resList)
    return(
        <div className='body'>
            <div className='search'>search</div>
            <div className='restaurant-container'>
            {
                resList.length&& resList.map(res=>{
                    return<RestaurantCard key={res.data.id} res={res}/>
                })
            }
             
            </div>
        </div>
    )
}
const Header = () =>{
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

const AppLayout = () =>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)