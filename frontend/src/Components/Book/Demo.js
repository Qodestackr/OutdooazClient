import './demo.css'
import React, { useState, useRef, useEffect } from 'react'
import Header from "../Global/Header"

export default function Demo({ property }) {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const paypalRef = useRef()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: property.description,
                amount: {
                  currency_code: 'USD',
                  value: property.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          setPaidFor(true)
          console.log(order)
        },
        onError: err => {
          setError(err)
          console.error(err)
        },
      })
      .render(paypalRef.current)
  }, [property.description, property.price])

  if (paidFor) {
    return (
      <>
      <Header/>
      <div className="App text-black text-3xl">
        <h1>Congrats, your booking is successful {property.name}!</h1>
      </div>
      </>
    )
  }

  return (
    <>
    <Header/>
    <div className="App">
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h1 className="text-black text-2xl">
        {property.description} for ${property.price}
      </h1>
      <img alt={property.description} src={property.image} className="demo-img"/>
      <div ref={paypalRef} className="ref"/>
    </div>
    </>
  )
}