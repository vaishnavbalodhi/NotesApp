import { createSlice, nanoid } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes:[]
    },
    reducers: {
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                text: action.payload,
                update: false,
            }
            state.notes.push(note);
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        },
        updateNote: (state, action) => {
            state.notes = state.notes.map((note) => note.update === false)
        },
    }
})

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;