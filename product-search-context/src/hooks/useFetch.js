import React, {useState, useEffect} from 'react'

function useFetch(url, searchText) {
    const [data, setData] = useState({})

    useEffect(()=> {
        fetch(url + searchText)
        .then(resp => resp.json())
        .then(dat => setData(dat))
    }, [searchText])
    
    return data
}
export default useFetch