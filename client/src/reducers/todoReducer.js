


export const initialState = {
    todos: [
        {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    },

]

}
    

export const todoReducer = (state, action) => {

    switch(action.type){
       
        case 'ADD_TODO':
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            }
            return {
                ...state, 
                todos:[...state.todos, newItem]
            }
        
        case 'TOGGLE_TODO' :
               return {
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.payload) {
                        item.completed = !item.completed
                    } return {
                        ...item
                    }
                })
            }
        case 'REMOVE_COMPLETED':
            return {
                todos: state.todos.filter(item => item.completed !== true)
            }
               
            default: return state;

    };

    
}