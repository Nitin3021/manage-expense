import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { toastIt } from '../actions/toasts'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        expense["groupId"] = this.props.groupId;
        this.props.startAddExpense(expense);
        this.props.toastIt(
            'add',
            `${expense.description} added!`
        )
        this.props.history.push(`/dashboard/${this.props.groupId}`);
    };

    render() {
        return (
            <div className="box-layout_expensepage">
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
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    groupId: state.toasts.groupId
});

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    toastIt: (actionType, text) => dispatch(toastIt(actionType, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);