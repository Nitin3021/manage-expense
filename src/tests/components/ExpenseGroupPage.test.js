import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseGroupPage } from '../../components/ExpenseGroupPage';
import expensesGroup from '../fixtures/expensesGroup';

let startAddExpenseGroup, history, wrapper, onSubmitSpy;

beforeEach(() => {
    startAddExpenseGroup = jest.fn();
    history = { push: jest.fn() };
    onSubmitSpy = jest.fn();
    wrapper = shallow(<ExpenseGroupPage startAddExpenseGroup={startAddExpenseGroup} expensesGroup={expensesGroup} history={history} onSubmit={onSubmitSpy} />)
});

test('should render ExpenseGroupPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop with valid form submission', () => {
    const value = 'New One';
    const wrapper = shallow(<ExpenseGroupPage startAddExpenseGroup={startAddExpenseGroup} expensesGroup={expensesGroup} history={history} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('Please provide description');
})