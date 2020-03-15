import React from 'react';

import './Todo.css';

const Todo = (props) => {
    return (
        <li className={props.todo.completed ? 'completed' : undefined } onClick={() => props.dispatch({ type: 'TOGGLE', id: props.todo.id })}>{props.todo.item}</li>
    )
}

export default Todo;