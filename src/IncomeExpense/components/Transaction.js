import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTransaction } from '../action/ExpenseAction';



export const Transaction = ({ transaction }) => {
    const id = transaction.id
    const dispatch = useDispatch();


    //console.log(transaction.id)

    //const [showHide, setShowHide] = useState(false);

    // const MouseOver = () => {
    //     <i className="fas fa-trash-alt" style={{ color: "#f25304" }}></i>
    // }

    const sign = transaction.amount > 0 ? <i className="fas fa-dollar-sign" style={{ color: "#92c741" }}> +</i> : <i className="fas fa-dollar-sign" style={{ color: "#ce5229" }}> -</i>
    //const show = showHide === true ? <i className="fas fa-trash-alt" onClick={() => deleteTransaction(transaction.id)} style={{ color: "#f25304", cursor: "pointer" }}></i> : ""
    return (
        <div className="d-flex justify-content-between align-items-center" style={{ listStyle: "none", borderBottom: "1px solid #e0d9d9", padding: "3px" }}>
            {transaction.text} <span>{sign} {Math.abs(transaction.amount)}</span> &nbsp;<i className="fas fa-trash-alt" onClick={() => dispatch(deleteTransaction(id))} style={{ color: "#f25304", cursor: "pointer" }}></i>
        </div>
    )
}
