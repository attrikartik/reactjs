import React from 'react'
import Body from '../Body/body'
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from 'react-router-dom'

// mock browser fetch func()

// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve('MOCK_DATA')
//         }
//     })
// })
describe('Body component test cases',()=>{

    test("it should render body component", ()=>{
        // first render component
        render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>)
    
        // check search button
        const searchButton = screen.getByRole('button', {name:'Search'})

        // check search input
        const searchInput = screen.getByTestId('searchInput')

        // 2nd param obj, simulates the func { (e)=>{} } we get onChange event 
        fireEvent.change(searchInput, {
            target: { value :'burger' }
        })

        // clcik search button to search
        fireEvent.click(searchButton)

        //assert there should be 2 cards loaded
        const resCards = screen.getAllByTestId('resCard')
        
        expect(resCards.length).toBe(2)
    });

})