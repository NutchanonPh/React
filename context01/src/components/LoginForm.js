import React, {useContext, useState} from 'react'
import UserContext from '../contexts/UserContext'

export default function LoginForm() {
  const {setUser} = useContext(UserContext)
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()
    setUser(prv=>({...prv, firstName : input}))
  }
  return (
    <form className='login-form' onSubmit={hdlSubmit}>
        <label>
            Username : 
            <input value={input} onChange={e=>setInput(e.target.value)}/>
        </label>
        <button type="submit">Login</button>
    </form>
  )
}