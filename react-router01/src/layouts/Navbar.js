import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/private">Private</Link>
      {/* {[1, 2, 3, 4].map(el=>(
        <Link key={el} to={`/product/${el}`}>product{el}</Link>
      ))} */}
    </nav>
  )
}

export default Navbar