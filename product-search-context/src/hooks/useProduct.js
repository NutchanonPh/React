import React, {useContext} from 'react'
import ProductContext from '../contexts/ProductContext'

function useProduct() {
    return useContext(ProductContext)
}
export default useProduct