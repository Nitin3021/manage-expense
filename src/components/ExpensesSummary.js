import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { toastGroup } from '../actions/toasts';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');

    useEffect(() => {
        props.toastGroup(props.groupId)
    })

    const checkLink = () => {
        if (props.expensesGroupMatch === undefined) {
            return <Redirect to='/InvalidId' />
        }
    }

    return (
        <div className="page-header">
            {checkLink()}
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to={`/create/${props.groupId}`}>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const groupId = (window.location.href).split('/dashboard/')[1];
    const visibleExpenses = selectExpenses(groupId, state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesGroupMatch: state.expensesGroup.find((expenseGroup) => expenseGroup.id === groupId),
        groupId
    };
};

const mapDispatchToProps = (dispatch) => ({
    toastGroup: (groupId) => dispatch(toastGroup(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesSummary);