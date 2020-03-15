import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <TodoForm dispatch={dispatch} />
            <TodoList todos={todos} />
        </React.Fragment>
    )
}

export default App;