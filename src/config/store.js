import { createStore } from 'redux';

import globalReducers from '../reducers/Index';

const store = createStore(
    globalReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;