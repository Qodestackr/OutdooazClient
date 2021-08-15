import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function SignupForm() {
    const [Firstname, setFirstName] = useState("")
    const [Lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(Firstname, Lastname, email, password)
        
        axios({
            method: "post",
            url: `http://localhost:5000/api/auth/register`,
            headers: {
                "Content-Type": " application/json"
            },
            data: {
                Firstname,
                Lastname,
                email: email,
                password: password,
                // is_admin: 0
            }
        })
            .then((response) => {
                console.log("signup success", response.data)
            })
            .catch((error) => {
        //         window.location.replace("/")
                    console.log(error)
            })
    }

    useEffect(() => {
        document.title = `Signup`
    }, [])

    return (
        <div className="bg-gray-100  flex flex-col justify-center items-center py-32">
            <h1 className="text-3xl font-semibold text-center text-black">
                Create a free account in order to access our services
            </h1>

            <form
                action=""
                className="w-11/12 sm:w-10/12 lg:w-6/12 xl:w-4/12 bg-gray-200 p-10 rounded-sm  mt-10 border shadow-lg"
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="FirstName" className="block text-black">
                    First Name:{" "}
                </label>
                <input
                    id="FirstName"
                    type="text"
                    name="FirstName"
                    className="p-2 w-full border border-gray-400 text-black focus:outline-none focus:border-black"
                    aria-required="true"
                    onChange={(e) =>
                        setFirstName(e.target.value)
                    }
                />

                <label htmlFor="Lastname" className="block mt-5 text-black">
                    Last Name:{" "}
                </label>
                <input
                    id="Lastname"
                    type="text"
                    name="Lastname"
                    className="p-2 w-full border border-gray-400 text-black focus:outline-none focus:border-black"
                    aria-required="true"
                    onChange={(e) =>
                        setLastName(e.target.value)
                    }
                />

                <label htmlFor="email" className="block mt-5 text-black">
                    Email:{" "}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="p-2 w-full border border-gray-400 text-black focus:outline-none focus:border-black"
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
                    className="p-2 w-full border border-gray-400 text-black focus:outline-none focus:border-black"
                    aria-required="true"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
                    <button
                        className="text-center text-white bg-gray-800 hover:bg-gray-700 uppercase text-sm px-12 py-4
                    hover:shadow-lg"
                        type="submit"
                        aria-label="sign up"
                    >
                        Sign Up
                    </button>

                    <Link
                        to="/login"
                        className="text-gray-800 mt-5 md:mt-0 hover:text-gray-600 text-black"
                    >
                        Already have an account?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignupForm