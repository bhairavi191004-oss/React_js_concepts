import React, { useState } from 'react'

let productdetails = [
    {name: "pen",price: 10},
    {name: "book",price: 50},
    {name: "soap",price: 30},
    {name: "bag",price: 200},
    {name: "bottle",price: 100}
]

export default function Character() {
    const [data, setdata] = useState(["bhavi", "jay", "latha", "meena"])
    const [details,setdetails] = useState(productdetails)
    return (
        <div>
            {data.map((anime) => (
                <h1>{anime}</h1>
            ))}
            <h1>product info</h1>
            {details.map((det) => (
                <div>
                    <h1>Name: {det.name}</h1>
                    <h3>Price: {det.price}</h3>
                </div>
            ))}
        </div>
    )
}
