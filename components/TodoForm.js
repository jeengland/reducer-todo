import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.dispatch({type: 'ADD', item: newTodo, id: new Date().toDateString()})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='newTodo'>New Todo
                <input onChange={handleChange} value={newTodo} name='newTodo' id='newTodo' type='text' placeholder='Take out the trash' />
            </label>
            <input type='submit' />
        </form>
    )
}

export default TodoForm;