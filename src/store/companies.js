import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
import moment from 'moment';

const slice = createSlice({
    name: 'companies',
    initialState: {
        page: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        companiesRequested: (companies, action) => {
            companies.loading = true;
        },
        companiesReceived: (companies, action) => {
            companies.page = action.payload
            companies.loading = false;
            companies.lastFetch = Date.now();
        },
        companiesRequestFailed: (companies, action) => {
            companies.loading = false;
        },
        companyAdded: (companies, action) => {
            companies.page.docs.push(action.payload)
        },
        companyUpdated: (companies, action) => {
            const index = companies.page.docs.findIndex(c => c._id === action.payload._id);
            console.log(action.payload, index);
            companies.page.docs.splice(index, 1, action.payload);
        }
    }
})

export const {
    companyAdded,
    companyUpdated,
    companiesReceived,
    companiesRequested,
    companiesRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/companies";
export const loadCompanies = (page = 1) => (dispatch, getState) => {
    const { lastFetch } = getState().entities.bugs;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10) return;

    dispatch(apiCallBegan({
        url: url + `?page=${page}`,
        onStart: companiesRequested.type,
        onSuccess: companiesReceived.type,
        onError: companiesRequestFailed.type
    }));
};

export const saveCompany = (company) => apiCallBegan({
    url,
    method: 'post',
    data: company,
    onSuccess: companyAdded.type
})

export const updateCompany = (id, company) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: company,
    onSuccess: companyUpdated.type
})