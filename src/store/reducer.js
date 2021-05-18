import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import authReducer from '../features/auth/authSlice';
import paginationReducer from './paginateSlice';

export default combineReducers({ entities: entitiesReducer, auth: authReducer, pagination: paginationReducer });