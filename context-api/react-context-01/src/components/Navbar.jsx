import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from '../App'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link> <br />
        <Link to='/contact'>Contact</Link> <br />
        <Link to='/service'>Service</Link> <br />
    </div>
  )
}

export default Navbar