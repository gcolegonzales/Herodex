// Tools
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Local Files
import App from './App';
import { searchReducer } from './reducers/search';
import './index.css';

const store = createStore(combineReducers({
    search: searchReducer
}));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);