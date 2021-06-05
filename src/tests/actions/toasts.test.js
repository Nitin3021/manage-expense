import { 
    toastIt,
    toastReset,
    toastGroup
} from '../../actions/toasts';

test('should toastIt with expense data', () => {
    const actionType = 'add';
    const text = 'Home expense added!'
    const action = toastIt(actionType, text);

    expect(action).toEqual({
        type: 'TOAST_IT',
        actionType,
        text
    });
});

test('should set toastReset action object', () => {
    const action = toastReset();
    expect(action).toEqual({
        type: 'TOAST_RESET'
    });
});

test('should set toastGroup action object', () => {
    const action = toastGroup();
    expect(action).toEqual({
        type: 'TOAST_GROUP',
        groupId: expect.any(String)
    });
});