import React from 'react'
import './Card.css'

const Card = (props) => {
    console.log(props)
  return (
    <div style={{backgroundColor: `${props.color}`}} className='Card'>
        <h1>{props.day}</h1>
    </div>
  )
}

export default Card