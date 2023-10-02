import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact/Contact"

test('it should load contact component',()=>{
    // first render component
    render(<Contact/>)
   
    // get data to check
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
})