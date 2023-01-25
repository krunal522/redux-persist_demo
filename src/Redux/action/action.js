export const CHECKED_DETAILS = "CHECKED_DETAILS"
export const ADD_TODO = "ADD_TODO"

export const checkMark = (data) => ({
    type: CHECKED_DETAILS,
    payload: data
})

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
})



