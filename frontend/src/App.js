import React, { useEffect } from "react"
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

// import { ProtectedRoute } from "./ProtectedRoute"
import RedirectPage from "./Components/Global/RedirectPage"
import Unauthorized from "./Components/Global/Unauthorized"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {

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
                    {/* PUBLIC */}

                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/property/" component={Property} />

                    <Route
                        path="/search"
                        component={Search}
                    />

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
                    
                    <Route exact path="/401" component={Unauthorized} />
                    <Route exact path="*/*" component={RedirectPage} />
                </Switch>
            </Router>
        </>
    )
}
export default App