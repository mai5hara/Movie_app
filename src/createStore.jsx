import { createStore as reduxCreateStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer';

export default function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            movieList: movieReducer,
        }),
        applyMiddleware(
            logger,
            thunk
        )
    )
    return store
}