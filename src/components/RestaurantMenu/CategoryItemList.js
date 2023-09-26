import React from 'react'
import { IMAGE_URL } from '../../../common/constant'

export default CategoryItemList = ({items}) => {
    console.log(items)

  return (
    <div>
       {
        items!=null&&items?.length &&items.map(i=>{
            {/* console.log(i) */}
        const {info} = i?.card 
        console.log(i)
         return   (
            <div key={info?.id}
            className='p-2 m-2  border-b-2 text-left flex justify-between'
            >
                <div className='w-9/12'>
                    <div className='py-2'>
                        <span className=''>{info?.name || ''}</span>
                        <span>₹ {info?.price /100 || info?.defaultPrice /100}</span>
                    </div>
                    <p className='text-xs text-gray-600 font-sans'>{info?.description || ''}</p>
                </div>
            
                <div className='w-3/12 relative'>
                    <img src={`${IMAGE_URL}${info?.imageId}`} />
                    <div className='absolute right-12 bottom-0.5'>
                        <button className='flex items-center justify-center px-2  bg-slate-50 shadow-lg border rounded-xl text-green-800 font-serif'>ADD +</button>
                    </div>
                </div>
            </div>
            
            )
        })
       }
    </div>
  )
}
