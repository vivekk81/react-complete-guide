import React from 'react'

const Person = (props) => {
    return(
        <div>
            <h1>i am {props.name} and my age is {props.age}</h1>
            {props.children}
        </div>
    )
}

export default Person