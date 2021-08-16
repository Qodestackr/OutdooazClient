import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Logout from "./Components/Logout/"

import Property from "./Components/Property"

import Book from "./Components/Book"
import Search from "./Components/Search"

import UserProfile from "./Components/UserDashboard/UserProfile"
import UserBookings from "./Components/UserDashboard/UserBookings"

import PropertyMain from "./Components/Property/index"

// import { ProtectedRoute } from "./ProtectedRoute"
import RedirectPage from "./Components/Global/RedirectPage"
import Unauthorized from "./Components/Global/Unauthorized"

import AOS from "aos"
import "aos/dist/aos.css"

import Demo from "./Components/Book/Demo"// demo

function App() {

    const [properties, setProperties] = useState([])

    const fetchProperties = async () => {
        const response = await fetch("http://localhost:5200/properties")
        const properties = await response.json()
        setProperties(properties)
    }

    const product = {
        price: 75,
        name: 'Property booking',
        description: 'Complete Your Booking For',
        image: "http://placehold.it/300x300?text=no image available"
      }


    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        })
    }, [])
    
    return (
        <>
            <Router>
                <Switch>

                <Route exact path="/demo-pay">
                <Demo product={product} />
                </Route>

                    {/* PUBLIC */}

                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/property/" component={Property} />

                    <Route path="/search">
                    <Search  fetchProperties={fetchProperties}
                        properties={properties}/>
                    </Route>

                    <Route exact path="/book" component={Book} />

                    {/* USER */}
                    <Route
                        exact
                        path="/user-profile"
                        component={UserProfile}
                    />
                    <Route
                        exact
                        path="/user-bookings"
                        component={UserBookings}
                    />

                    <Route exact path="/property" component={PropertyMain}/>
                    
                    <Route exact path="/401" component={Unauthorized} />
                    <Route exact path="*/*" component={RedirectPage} />
                </Switch>
            </Router>
        </>
    )
}
export default App