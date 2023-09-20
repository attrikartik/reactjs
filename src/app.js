import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/Header/header'
import Body from './components/Body/body'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Error from './components/Error/ErrorPage'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu'

const AppLayout = () =>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ]
    }
])
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)