import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

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
export const loadCompanies = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: companiesRequested.type,
        onSuccess: companiesReceived.type,
        onError: companiesRequestFailed.type
    }));
};

export const saveCompany = (company) => apiCallBegan({
    url,
    method: 'post',
    data: company,
    onStart: companiesRequested.type,
    onSuccess: companyAdded.type,
    onError: companiesRequestFailed.type
})

export const updateCompany = (id, company) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: company,
    onStart: companiesRequested.type,
    onSuccess: companyUpdated.type,
    onError: companiesRequestFailed.type
})

export const addSMS = (id, data) => apiCallBegan({
    url: url + `/buysms/${id}`,
    method: 'patch',
    data,
    onStart: companiesRequested.type,
    onSuccess: companyUpdated.type,
    onError: companiesRequestFailed.type
})

export const maxLimit = (id, data) => apiCallBegan({
    url: url + `/maxlimit/${id}`,
    method: 'patch',
    data,
    onStart: companiesRequested.type,
    onSuccess: companyUpdated.type,
    onError: companiesRequestFailed.type
})