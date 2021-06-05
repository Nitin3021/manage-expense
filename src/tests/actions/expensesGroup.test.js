import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    removeExpensesGroup,
    startRemoveExpensesGroup,
    setExpensesGroup,
    startSetExpensesGroup,
    addExpenseGroup,
    startAddExpenseGroup
} from '../../actions/expensesGroup';

import expensesGroup from '../fixtures/expensesGroup';
import database from '../../firebase/firebase';

const uid = 'thisismahuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesGroupData = {};
    expensesGroup.forEach(({ id, description, createdAt }) => {
        expensesGroupData[id] = { description, createdAt }
    });
    database.ref(`users/${uid}/expensesGroup`).set(expensesGroupData).then(() => done());
});

test('Should setup remove Group Expense object', () => {
    const action = removeExpensesGroup({ id: '124xyz' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSES_GROUP',
        id: '124xyz'
    });
});

test('should remove expenseGroup from database', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expensesGroup[2].id;

    store.dispatch(startRemoveExpensesGroup({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSES_GROUP',
            id
        });
        return database.ref(`users/${uid}/expensesGroup/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
});

test('should setup add expense group action object with provided values', () => {
    const action = addExpenseGroup(expensesGroup[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSES_GROUP',
        expensesGroup: expensesGroup[2]
    })
})

test('should add expenseGroup to store and database', (done) => {
    const store = createMockStore(defaultAuthState);
    const expensesGroupData = {
        description: 'Whatever',
        createdAt: 0
    };

    store.dispatch(startAddExpenseGroup(expensesGroupData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSES_GROUP',
            expensesGroup: {
                id: expect.any(String),
                ...expensesGroupData
            }
        });

        return database.ref(`users/${uid}/expensesGroup/${actions[0].expensesGroup.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expensesGroupData);
        done();
    });
});

test('should setup set expenseGroup action object with data', () => {
    const action = setExpensesGroup(expensesGroup);
    expect(action).toEqual({
        type: 'SET_EXPENSES_GROUP',
        expensesGroup
    });
});

test('should fetch the expensesGroup from database', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpensesGroup()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES_GROUP',
            expensesGroup
        });
        done();
    });
});