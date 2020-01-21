import React from 'react'



const Todo = ({state}) => {
   
    return(
        <div>
            <h1> Todo List</h1>
            <div className="todo-list">
                <p>{state.item}</p>
            </div>
        </div>
    )
}

export default Todo;