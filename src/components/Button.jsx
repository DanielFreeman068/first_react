import React from 'react'
import {useState} from 'react'
//rafce react, arrow, function, component, export

const Button = ({count, onClick}) => {
    return (
        <button style={{background:'pink' ,borderRadius:'15px', padding:'20px', fontFamily:'cursive'}} onClick={onClick}>
            Total # of Clicks {count}
        </button>
    )
}

export default Button