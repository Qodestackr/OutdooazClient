import React from "react"

import { useHistory, Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

import './f04.css'

function RedirectPage(props) {
    let history = useHistory()
    setTimeout(() => {
        history.push("/")
    }, 30000000)

    return (
        <>
            <Header />
            <div className="min-h-screen flex justify-center items-center capitalize">
            <div>
            <div className="container f04">
                <h1 className="code">404</h1>
                <Link to='/'>
                <button className="call-to-action">You're Lost, Go Home</button>
                </Link>
                <h3 className="info">Page Not Found</h3>
            </div>
        </div>
            </div>
            <Footer />
        </>
    );
}

export default RedirectPage