import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';

import rootReducer from './reducer'


// Creates simple store
const store = createStore(rootReducer)

export default store;