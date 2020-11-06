import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "query",
    initialState: {
        query: "",
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

const selectQueryState = state => state.query;
export const selectQuery = state => selectQueryState(state).query;

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;