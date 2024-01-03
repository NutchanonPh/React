import React, {useState} from "react"
import SearchBar from "./SearchBar.js"
import Producttable from "./ProductTable.js"
import PRODUCTS from "../data/data.js"

function FilterableProductTable() {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <div className="filter-table">
            <SearchBar filterText={filterText} setFilterText={setFilterText} inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
            <Producttable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    )
}
export default FilterableProductTable