import React, {useState} from 'react'
import SearchBar from './SearchBar'

function App() {
    const [open, setOpen] = useState(false)
    return (
        <div className="app">
            <h1>Example Search Bar</h1>
            <button onClick={()=>setOpen(!open)}>Search Bar</button>
            {open && <SearchBar />}
        </div>
    )
}

export default App