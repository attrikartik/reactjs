import React from 'react'
import RestaurantCard from '../ResataurantCard/RestaurantCard'
import MOCK_DATA from '../__mocks__/ResMenuMock.json'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe('Restaurant Card component test cases',()=>{

    test("it should redner restaurant card with props data", ()=>{
        // first render component
        render(<RestaurantCard res={{data:MOCK_DATA}}/>)
    
        // get data to check
        const resName = screen.getByText('Kannur food kitchen')
        expect(resName).toBeInTheDocument()
    });

})