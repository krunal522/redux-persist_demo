export const CHECKED_DETAILS = "CHECKED_DETAILS"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = 'UPDATE_TODO';

export const checkMark = (data) => ({
    type: CHECKED_DETAILS,
    payload: data
})

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
})


export const deleteTodo = (data) => ({

    type: DELETE_TODO,
    payload: data
});

export const updateTodo = (updatedTodo) => ({
    type: UPDATE_TODO,
    payload: updatedTodo,
});
