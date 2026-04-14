import React, { useState } from 'react'

export default function MovieBook({name,rent,handleclick}) {
    // const handleclick = () => {
    //     alert("Movie Booked")
    // }
    const [data,setdata] = useState([2,3,5,4,7,8])
  return (
    <div>
        <h1>Movie Name : {name} </h1>
        <h2>Ticket : {rent} </h2>
        <button onClick={()=>handleclick(data)}>Book Ticket</button>
    </div>
  )
}
