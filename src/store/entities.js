import { combineReducers } from 'redux';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';

export default combineReducers({
    companies: companiesReducer,
    users: usersReducer,
})