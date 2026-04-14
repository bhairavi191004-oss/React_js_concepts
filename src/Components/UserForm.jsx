import React, { useState } from 'react'

export default function UserForm() {

    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")
    const [show,setshow] = useState(false)
    const handlename = (a) => {
        setname(a.target.value)
    }
    const handlephone = (a) => {
        setphone(a.target.value)
    }
    const handleemail = (a) => {
        setemail(a.target.value)
    }
    const handlesubmit = (a) => {
        setshow(true)
    }
    return (
    <div>
        {!show? 
        <div>
        <h1>User Form</h1>
        <label>Name: </label>
        <input onChange={handlename} type="text" placeholder = "enter your name"/>
        <br/><br/>
        <label>Phone: </label>
        <input onChange={handlephone} type="text" placeholder = "enter your phone"/>
        <br/><br/>
        <label>Email: </label>
        <input onChange={handleemail} type="email" placeholder = "enter your email"/>
        <br/><br/>
        <button onClick={handlesubmit}>Submit</button>
        </div>
        : null }
        {show? 
        <div>
            <h1>Form Submitted</h1>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Email: {email}</h2>
        </div>
        : null }
    </div>
  )
}
