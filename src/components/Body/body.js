import React, {useState} from 'react'
import RestaurantCard from '../ResataurantCard/RestaurantCard'
import { resList } from '../../../common/utils'
import './body.css'

export default  Body = () => {

    const [restaurantList, setRestaurantList] = useState(resList || [])

    const getTopRatedRestaurants = e =>{
        e.preventDefault()
        
        const filterRestaurantList  = restaurantList.filter(res => res.data.avgRating > 4)
        setRestaurantList(filterRestaurantList)
    }
    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={getTopRatedRestaurants}>
                    Top Rated
                </button>
            </div>
            <div className='restaurant-container'>
            {
                restaurantList?.length >0&& restaurantList.map(res=>{
                    return<RestaurantCard key={res.data.id} res={res}/>
                })
            }
             
            </div>
        </div>
    )
}
 