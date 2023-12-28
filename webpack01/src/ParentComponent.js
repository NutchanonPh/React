import React from 'react'

export default function ParentComponent(props) {
    return (
        <div>
            <h2>Parent Area {props.name}</h2>
            <div>{props.children}</div>
        </div>
    )
}