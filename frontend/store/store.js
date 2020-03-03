import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';
import thunkMiddleware from '../middleware/thunk_middleware';

const configureStore = (preloadedState={}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
);

export default configureStore;