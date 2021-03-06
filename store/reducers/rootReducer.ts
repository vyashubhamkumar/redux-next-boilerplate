import { combineReducers } from 'redux';
import base from './base';

const reducers = {
    base,
}

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;1