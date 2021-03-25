import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { toastIt } from '../actions/toasts'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        const groupId = (window.location.href).split('/create/')[1];
        expense["groupId"] = groupId;

        this.props.startAddExpense(expense);
        this.props.toastIt(
            'add', 
            `${expense.description} added!`
        )
        this.props.history.push(`/dashboard/${groupId}`);
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    toastIt: (actionType, text) => dispatch(toastIt(actionType, text))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);