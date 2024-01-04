import React, {useEffect, useState} from 'react'
import useProduct from '../hooks/useProduct'

export default function ProductList() {
    const {data} = useProduct()

    return (
        <div className="product-list">
            <ul>
                {data.products?.map(el => (
                    <li key={el.id}>{el.title} | {el.price}</li>
                ))}
            </ul>
        </div>
    )
}