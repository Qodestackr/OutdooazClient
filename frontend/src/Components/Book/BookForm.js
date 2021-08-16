import React, { useState, useEffect } from "react"


import BookingDetails from "./BookingDetails"
import PaymentForm from "./PaymentForm"
import Border from "../Global/Border"
// import Loading from "../Global/Loading"


function BookForm() {

    useEffect(() => {
        document.title = `Book Property`
    }, [])

    // const product = {
    //     price: 77.77,
    //     name: 'comfy apartment',
    //     description: 'fancy apartment',
    //     image: apartment,
    //   }

    return (
        <div className="flex flex-col items-center text-gray-800 lg:my-8">

            <div className="bg-gray-300 p-5 lg:w-7/12 border border-gray-400 rounded-sm ">
                <BookingDetails/>
                <Border borderColor="border-gray-500" my="8" />
                <PaymentForm/>
                <Border borderColor="border-gray-500" my="8" />
            </div>
        </div>
    )
}

export default BookForm