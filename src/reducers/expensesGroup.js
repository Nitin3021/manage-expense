const expensesGroupDefaultState = []

export default (state = expensesGroupDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES_GROUP':
            return [
                ...state,
                action.expensesGroup
            ]
        case 'SET_EXPENSES_GROUP':
            return action.expensesGroup
        default:
            return state
    }
};