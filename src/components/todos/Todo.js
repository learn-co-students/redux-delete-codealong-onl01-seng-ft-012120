import React from 'react'


const Todo = props => {
    console.log(props)
    return <li>{props.text} <button id={props.itemId} onClick={(event) => {props.removeTodo(event.target.id)}}>Remove</button></li>
}


export default Todo;
