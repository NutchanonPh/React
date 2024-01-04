import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

export default function ProfileInfo() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
    </div>
  )
}
