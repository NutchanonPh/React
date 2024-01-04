import React, { createContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ProductContext = createContext()

function ProductContextProvider(props) {
  const [searchText, setSearchText] = useState('')
  const urlApi = 'https://dummyjson.com/products/search?q='

//   useEffect(()=> {
//     fetch('https://dummyjson.com/products/search?q=' + searchText)
//     .then(resp => resp.json())
//     .then(rs => {
//         setData(rs)
//     })
// }, [searchText])

  const data = useFetch(urlApi, searchText)

  return (
    <ProductContext.Provider value={{searchText, setSearchText, data}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export {ProductContextProvider}
export default ProductContext