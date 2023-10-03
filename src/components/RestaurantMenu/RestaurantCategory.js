import React, { useState } from 'react'
import CategoryItemList from './CategoryItemList'

const RestaurantCategory = ({card,showItems,setShowCategoryIndex}) => {


  const handleShowCategory = () =>{
    setShowCategoryIndex()
  }
  return (
    <div>
      <div className='w-6/12  bg-gray-50 shadow-xl mx-auto my-6'>
        <div  className='flex justify-between cursor-pointer' onClick={handleShowCategory}>
          <span className='font-bold text-md m-4'>
            {card?.title} ({card?.itemCards?.length})
          </span>
          <span className='m-4'>
            🔽
          </span>
         
        </div>
         { showItems&&<CategoryItemList items={card?.itemCards}/>  }   
      </div>
    </div>

    
  )
}
export default RestaurantCategory