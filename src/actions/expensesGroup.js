import moment from 'moment'
import database from '../firebase/firebase'

export const addExpenseGroup = (expensesGroup) => ({
    type: 'ADD_EXPENSES_GROUP',
    expensesGroup
})

export const startAddExpenseGroup = (expensesGroupData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = ''
        } = expensesGroupData
        const expensesGroup = { 
            description,
            createdAt: moment().valueOf()
         }

        return database.ref(`users/${uid}/expensesGroup`).push(expensesGroup).then((ref) => {
            dispatch(addExpenseGroup({
                id: ref.key,
                ...expensesGroup
            }))
        })
    }
}

export const setExpensesGroup = (expensesGroup) => ({
    type: 'SET_EXPENSES_GROUP',
    expensesGroup
})

export const startSetExpensesGroup = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return database.ref(`users/${uid}/expensesGroup`).once('value').then((snapshot) => {
            const expensesGroup = []

            snapshot.forEach((childSnapshot) => {
                expensesGroup.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpensesGroup(expensesGroup))
        })
    }
}