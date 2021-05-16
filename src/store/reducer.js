import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import authReducer from '../features/auth/authSlice';

export default combineReducers({ entities: entitiesReducer, auth: authReducer });