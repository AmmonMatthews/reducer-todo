import React, { useState, useReducer } from 'react';
import { initialState, todoReducer} from '../reducers/todoReducer';
import Todo from './Todo';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todo, setTodo] = useState('');


    const handleChanges = e => {
        setTodo(e.target.value)
        
    }

 

    const handleSubmit = e => {
        e.preventDefault();
        setTodo('');
        
    }


    return(
        <div>
             <h1> Todo List</h1>
            {state.todos.map((state) => {
                
                
                 return <Todo  key={state.id} state={state} dispatch={dispatch} />
            })}
           

            <form onSubmit={handleSubmit}>
                <input 
                id={state.id}
                type="text"
                name="todo"
                placeholder="New Todo"
                value={todo}
                onChange={handleChanges}

                />

                <button onClick={() => dispatch({type:"ADD_TODO", payload: todo})}>Add</button>
                <button onClick={() => dispatch({type:"REMOVE_COMPLETED"})}>Clear Completed</button>
            </form>

        </div>
    )
}


export default TodoList;