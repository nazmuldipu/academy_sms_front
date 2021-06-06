import { combineReducers } from 'redux';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';
import classesReducer from '../features/classes/classesSlice';
import studentsReducer from '../features/students/studentsSlice';

export default combineReducers({
    companies: companiesReducer,
    users: usersReducer,
    classes: classesReducer,
    students: studentsReducer
})