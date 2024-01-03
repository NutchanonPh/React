import React, {useEffect} from 'react'

function SearchBar() {
    const docClick = ()=> alert(999)
    useEffect(()=> {
        console.log('SearchBar : useEffect start')
        // contextmenu => คลิกขวา
        document.addEventListener('contextmenu', docClick)
        //clean-up function
        return ()=> {
            document.removeEventListener('contextmenu', docClick)
            console.log('SearchBar : useEffect return')
        }
    },[])

    return (
        <div className="search-bar">
            {console.log('JSX in Searchbar')}
            <input type="text"/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar