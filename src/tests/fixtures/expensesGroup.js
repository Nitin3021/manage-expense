import moment from 'moment';

export default [{
    id: '1',
    description: 'Home Expense',
    createdAt: moment(0).valueOf()
}, {
    id: '2',
    description: 'Work Expense',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Vacay Expense',
    createdAt: moment(0).add(4, 'days').valueOf()
}];