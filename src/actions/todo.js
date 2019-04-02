
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./actionsTypes";

export function addTodo(payload: Object) {
    return {
        payload,
        type: ADD_TODO
    };
}
export function deleteTodo(index) {
    return {
        index,
        type: DELETE_TODO
    };
}
export function completeTodo(index) {
    return {
        index,
        type: COMPLETE_TODO
    };
}
