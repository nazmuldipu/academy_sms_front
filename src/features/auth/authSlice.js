import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'
import { setToken } from '../../store/middleware/api';
import jwtDecode from "jwt-decode";

const tokenKey = "token";

const slice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        loading: false
    },
    reducers: {
        loggedIn: (auth, action) => {
            auth.error = "";
            auth.token = action.payload.token;
            setToken(action.payload.token);
            localStorage.setItem(tokenKey, auth.token);
        },
        loggedOut: (auth, action) => {
            auth.token = "";
            auth.error = "";
            setToken("");
            localStorage.removeItem(tokenKey);
        },
        logRequested: (auth, action) => {
            auth.loading = true;
        },
        logRequestFailed: (auth, action) => {
            auth.loading = false;
            auth.error = action.payload;
        },
    }
})

export const { loggedIn, loggedOut, logRequested, logRequestFailed } = slice.actions;

//Action creators
const url = "/auth";
export const login = (credential) => apiCallBegan({
    url,
    method: 'post',
    data: credential,
    onStart: logRequested.type,
    onSuccess: loggedIn.type,
    onError: logRequestFailed.type
})

export const getToken = (dispatch, state) => {
    const token = localStorage.getItem(tokenKey);
    if (token && !state.auth.token) {
        dispatch({ type: loggedIn.type, payload: { token: token } })
    }
    return token;
};

export const getErrorMessage = (state) => {
    return state.auth.error
}

export const isAuth = (dispatch, state) => {
    const token = localStorage.getItem(tokenKey);
    if (token && !state.auth.token) {
        dispatch({ type: loggedIn.type, payload: { token: token } })
    }
    return !!token;
}

export const getCurrentUser = (state) => {
    return jwtDecode(state.auth.toekn);
}


export default slice.reducer;