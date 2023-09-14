import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/Header/header'
import Body from './components/Body/body'


const AppLayout = () =>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)