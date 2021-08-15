import React, { useEffect } from "react"
import UserBookingItem from "./UserBookingItem"

import { useParams } from "react-router-dom"
import Pagination from "../../Global/Pagination"
import Loading from "../../Global/Loading"


function UserBookingsList() {

    return (
        <div className="w-full md:w-6/12 xl:w-8/12 md:ml-5 bg-gray-200 p-5 rounded-sm  ">
            <h1 className="text-xl font-semibold">Your Bookings</h1>

            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
                {/* {state &&
                    state.bookings.allBookings.map((booking) => {
                        return (
                            <UserBookingItem
                                // key={booking.id}
                                // booking={booking}
                            />
                        )
                    })}

                {state.bookings.allBookings.length === 0 && (
                    <div className=" mt-10">You have no bookings!</div>
                )} */}
                Bookings
            </div>
{/* 
            {state.bookings.pagination.last_page !== 1 && (
                <Pagination
                    // paginate={state.bookings}
                    // params={[dispatch, id, state.auth.token]}
                    // method={getUserBookings}
                    // id={id}
                />
            )} */}
        </div>
    )
}

export default UserBookingsList