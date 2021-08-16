import React, { useState } from "react"


function UserPassword({ id }) {
    const [userPassword, setUserPassword] = useState({
        password: "",
        newPassword: "",
        confirmNewPassword: ""
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // updateUserPassword(dispatch, id, userPassword)
        console.log('update user password')
    }

    return (
        <div className="mt-10">
            <h2 className="font-semibold">
                <i className="fas fa-unlock-alt mr-2"></i> Change your password
            </h2>
            <form
                action=""
                className="mt-5 bg-gray-300 p-5 rounded-sm "
            >
                <label htmlFor="old-password" className="block mt-5">
                    Old Password:{" "}
                </label>
                <input
                    type="password"
                    id="old-password"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <label htmlFor="new-password" className="block mt-5">
                    New Password:{" "}
                </label>
                <input
                    type="password"
                    id="new-password"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <label htmlFor="confirm-password" className="block mt-5">
                    Confirm Password:{" "}
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    className="p-2 w-full xl:w-1/2 border border-gray-400 focus:outline-none focus:border-black"
                />

                <button
                    className="text-center bg-gray-600 text-white hover:bg-gray-700 uppercase text-sm px-6 py-2 shadow
                    hover:shadow-lg block mt-5"
                    type="submit"
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UserPassword