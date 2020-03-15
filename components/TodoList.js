import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    return(
        <React.Fragment>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} dispatch={props.dispatch}/>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default TodoList;