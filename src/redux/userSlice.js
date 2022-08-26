import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "Jessica",
        age: "22", 
        description: "Iam a member of SNSD",
        url: "https://i.redd.it/7ipyf6pvqac61.png", 
        themeColor: '#f34079',
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateError: (state)=>{
            state.pending = false;
            state.error = true;
        },
        updateSuccess: (state, action)=> {
            state.pending = false;
            state.error = false;
            state.displayName = action.payload.displayName;
            state.age = action.payload.age;
            state.description = action.payload.description;
            state.url = action.payload.url;
            state.themeColor = action.payload.themeColor;
        },
    }
});

export const { updateError, updateSuccess, updateStart } = userSlice.actions;
export default userSlice.reducer;