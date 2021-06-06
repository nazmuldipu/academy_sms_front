import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'students',
    initialState: {
        page: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        studentsRequested: (students, action) => {
            students.loading = true;
        },
        studentsReceived: (students, action) => {
            students.page = action.payload
            students.loading = false;
            students.lastFetch = Date.now();
        },
        studentsRequestFailed: (students, action) => {
            students.loading = false;
        },
        studentAdded: (students, action) => {
            students.page.docs.push(action.payload)
        },
        studentUpdated: (students, action) => {
            const index = students.page.docs.findIndex(c => c._id === action.payload._id);
            students.page.docs.splice(index, 1, action.payload);
        },
        studentDeleted: (students, action) => {
            const index = students.page.docs.findIndex(c => c._id === action.payload._id);
            students.page.docs.splice(index, 1);
        }
    }
})

export const {
    studentAdded,
    studentUpdated,
    studentsReceived,
    studentsRequested,
    studentsRequestFailed,
    studentDeleted
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/persons";
export const loadStudents = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: studentsRequested.type,
        onSuccess: studentsReceived.type,
        onError: studentsRequestFailed.type
    }));
};

export const loadStudentsByClass = ({ groupId, page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `/group/${groupId}?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: studentsRequested.type,
        onSuccess: studentsReceived.type,
        onError: studentsRequestFailed.type

    }))
}

export const saveStudent = (studentObj) => apiCallBegan({
    url,
    method: 'post',
    data: studentObj,
    onStart: studentsRequested.type,
    onSuccess: studentAdded.type,
    onError: studentsRequestFailed.type
})

export const updateStudent = (id, studentObj) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: studentObj,
    onStart: studentsRequested.type,
    onSuccess: studentUpdated.type,
    onError: studentsRequestFailed.type
})

export const deleteStudent = (id) => apiCallBegan({
    url: url + `/${id}`,
    method: 'delete',
    onStart: studentsRequested.type,
    onSuccess: studentDeleted.type,
    onError: studentsRequestFailed.type
})