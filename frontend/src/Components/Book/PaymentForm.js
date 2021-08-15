import React from "react";


function PaymentForm({ booking, setBooking, maxLengthCheck, onSubmitHandler }) {
    return (
        <>
            <h2 className="pl-5 text-2xl">Step 2: Complete Payment</h2>
            <form className="p-5" onSubmit={onSubmitHandler}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <label htmlFor="first-name" className="mr-2">Email*</label>

                    <input
                        id="first-name"
                        type="email"
                        className="p-2 border border-gray-600 mt-2 lg:w-3/4"
                        aria-required="true"
                    />
                </div>

                <span aria-hidden="true" className="text-sm text-gray-500 mt-2 inline-block">
                    * required fields
                </span>

                <h2 className="pl-5 text-2xl">Step 3: Place Order</h2>

                <button
                    type="submit"
                    className="bg-gray-700 mt-5 py-2 px-6 text-3xl text-gray-200 block w-10/12 mx-auto hover:bg-gray-900"
                >
                    BOOK
                </button>
            </form>
        </>
    )
}

export default PaymentForm;
