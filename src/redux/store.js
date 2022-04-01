import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import toDoReducer from './reducer';

const composeRedux = composeWithDevTools();

const rootReducer = combineReducers({
    toDoList: toDoReducer,
});

const store = createStore(rootReducer, composeRedux);

export default store;
