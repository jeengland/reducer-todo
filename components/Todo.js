import React from 'react';

import './Todo.css';
import moment from 'moment';

const Todo = (props) => {
    return (
    <li onClick={() => props.dispatch({ type: 'TOGGLE', id: props.todo.id })}>
        <span><p className={props.todo.completed ? 'completed' : undefined }>{props.todo.item}</p>&nbsp;<time className='time'>{props.todo.time ? props.todo.time.fromNow() : "   " }</time></span>
    </li>
    
    )
}

export default Todo;