import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

function UserContextProvider(props) {
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/users/1')
            .then((res)=>res.json())
            .then(data=>{
                console.log(data)
                setUser(data)
            })
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export  {UserContextProvider}
export default UserContext