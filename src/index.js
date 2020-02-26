import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import reducer from './IncomeExpense/reducer/ExpenseReducer';
import { Provider } from "react-redux";

import { createStore } from "redux";


const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));


