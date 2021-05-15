import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';

export default combineReducers({
    bugs: bugsReducer,
    companies: companiesReducer,
    users: usersReducer,
})