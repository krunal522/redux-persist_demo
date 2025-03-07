import { ADD_TODO, CHECKED_DETAILS, DELETE_TODO,UPDATE_TODO } from "../action/action";

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
        case DELETE_TODO:
            return {
                ...state,
                todoData: state.todoData.filter(item => item.id !== action.payload),
            };
        case UPDATE_TODO:
            return {
                ...state,
                todoData: state.todoData.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
            };
        default:
            return state;
    }

}
