
import React from 'react'
import Header from '../Header/header'
import Cart from '../Cart/cart'
import RestaurantMenu from '../RestaurantMenu/RestaurantMenu'
import MOCK_DATA from '../__mocks__/ResMenuMock.json'
import store from '../../store/store'
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
describe('Restaurant Menu component test cases', ()=>{

    test("it should render RestaurantMenu component", async()=>{
        // first render component
       await act(async()=>render(
           <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
           </BrowserRouter>
        ))
    
       // get accordian header
       const accordianHeader = screen.getByText('Leon Burgers and Burger Combos (23)')

       // fire click event on accordian
       fireEvent.click(accordianHeader)

       // get items inside accordian
       const itemListInAccordian = screen.getAllByTestId('accordianMenuList')

       // check items length
       expect(itemListInAccordian.length).toBe(23)

       // get ADD + buttons
       const addBtns = screen.getAllByText('ADD +')

       // fire click event on first item to add it to cart
       fireEvent.click(addBtns[0])

       // check cart heading in header
       expect(screen.getByRole('link',{name:'Cart (1)'})).toBeInTheDocument()

       expect((screen.getAllByTestId('accordianMenuList')).length).toBe(24)

       // get clear cart button
       const clearCartButton = screen.getByRole('button',{name:'Clear Cart'})

       expect(clearCartButton).toBeInTheDocument()

       // fire event to clear cart
       fireEvent.click(clearCartButton)

       expect((screen.getAllByTestId('accordianMenuList')).length).toBe(23)

       // check clear cart heading
       expect((screen.getByRole('heading',{name:'Add Items to your Cart !!'})))

    });

})