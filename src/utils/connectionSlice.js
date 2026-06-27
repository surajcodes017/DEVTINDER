import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name: "connections",
    initialState: null,
    reducers: {
        addConnections: (state,action) => action.payload,
        removeConnections: (state, action) => {
            return state.filter(
                (user) => user._id !== action.payload
            );
        },

        clearConnections: () => {
            return null;
        }
    }

})

export const {addConnections,removeConnections,clearConnections} = connectionSlice.actions;

export default connectionSlice.reducer;

