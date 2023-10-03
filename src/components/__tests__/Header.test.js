import React from 'react'
import Header from '../Header/header'
import store from '../../store/store'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


describe('Header component test cases',()=>{

    test("it should load header component with Cart link", ()=>{
        // first render component
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    
        // get data to check
       const cart = screen.getByText(/Cart/)
       expect(cart).toBeInTheDocument()
    });

})