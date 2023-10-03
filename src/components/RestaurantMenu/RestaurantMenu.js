import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import { ITEM_CATEGORY_FILTER_STRING } from '../../../common/constant'
import useRestaurantMenu from '../../../common/CustomHooks/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {

    // showCategoryIndex variable to show which acridian should be visible
    const [showCategoryIndex, setShowCategoryIndex] = useState(0)

    // get res id from  para,
    const {resId} = useParams()
    
    // call custom hooke to fetch rest. menu form api usingg res id
    const resInfo = useRestaurantMenu(resId)

    const {name, cuisines,costForTwoMessage} = resInfo !=null && resInfo?.cards[0]?.card?.card?.info

    const {itemCards} = resInfo !=null && resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card

    console.log( resInfo !=null && resInfo?.cards[2]?.groupedCard?.cardGroupMap)

    const categories = resInfo !=null && resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]===ITEM_CATEGORY_FILTER_STRING)

    console.log(categories)
    
    return resInfo===null?<h1>Loading!!!</h1>:(
        <div className='text-center'>
            <h1 className='font-bold text-2xl m-6'>{name}</h1>
            <h3 className='font-bold'>{cuisines.join('')}</h3>
            <h3>{costForTwoMessage}</h3>
            {
                categories?.map((category,index)=>{
                const {card} = category?.card
                    console.log(card)
                    return (
                        <RestaurantCategory 
                        key={index}
                        card={card}
                        showItems={index === showCategoryIndex ?true:false}
                        setShowCategoryIndex={()=>setShowCategoryIndex(index)}
                        />
                    )
                })
            }
        </div>
  )
}

export default RestaurantMenu 