


// action initial
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"
export const ADD_TRANSACTION = "ADD_TRANSACTION"

//action creator
// export const formAction = async (data) => {

//     let res = await axios.post("http://localhost:5000/add", data);
//     console.log(res.data);
//     return {
//         type: CALL_FORM,
//         payload: res.data
//     }

// }


export function deleteTransaction(id) {
    return {
        type: DELETE_TRANSACTION,
        payload: id
    };
}

export function addTransaction(transaction) {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    };
}