import React, { useEffect, useState } from "react"
import UserBookingItem from "./UserBookingItem"

import { useParams } from "react-router-dom"
import Pagination from "../../Global/Pagination"
import Loading from "../../Global/Loading"


function UserBookingsList() {
    const [booking, setBooking] = useState(null)

    // fetch user booking
    const fetchUserBooking = async () => {
        const token1 = localStorage.getItem("login_token")
        const token2 = localStorage.getItem("token")
        const id = token2 || token1 || ""

        const response = await fetch(`http://localhost:5000/api/auth/${id}`)
        const  data  = await response.json()
    }

    return (
        <div className="w-full md:w-6/12 xl:w-8/12 md:ml-5 bg-gray-200 p-5 rounded-sm  ">
            <h1 className="text-xl font-semibold">Your Bookings</h1>

            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                {booking &&
                    booking.map((booking) => {
                        return (
                            <UserBookingItem
                                // key={booking.id}
                                // booking={booking}
                            />
                        )
                    })}

                {!booking=== 0 && (
                    <div className=" mt-10">You have no bookings!</div>
                )}
            </div>
        </div>
    )
}

export default UserBookingsList