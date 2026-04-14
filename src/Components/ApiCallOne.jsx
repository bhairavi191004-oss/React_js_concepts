import React, { useEffect, useState } from 'react'

export default function ApiCallOne() {

    const [apidata, setapidata] = useState([])

    useEffect(()=>{
        handlefetch()
    }, [])

    const handlefetch = async () => {
        let data = await fetch("https://api.escuelajs.co/api/v1/products")
        let res = await data.json()
        console.log(res)
        setapidata(res)
    }


    return (
        <div className='container'>
            {/* <button onClick={handlefetch}>Api Button</button> */}
            {apidata.map((da) => (
                <div className='product'>
                    <h2 className='title'>{da.title}</h2>
                    <img src={da.images} alt="" height={200} width={200}/>
                    <h3 className='price'>{da.price}</h3>
                </div>
            ))}
        </div>
    )
}