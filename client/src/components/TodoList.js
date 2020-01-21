import React, { useState, useReducer } from 'react';
import { initialState, todoReducer} from '../reducers/todoReducer';
import Todo from './Todo';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');


    const handleChanges = e => {
        setNewTodo(e.target.vaue)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', 
            payload: {
                item: newTodo,
                id: Date.now(),
                completed: false
            }})
    }

    return(
        <div>
            {state.todos.map((state) => {
                 return <Todo key={state.id} state={state} />
            })}
           

            <form >
                <input 
                type="text"
                name="newTodo"
                placeholder="New Todo"
                value={newTodo}
                onChange={handleChanges}

                />

                <button>Add</button>
            </form>

        </div>
    )
}


export default TodoList;