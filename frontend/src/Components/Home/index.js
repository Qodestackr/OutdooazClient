import React, { useEffect } from "react"

import Header from "../Global/Header"
import Footer from "../Global/Footer"
import Hero from "./Hero"

import Welcome from "./Welcome"
import ClientReviews from "./ClientReviews"

function Home() {

    useEffect(() => {
        document.title = `Outdooaz | Homepage`
    }, []) 

    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <ClientReviews/>
            <Footer />
        </>
    )
}

export default Home