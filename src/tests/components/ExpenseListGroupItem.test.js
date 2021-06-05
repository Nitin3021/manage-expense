import React from 'react';
import { shallow } from 'enzyme';
import expensesGroup from '../fixtures/expensesGroup';
import { ExpenseListGroupItem } from '../../components/ExpenseListGroupItem';

test('Should render ExpenseListGroupItem correctly', () => {
    const wrapper = shallow(<ExpenseListGroupItem {...expensesGroup[0]} />);
    expect(wrapper).toMatchSnapshot();
})