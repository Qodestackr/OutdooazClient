import React, { useState, useEffect, useRef } from "react"

import Header from "../Global/Header"
import Footer from "../Global/Footer"


function Search() {
const [properties, setProperties] = useState({})
    const fetchProperties = async () => {
        const response = await fetch("http://localhost:5200/properties")
        const properties = await response.json()
        setProperties(properties)
    }
useEffect(() => {
    fetchProperties()
}, [])

    return (
        <>
            <Header />
            <div className="p-8 flex flex-col lg:flex-row xl:px-32 text-black">
                <h1 className="text-black">Search for Hotels</h1>
                <h1 className="text-black" style={{fontSize: "25px"}}>APP</h1>
                <h4>APP 2</h4>
                {JSON.stringify(properties)}
            </div>
            <Footer />
        </>
    )
}
export default Search