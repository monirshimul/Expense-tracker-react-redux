import React from 'react';
import { useSelector, shallowEqual } from "react-redux";


export const Balance = () => {
    const transaction = useSelector(state => state.transactions)
    console.log("Data", transaction)


    const amounts = transaction.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <div className="row d-flex justify-content-center" >
            <div className="col-sm-8 d-flex justify-content-around" >
                <p className="display-4 text-muted">Your Balance</p>
                <p className="display-4">$<span className="text-info">{total}</span></p>
            </div>

        </div>

    )
}
