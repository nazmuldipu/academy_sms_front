import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

import moment from 'moment';

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
            console.log(action.payload, index);
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
export const loadUsers = (page = 1) => (dispatch, getState) => {
    const { lastFetch } = getState().entities.users;
    const currentPage = getState().entities.users.page.page;
    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (currentPage === page && diffInMinutes < 10) return;

    dispatch(apiCallBegan({
        url: url + `?page=${page}`,
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onError: usersRequestFailed.type
    }));
};

export const saveUser = (user) => apiCallBegan({
    url,
    method: 'post',
    data: user,
    onSuccess: userAdded.type
})

export const updateUser = (id, user) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: user,
    onSuccess: userUpdated.type
})