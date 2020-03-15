import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, dispatchTodos] = useReducer(reducer, initialState)
    return (
        <TodoList todos={todos}/>
    )
}

export default App;