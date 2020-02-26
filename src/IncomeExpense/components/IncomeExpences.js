import React, { useState } from 'react';
import { useSelector } from "react-redux";


export const IncomeExpences = () => {
    const [colorIncome, setColorIncome] = useState('');
    const [colorExpense, setColorExpense] = useState('');
    const transaction = useSelector(state => state.transactions)
    let sum = 0;
    let subs = 0;
    transaction.map((t) => {
        if (t.amount > 0) {
            return sum += t.amount
        } else {
            return subs += t.amount
        }
    })



    const incomeColor = () => {
        //e.target.style.borderBottom = "5px solid #568265"
        setColorIncome('5px solid #568265')

    }


    const expenseColor = () => {
        //e.target.style.borderBottom = "5px solid #f25304"
        setColorExpense('5px solid #f25304')

    }

    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-sm-6 d-flex justify-content-around" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", borderTop: "5px solid #568265" }}>
                <div className="" onMouseOver={incomeColor} onMouseLeave={() => setColorIncome('')} style={{ borderBottom: colorIncome }} >
                    <h4 >Income</h4>
                    <p className="text-success">+ ${sum}</p>
                </div>
                <div className="" onMouseOver={expenseColor} onMouseLeave={() => setColorExpense('')} style={{ borderBottom: colorExpense }} >
                    <h4>Expense</h4>
                    <p className="text-danger">- ${Math.abs(subs)}</p>
                </div>
            </div>
        </div>

    )
}
