import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItemList from '../RestaurantMenu/CategoryItemList'
import { clearCart } from '../../store/cart'

    
export default Cart = () =>{

    const cartItems = useSelector(store=> store?.cart?.items)
    const dispatch = useDispatch()

    const handleClearCart = () =>{
      dispatch(clearCart())
    }

    const getCartHeading = () =>{
      return cartItems?.length >0 ? <h1 className='text-2xl font-bold text-teal-700'>Items in Cart</h1> : <h1 className='text-2xl font-bold text-red-400'>Add Items to your Cart !!</h1>
    }
    return (
         <div className='text-center p-4 mx-4 flex-col justify-center items-center'>
           <div className='flex justify-center'>
            {getCartHeading()}
            {cartItems?.length ?<button className='px-2 mx-2 border text-red-500 border-red-400 rounded-lg' onClick={handleClearCart}>Clear Cart</button>:''}
           </div>
           
           <div className='w-6/12 m-auto'>
            <CategoryItemList items={cartItems}/>
           </div>
         </div>
    )
 }
 