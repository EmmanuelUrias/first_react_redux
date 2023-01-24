import  { createSlice }  from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const toDoSlice = createSlice ({
    name: 'toDo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        clearToDo: (state) => {
            return { items: [] }
        }
    }
})

export const { addToDo, clearToDo } = toDoSlice.actions

export default toDoSlice.reducer