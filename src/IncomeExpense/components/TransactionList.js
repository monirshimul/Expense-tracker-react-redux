import React from 'react'
import { useSelector } from "react-redux";
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const transaction = useSelector(state => state.transactions)
    //console.log(context.transactions[1].amount);
    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className=" col-sm-6" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", borderTop: "5px solid #568265" }}>
                <h1 className=" d-flex justify-content-center" style={{ borderBottom: "1px solid #e0d9d9" }}>History</h1>

                {transaction.map(trans => (<Transaction key={trans.id} transaction={trans} />))}









            </div>

        </div>
    )
}
