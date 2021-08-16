import React, { useState, useEffect, useRef } from "react"
import {Link} from "react-router-dom"

import Header from "../Global/Header"
import Footer from "../Global/Footer"


function Search() {
const [properties, setProperties] = useState([])
const [ppty, setPpty] = useState()

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
            <div className="p-8 flex flex-col lg:flex-row text-black">
                <ul className="mt-4 text-black">
                {properties && 
                    properties.map(property => {
                        return (
                            <div className="flex p-8 flex-row">
                            <li key={property._id} className="text-black">
                                <h2 className="text-center text-2xl uppercase">{property.roomTitle}</h2>
                                <img src={`http://localhost:5200/${property.mediaUrl}`} alt=""/>
                               <button className="text-center text-white bg-gray-800 
                                        hover:bg-gray-700 uppercase text-sm px-12 py-4 
                                        shadow hover:shadow-lg">BOOK PROPERTY</button>
                                <span className="text-sm ml-5 text-xl text-gray-800"> $75</span>        
                            </li>
                            <h2 className="justify-center text-center align-center">More here</h2>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <Footer />
        </>
    )
}
export default Search