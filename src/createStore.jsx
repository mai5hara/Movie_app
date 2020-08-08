import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            movieList: movieReducer,
        }),
        composeWithDevTools(
            applyMiddleware(
                logger,
                thunk
            )
        )
    )
    return store
}