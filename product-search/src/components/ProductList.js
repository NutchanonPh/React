import React, {useEffect, useState} from 'react'

export default function ProductList(props) {
    const {searchText} = props
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/products/search?q=' + searchText)
        .then(resp => resp.json())
        .then(rs => {
            setData(rs)
        })
    }, [searchText])

    // ให้ทำ Search จากช่อง input แล้วแสดงรายการตามเงื่อนไข
    // ให้ทำ Search Debounce : Delay Input ประมาณ 1 วินาทีค่อยส่ง Request

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