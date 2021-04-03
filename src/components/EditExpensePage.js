import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { toastIt } from '../actions/toasts';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.toastIt(
            'edit',
            `${this.props.expense.description} modified!`
        )
        this.props.history.push(`/dashboard/${this.props.groupId}`);
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.toastIt(
            'remove',
            `${this.props.expense.description} removed!`
        )
        this.props.history.push(`/dashboard/${this.props.groupId}`);
    };

    onButtonClick = () => {
        this.props.history.push(`/dashboard/${this.props.groupId}`);
    }

    checkLink = () => {
        if (this.props.expensesGroupMatch === undefined) {
            return <Redirect to='/InvalidId' />
        }
    }

    render() {
        return (
            <div className="box-layout_expensepage">
                {this.checkLink()}
                <div>
                    <div className="page-header">
                        <div className="content-container">
                            <div className="box_layout_expensepageheader">
                                <h1 className="page-header__title">Edit Expense</h1>
                                <button className="button button--expensepage" onClick={this.onButtonClick}>Back</button>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm
                            expense={this.props.expense}
                            onSubmit={this.onSubmit}
                        />
                        <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    groupId: state.toasts.groupId,
    expensesGroupMatch: state.expensesGroup.find((expenseGroup) => expenseGroup.id === state.toasts.groupId)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (groupId, id, expense) => dispatch(startEditExpense(groupId, id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    toastIt: (actionType, text) => dispatch(toastIt(actionType, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);