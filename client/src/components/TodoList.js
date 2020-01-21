import React, { useState, useReducer } from 'react';
import { initialState, todoReducer} from '../reducers/todoReducer';
import Todo from './Todo';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');


    return(
        <div>
            <h1> Todo List</h1>
            <div className="todo-list">
                <p>{state.item}</p>
            </div>

        </div>
    )
}


export default TodoList;