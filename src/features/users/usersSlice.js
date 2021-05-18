import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'users',
    initialState: {
        page: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },
        usersReceived: (users, action) => {
            users.page = action.payload
            users.loading = false;
            users.lastFetch = Date.now();
        },
        usersRequestFailed: (users, action) => {
            users.loading = false;
        },
        userAdded: (users, action) => {
            users.page.docs.push(action.payload)
        },
        userUpdated: (users, action) => {
            const index = users.page.docs.findIndex(c => c._id === action.payload._id);
            users.page.docs.splice(index, 1, action.payload);
        }
    }
})

const {
    userAdded,
    userUpdated,
    usersReceived,
    usersRequested,
    usersRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/users";
export const loadUsers = ({ page, limit, sort, order }) => (dispatch, getState) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onError: usersRequestFailed.type
    }));
};

export const saveUser = (user) => apiCallBegan({
    url,
    method: 'post',
    data: user,
    onStart: usersRequested.type,
    onSuccess: userAdded.type,
    onError: usersRequestFailed.type
})

export const updateUser = (id, user) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: user,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed.type
})

export const changePassword = (id, data) => apiCallBegan({
    url: url + `/change-password/${id}`,
    method: 'patch',
    data,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed.type
})

export const assignCompany = (id, data) => apiCallBegan({
    url: url + `/assignCompany/${id}`,
    method: 'patch',
    data,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed.type
})

export const removeCompany = (id, data) => apiCallBegan({
    url: url + `/removeCompany/${id}`,
    method: 'patch',
    data,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestFailed.type
})