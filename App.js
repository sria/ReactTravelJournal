import React from 'react'
import ReactDOm from 'react-dom'
import Header from './components/header'
import Journal from './components/journal'
import data from './data'

export default function App(){
    const travelElements = data.map(te => {
        return <Journal 
                     key={te.title}
                     item={te}
                />
    })
    
    return(
        <>
            <Header />
            {travelElements}
        </>
    )
}