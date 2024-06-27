import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState;

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, text: 'Learn Redux' },
            { id: 2, text: 'Practice Coding' },
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid ,
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text:action.payload.text } : todo)
        // },
        // deleteTodo: (state, action) => state.todos = []
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer