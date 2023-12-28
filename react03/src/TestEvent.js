import React from 'react'

function TestEvent() {
    const hdlClick = ()=> {
        alert('click!')
    }
    
    return (
        <button onClick={hdlClick}>Click Me</button>
    )
}

export default TestEvent