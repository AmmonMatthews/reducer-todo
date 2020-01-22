import React from 'react'



const Todo = (props) => {
    return(
        <div>
            <div className={`todo ${props.state.completed ? ' completed ' : ''}`}
        onClick={()=> props.dispatch({ type: 'TOGGLE_TODO', payload:props.state.id})}
        >
                <p>{props.state.item}</p>
            </div>
        </div>
    )
}

export default Todo;