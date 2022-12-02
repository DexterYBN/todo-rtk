import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    text: []
}

export const todo = createAction('todo')

export const removeTodo = createAction('removeTodo')

const TodoReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(todo, (state, action) => {
        state.text.push(action.payload)
    })
    .addCase(removeTodo, (state, action) => {
        state.text = state.text.filter((item, i) => action.payload !== i)
    })
    
})

export default TodoReducer