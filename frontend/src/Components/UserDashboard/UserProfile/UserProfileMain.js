import React, { useEffect } from "react"
import UserPersonalInfo from "./UserPersonalInfo"
import UserPassword from "./UserPassword"
import UserEmail from "./UserEmail"

import { useParams } from "react-router-dom"

function UserProfileMain() {
    let { id } = useParams()

    useEffect(() => {
        // getUser(dispatch, state.auth.token, id)
        document.title = `Profile`
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // setSuccess(dispatch, null)
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // }, [state.users.success])

    return (
        <div className="w-full md:w-6/12 xl:w-8/12 md:ml-5 bg-gray-200 p-5 rounded-sm ">
                <>
                    <UserPersonalInfo user="wilson" id="id" />
                    <UserEmail id="id" />
                    <UserPassword id="id" />
                </>
        </div>
    )
}

export default UserProfileMain