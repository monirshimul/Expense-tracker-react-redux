// import React, {  useReducer } from 'react';
// import AppReducer from '../IncomeExpense/reducer/ExpenseReducer';
// import { Provider } from "react-redux";

// import { createStore } from "redux";

// //Initial State
// const initialState = {
//     transactions: []
// }


// //Create Context

// export const store = createStore(initialState);

// //Provider Component

// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState)

//     //Actions
//     function deleteTransaction(id) {
//         dispatch({
//             type: 'DELETE_TRANSACTION',
//             payload: id
//         });
//     }

//     function addTransaction(transaction) {
//         dispatch({
//             type: 'ADD_TRANSACTION',
//             payload: transaction
//         });
//     }
//     return (<store.Provider value={{
//         transactions: state.transactions,
//         deleteTransaction,
//         addTransaction
//     }}>
//         {children}
//     </store.Provider>);
// }