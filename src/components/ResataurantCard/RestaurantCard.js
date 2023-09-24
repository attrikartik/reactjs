import React from 'react'
// import './ResataurantCard.css'
import {IMAGE_URL} from '../../../common/constant.js'

export default RestaurantCard = (res) =>{

    const {name,avgRating,cuisines,deliveryTime,costForTwo,cloudinaryImageId} = res?.res?.data

    return(
        <div className='restaurant-card-container'>
          <div className='restaurant-card-img'>
            <img className='card-img' src={`${IMAGE_URL}${cloudinaryImageId} `}/>
          </div>
          <div className='restaurant-card-info'>
            <h3>{name}</h3>
            <p>{avgRating}</p>
            <p>{cuisines.join(', ')}</p>
            <p>{deliveryTime} min Delivery time</p>
            <p>${costForTwo/100} for Two</p>
          </div>
        </div>
    )
}

