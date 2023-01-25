import { ADD_TODO, CHECKED_DETAILS } from "../action/action";

const initialState = {
    checkData: '',
    todoData: []
}
export const TodoCheck = (state = initialState, action) => {
    switch (action.type) {
        case CHECKED_DETAILS:
            return {
                ...state,
                checkData: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todoData: [...state.todoData, action.payload]
            }
        default:
            return state;
    }

}
