import React from 'react'
import Contact from "../Contact/Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe('Contact us component test cases',()=>{

    test("it should load contact component", ()=>{
        // first render component
        render(<Contact/>)
    
        // get data to check
        const heading = screen.getByRole("heading",  { name: /contact/i })
        expect(heading).toBeInTheDocument()
    });

    test("it should load button in component", ()=>{
        // first render component
        render(<Contact/>)
    
        // get data to check
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    });

    test("it should load input by placeholder = name in component", ()=>{
        // first render component
        render(<Contact/>)
   
        // get input field by placeholder value to check
        const inputName = screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument()
    });

    test("it should load 2 input in component", ()=>{
        // first render component
        render(<Contact/>)
    
        // get all input textboxes
        const inputName = screen.getAllByRole('textbox')
    
        // checking number of text boxes to be 2
        expect(inputName.length).toBe(2)
    });
})