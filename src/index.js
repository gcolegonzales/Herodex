// Tools
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Local Files
import App from './App';
import { searchReducer } from './reducers/search';
import './index.css';

const store = createStore(combineReducers({
    search: searchReducer
}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);