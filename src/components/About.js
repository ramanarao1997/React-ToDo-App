import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1 style={aboutStyle} > About </h1>
            <p style={aboutStyle} > This is Todo List app v1.0 </p>
        </React.Fragment>
    )
}

const aboutStyle = {
    textAlign:"center"
}