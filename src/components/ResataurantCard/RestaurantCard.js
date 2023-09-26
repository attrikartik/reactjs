import React from 'react'
// import './ResataurantCard.css'
import {IMAGE_URL} from '../../../common/constant.js'

export default RestaurantCard = (res) =>{

    const {name,avgRating,cuisines,deliveryTime,costForTwo,cloudinaryImageId,promoted} = res?.res?.data

    return(
        <div className='flex-col m-4 p-4 w-[200px] h-[400px] bg-gray-100 shadow-2xl rounded-3xl hover:scale-y-105 hover:shadow-blue-400/50 hover:bg-gray-200 relative'>
          <div className='h-36 flex justify-center  hover:z-50'>
            <img className='rounded-xl ' src={`${IMAGE_URL}${cloudinaryImageId} `}/>
            {promoted&&<label className="positionflex items-center justify-center  h-7 bg-red-100 text-orange-400 mx-4 p-1 rounded-md absolute left-0 ">Promoted</label>}
          </div>
          <div className='restaurant-card-info'>
            <h3 className='font-bold py-1 px-2 text-m'>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{deliveryTime} min Delivery time</h4>
            <h4>${costForTwo/100} for Two</h4>
          </div>
        </div>
    )
}

