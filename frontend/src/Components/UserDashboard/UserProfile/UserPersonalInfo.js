import React, { useState, useEffect } from "react"

function UserPersonalInfo({ user, id }) {

    return (
        <div>
            <h2 className="font-semibold">
                <i className="fas fa-user mr-2"></i>Change your personal info
            </h2>

            <form
                action=""
                className="mt-5 bg-gray-300 p-5 rounded-sm "
            >
                <div className="flex items-center mt-5">

                    <label aria-label="upload image" className="ml-5 px-5 py-2 text-gray-200 bg-orange-500 hover:bg-orange-900 rounded-sm cursor-pointer">
                        <input
                            type="file"
                            name=""
                            id=""
                            className="hidden"

                        />
                        <i className="fas fa-camera mr-2"></i>
                        <span>Upload</span>
                    </label>
                </div>
                <label htmlFor="first_name" className="block mt-5">
                    First Name:{" "}
                </label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"                   
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <label htmlFor="last_name" className="block mt-5">
                    Last Name:{" "}
                </label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <label htmlFor="phone" className="block mt-5">
                    Phone:{" "}
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <label htmlFor="address" className="block mt-5">
                    Address:{" "}
                </label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <button
                    className="text-center bg-yellow-600 text-white hover:bg-yellow-700 uppercase text-sm px-6 py-2 shadow
                    hover:shadow-lg block mt-5"
                    type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}

export default UserPersonalInfo