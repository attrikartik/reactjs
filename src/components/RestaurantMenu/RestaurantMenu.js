import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import { MENU_URL } from '../../../common/constant'
import useRestaurantMenu from '../../../common/CustomHooks/useRestaurantMenu'

export default RestaurantMenu = () => {

    // get res id from  para,
    const {resId} = useParams()
    
    // call custom hooke to fetch rest. menu form api usingg res id
    const resInfo = useRestaurantMenu(resId)

    const {name, cuisines,costForTwoMessage} = resInfo !=null && resInfo?.cards[0]?.card?.card?.info

    const {itemCards} = resInfo !=null && resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card

    return resInfo===null?<h1>Loading!!!</h1>:(
        <div className='menu'>
            <h1>{name}</h1>
            <h3>{cuisines.join('')}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards?.length && itemCards?.map(item=>
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"         "}
                        {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice /100}
                    </li>)
                }
            </ul>
        </div>
  )
}
