import React, { useState, useEffect } from "react";


function BookingDetails({ booking, setBooking }) {

    return (
        <>
            <h1 className="sr-only">Book Room</h1>
            <h2 className="pl-5 text-2xl">Step 1: Check Property Details</h2>

            <div className="p-5 ">
                <div className="flex flex-col md:flex-row md:justify-between w-full bg-gray-200 rounded-sm  overflow-hidden shadow-xl">
                    <div className="md:w-1/4">
                        <img
                            src={"http://placehold.it/300x300?text=image not available"}
                            alt="room image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-5 md:w-3/4">
                        <div className="font-semibold text-2xl flex flex-col md:flex-row md:justify-between">
                            <span>Property Name</span>
                            <span>
                                Kshs.<span>Price</span>
                            </span>
                        </div>
                        <div className="mt-8">
                            <div className="flex flex-col md:flex-row md:justify-between items-center">
                                <label
                                    htmlFor="check-in"
                                    className="mr-5 text-gray-900 md:w-1/4"
                                >
                                    Check-in
                                </label>
                                <input
                                    id="check-in"
                                    className="mt-2 md:mt-0 px-6 py-3 wf w-full md:w-3/4"
                                    type="date"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between items-center mt-4">
                                <label
                                    htmlFor="check-out"
                                    className="mr-5 text-gray-900 md:w-1/4"
                                >
                                    Check-out
                                </label>
                                <input
                                    id="check-out"
                                    className="mt-2 md:mt-0 px-6 py-3 wf w-full md:w-3/4"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDetails