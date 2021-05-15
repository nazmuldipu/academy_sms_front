import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import companiesReducer from '../features/companies/companiesSlice';

export default combineReducers({
    bugs: bugsReducer,
    companies: companiesReducer
})