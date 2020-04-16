import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';
import thunkMiddleware from '../middleware/thunk_middleware';
import thunk from 'redux-thunk'

const configureStore = (preloadedState={}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;