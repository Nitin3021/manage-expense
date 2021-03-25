const toastsReducerDefaultState = {
    actionType: '',
    text: ''
};

export default (state = toastsReducerDefaultState, action) => {
    switch (action.type) {
        case 'TOAST_IT':
            return {
                ...state,
                actionType: action.actionType,
                text: action.text
            };
        case 'TOAST_RESET':
            return {
                ...state,
                actionType: undefined,
                text: undefined
            };
        default:
            return state;
    }
};