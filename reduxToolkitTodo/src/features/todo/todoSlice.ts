import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: '1', text: "Learn Redux" },
        { id: '2', text: "Practice Coding" },
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

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload ? { text: action.payload.text } : todo)
        // },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },

        deleteTodo: (state) => {
            state.todos = []
        }
    },
});

export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
