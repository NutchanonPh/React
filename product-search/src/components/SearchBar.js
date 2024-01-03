import React, {useEffect, useState} from 'react'

export default function SearchBar(props) {
    const {searchText, setSearchText} = props
    const [input, setInput] = useState('')
    useEffect(()=>{
        console.log('UseEffect Start')
        const timer = setTimeout(()=>{
            setSearchText(input)
        }, 1000)
        return ()=> {
            console.log('UseEffect Return')
            clearTimeout(timer)
        }
    }, [input])
    return (
        <div className="search-bar">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        </div>
    )
}