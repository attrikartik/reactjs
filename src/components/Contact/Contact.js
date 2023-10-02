import React from 'react'

    
export default Contact = () =>{
    return (
         <div>
           <h1 className='font-bold text-3xl p-4 m-4'>Contact us</h1>
           <form>
              <div className='flex flex-col items-center justify-center w-4/12 m-6 p-4'>
                <input className='border border-gray-500 rounded-md text-center my-2' type='text' placeholder='name'/>
                <input className='border border-gray-500 rounded-md text-center my-2'  type='text' placeholder='message'/>
                <button className='border border-blue-500 text-red-400 rounded-md w-4/12'>Submit</button>
              </div>
           </form>
         </div>
    )
 }
 