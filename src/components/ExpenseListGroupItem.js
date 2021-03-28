import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { startRemoveExpensesGroup } from '../actions/expensesGroup';

const ExpenseListGroupItem = (props) => {
    const onRemoveGroup = (e) => {
        e.preventDefault()

        const expensesFiltered = props.expenses.filter((expense) => expense.groupId === props.id)

        expensesFiltered.forEach(expense => {
            props.startRemoveExpense({ id: expense.id })
        });

        props.startRemoveExpensesGroup({ id: props.id })
        window.location.reload()
    }

    return (
        <Link className="list-item" to={`/dashboard/${props.id}`}>
            <div>
                <h3 className="list-item__title">{props.description}</h3>
                <span className="list-item__sub-title">{moment(props.createdAt).format('Do MMMM YYYY')}</span>
                <button onClick={onRemoveGroup}>Delete</button>
            </div>
        </Link>
    )
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startRemoveExpensesGroup: (data) => dispatch(startRemoveExpensesGroup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListGroupItem);