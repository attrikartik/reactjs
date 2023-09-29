import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/Header/header'
import Body from './components/Body/body'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Error from './components/Error/ErrorPage'
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu'
import Cart from './components/Cart/cart'
import appStore from './store/store'
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

const AppLayout = () =>{
    return(
        <Provider store={appStore}>
            <div>
                <Header/>
                <Outlet/>
        </div>
        </Provider>
    )
}

// routes
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
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
])
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)