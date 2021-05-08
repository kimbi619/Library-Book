import React from 'react'

const Button = ({text, bg, color, border, onCreateUser}) => {
    return <div onClick = {onCreateUser} draggable = 'true' className = {`admin-btn ${border ? 'border' : ''}`} style ={{background: bg, color: color}}>{text}</div>
}

export default Button
