import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import companiesReducer from './companies';

export default combineReducers({
    bugs: bugsReducer,
    companies: companiesReducer
})