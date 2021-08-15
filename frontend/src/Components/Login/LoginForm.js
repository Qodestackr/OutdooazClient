import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

import Loading from "../Global/Loading"

function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(typeof email, typeof password)

        const Logindata = {
            email,
            password
        }
        axios({
            method: "post",
            url: `http://localhost:5000/api/auth/login`,
            headers: {
                "Content-Type": " application/json"
            },
            data: JSON.stringify(Logindata)
        })
            .then((response) => {
                console.log(response.data)
                // localStorage.setItem("first_login", true)
                localStorage.setItem("login_token", response.data.token)
            })
            .catch((error) => {
                // window.location.replace("/")
                console.log(error)
            })
    }

    useEffect(() => {
        document.title = `Login`
    }, [])

    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center py-32">
            <h1 className="text-3xl font-semibold text-black text-center">
                Sign In To Your Account
            </h1>

            <form
                className="w-11/12 sm:w-10/12 lg:w-6/12 xl:w-4/12 bg-gray-200 p-10 rounded-sm  mt-10 border shadow-lg"
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="email" className="block text-black">
                    E-mail:{" "}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="p-2 w-full border text-black border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <label htmlFor="password" className="block mt-5 text-black">
                    Password:{" "}
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    className="p-2 w-full border text-black border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }/>

                <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
                    <button
                        className="text-center text-white bg-gray-800 hover:bg-gray-700 uppercase text-sm px-12 py-4 shadow
                    hover:shadow-lg"
                        type="submit"
                    >
                        Log In
                    </button>

                    <Link
                        to="/signup"
                        className="text-blue-800 mt-5 md:mt-0 hover:text-blue-600"
                    >
                        Create an account?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm