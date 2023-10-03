import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from '../ResataurantCard/RestaurantCard'
import { resList } from '../../../common/utils'
// import './body.css'
import useOnlineStatus from '../../../common/CustomHooks/useOnlineStatus'

const Body = () => {

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
            // console.log(res)
            return(
                <Link data-testid='resCard' to={`/restaurants/${res?.data?.id}`}  key={res?.data?.id}>
                    <RestaurantCard res={res}/>
                </Link>
            )
        })

        return resultList
    }

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus){
        return <h1>You're offline, please try again !!</h1>
    }

    return(
        
        <div className='body'>
            <div className='flex'>
                <div className='p-4 m-4'>
                   <input type='input' data-testid='searchInput' className='border border-solid border-black' onChange={setInputValue} value={searchValue} />
                   <button className='px-4  m-6 border border-slate-400 rounded-md text-white bg-blue-400' onClick={getFilteredData}>Search</button>
                </div>
                <div className='p-4 m-4'>
                    <button className='px-4  m-6 border border-slate-400 rounded-md text-white bg-blue-400' onClick={getTopRatedRestaurants}>
                    Top Rated
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center flex-wrap w-full'>
            {
               getRestuarantList()
            }
             
            </div>
        </div>
    )
}
export default  Body 