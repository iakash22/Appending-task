import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    isAuthenticate: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).isAuthenticate : false,
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUserData(state, action) {
            state.user = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setUserAuthenticate(state, action) {
            state.isAuthenticate = action.payload;
        }
    }
});

export const { addUserData, setLoading,setUserAuthenticate } = authReducer.actions
export default authReducer.reducer;