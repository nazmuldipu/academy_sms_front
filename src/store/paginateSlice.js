import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'pagination',
    initialState: {
        limit: 8,
        page: 1,
        sort: 'name',
        order: 'asc',
        param: '',
    },
    reducers: {
        limitchanged: (pagination, action) => {
            pagination.limit = Number.parseInt(action.payload);
        },
        pageChanged: (pagination, action) => {
            pagination.page = action.payload;
        },
        sortChanged: (pagination, action) => {
            pagination.sort = action.payload.sort;
            pagination.order = action.payload.order;
        },
        searched: (pagination, action) => {
            pagination.param = action.payload.param;
            pagination.page = 1;
            pagination.order = 'asc';
        }
    }
});

export const {
    limitchanged,
    pageChanged,
    sortChanged,
    searched,
} = slice.actions;
export default slice.reducer;