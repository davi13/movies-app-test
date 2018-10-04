import { combineReducers } from 'redux';

import filter from './filterReducer';
import dataMovie from './dataMoviesReducer'
const globalReducers = combineReducers({
    filter, dataMovie
});

export default globalReducers;