import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: '1', text: "Learn Redux" },
        { id: '2', text: "Practice Coding" },
        { id: '3', text: "Java Coding" },
        { id: '4', text: "Python Coding" },
        { id: '5', text: "React Programming" },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(newTodo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        
        updateTodo: (state, action) => {
           state.todos.map((todo) => todo.id === action.payload.id ? {...todo,  text: action.payload.text } : todo)
        },
        
        removeTodo: (state) => {
            state.todos = []
        }
    },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
