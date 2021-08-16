import React from "react";
import Header from "../Global/Header"
import Footer from "../Global/Footer"
import Border from "../Global/Border"
import Property from "./Property";
import PropertyGoogleMap from './PropertyGoogleMap'

function PropertyMain(props) {
 
    return (
        <>
            <Header/>
            <Border />
            <Property/>
            <PropertyGoogleMap/>
            <Footer />
        </>
    )
}

export default PropertyMain