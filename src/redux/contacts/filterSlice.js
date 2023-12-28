import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {query: ''},
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        }
    }
})

export const {setQuery} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;