import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(dat=>setData(dat))
    }, [])
    return (
        <div>
            <h1>Product Info</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

export default Product