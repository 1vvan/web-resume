import { combineReducers, createStore } from 'redux';
import langReducer from './langReducer';

const rootReducer = combineReducers({
    language: langReducer,
})

const store = createStore(rootReducer);

export default store;