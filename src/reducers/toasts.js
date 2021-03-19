const toastsReducerDefaultState = {
    actionType: '',
    text: ''
};

export default (state = toastsReducerDefaultState, action) => {
    switch (action.type) {
        case 'TOAST_IT':
            return {
                actionType: action.actionType,
                text: action.text
            };
        default:
            return state;
    }
};