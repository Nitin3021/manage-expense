export const toastIt = (actionType = '', text = '') => ({
    type: 'TOAST_IT',
    actionType,
    text
});

export const toastReset = () => ({
    type: 'TOAST_RESET'
});
