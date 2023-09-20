import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from '../ResataurantCard/RestaurantCard'
import { resList } from '../../../common/utils'
import './body.css'
import useOnlineStatus from '../../../common/CustomHooks/useOnlineStatus'

export default  Body = () => {

    const [restaurantList, setRestaurantList] = useState(resList || [])
    const [filterRestaurantList, setFilterRestaurantList] = useState(resList || [])
    const [showFilterData, setShowFilterData] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    // get top rated restuarant 
    const getTopRatedRestaurants = e =>{
        e.preventDefault()
        
        const filterRestaurantList  = restaurantList.filter(res => res.data.avgRating > 4)
        setRestaurantList(filterRestaurantList)
    }

    // get filter resataurant list
    const getFilteredData = e =>{
        e.preventDefault()
        
        if(searchValue){
            const filterData = restaurantList?.length ? restaurantList.filter(res=>res?.data?.name.toLowerCase().includes(searchValue.toLowerCase())) : []
             setFilterRestaurantList(filterData)
             setShowFilterData(true)
            }else{
                setRestaurantList(restaurantList)
                setShowFilterData(false)
        }
    }

    // set filter value
    const setInputValue = e =>{
        e.preventDefault()
        setSearchValue(e.target.value || "")
    }

    // get final restaurant list  to render
    const getRestuarantList = ()=>{
    
        let list = []

        // show filter data
        if(showFilterData){
            list = [...filterRestaurantList]
        }else{
            // dont show filter data
            list = [...restaurantList]
        }

        // create restaurant cards
        const resultList = list?.length >0&& list.map(res=>{
            return<Link to={`/restaurants/${res?.data?.id}`}  key={res.data.id}><RestaurantCard res={res}/></Link>
        })

        return resultList
    }

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus){
        return <h1>You're offline, please try again !!</h1>
    }

    return(
        
        <div className='body'>
            <div className='filter'>
                <div className='search-input'>
                   <input type='search' onChange={setInputValue} value={searchValue} />
                   <button onClick={getFilteredData}>Search</button>
                </div>
                <button className='filter-btn' onClick={getTopRatedRestaurants}>
                    Top Rated
                </button>
            </div>
            <div className='restaurant-container'>
            {
               getRestuarantList()
            }
             
            </div>
        </div>
    )
}
 