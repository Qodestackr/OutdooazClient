import React, { useState, useEffect, useRef } from "react"
import {Link} from "react-router-dom"

import Header from "../Global/Header"
import Footer from "../Global/Footer"

import Loading from '../Global/Loading'

function Search({properties,fetchProperties}) {

useEffect(() => {
    fetchProperties()
}, [])
    return (
        <>
            <Header />
            <div className="p-8 flex flex-col lg:flex-row text-black">
                <ul className="mt-4 text-black">
                <div className="flex p-8 flex-col justify-center">
                {properties &&
                    properties.map(property => {
                        return (
                            
                            <li key={property._id} className="text-black">
                                {console.log(property)}
                                <h2 className="text-center text-2xl uppercase">{property.roomTitle}</h2>
                                <img src={`http://localhost:5200/${property.mediaUrl}`} alt="" width="100%" height="80%"/>
                              
                              <Link to='/book'><button className="text-center text-white bg-gray-800 
                                        hover:bg-gray-700 uppercase text-sm px-12 py-4 
                                        shadow hover:shadow-lg">BOOK PROPERTY</button>
                                        </Link>
                                <span className="text-sm ml-5 text-xl text-gray-800"> $75</span>        
                            </li>
                            
                        )
                    })}
                    </div>
                </ul>
                
            </div>
            <Footer />
        </>
    )
}

export default Search