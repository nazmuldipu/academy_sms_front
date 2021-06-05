import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'classes',
    initialState: {
        page: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        classesRequested: (classes, action) => {
            classes.loading = true;
        },
        classesReceived: (classes, action) => {
            classes.page = action.payload
            classes.loading = false;
            classes.lastFetch = Date.now();
        },
        classesRequestFailed: (classes, action) => {
            classes.loading = false;
        },
        classAdded: (classes, action) => {
            classes.page.docs.push(action.payload)
        },
        classUpdated: (classes, action) => {
            const index = classes.page.docs.findIndex(c => c._id === action.payload._id);
            classes.page.docs.splice(index, 1, action.payload);
        },
        classDeleted: (classes, action) => {
            const index = classes.page.docs.findIndex(c => c._id === action.payload._id);
            classes.page.docs.splice(index, 1);
        }
    }
})

export const {
    classAdded,
    classUpdated,
    classesReceived,
    classesRequested,
    classesRequestFailed,
    classDeleted
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/groups";
export const loadClasses = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: classesRequested.type,
        onSuccess: classesReceived.type,
        onError: classesRequestFailed.type
    }));
};

export const saveClass = (classObj) => apiCallBegan({
    url,
    method: 'post',
    data: classObj,
    onStart: classesRequested.type,
    onSuccess: classAdded.type,
    onError: classesRequestFailed.type
})

export const updateClass = (id, classObj) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: classObj,
    onStart: classesRequested.type,
    onSuccess: classUpdated.type,
    onError: classesRequestFailed.type
})

export const deleteClass = (id) => apiCallBegan({
    url: url + `/${id}`,
    method: 'delete',
    onStart: classesRequested.type,
    onSuccess: classDeleted.type,
    onError: classesRequestFailed.type
})