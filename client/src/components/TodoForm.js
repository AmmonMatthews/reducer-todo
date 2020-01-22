import React from 'react';




const TodoForm = () => {


    return(
             <form>
                <input 
                id={state.id}
                type="text"
                name="todo"
                placeholder="New Todo"
                value={todo}
                onChange={handleChanges}

                />

                <button onClick={handleAdd}>Add</button>
            </form>
    )
}

export default TodoForm;