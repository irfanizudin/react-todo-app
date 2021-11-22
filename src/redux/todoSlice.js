import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, message: "Belajar Angular" },
        { id: 2, message: "Belajar React" },
        { id: 3, message: "Belajar Vue" },
        { id: 4, message: "Belajar Node" },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                message: action.payload.message,
            };
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
