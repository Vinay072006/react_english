import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

const reactElement = {
    type : 'a',
    props: {
        href : "https://www.google.com",
        target : "_blank",
    },
       children : "Google Link"
}

function MyApp(){
    return(
        <>
        <h1>Custom React Element</h1>
        </>
    )
}

const afn = React.createElement (
    'a',
    {href: "https://www.amazon.com", target: "_blank"},
    "amazon Link"
)

createRoot(document.getElementById('root')).render(

    afn
  
)
