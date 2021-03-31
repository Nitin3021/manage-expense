import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { startRemoveExpensesGroup } from '../actions/expensesGroup';
import ModalDeletion from './ModalDeletion';

export class ExpenseListGroupItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: undefined
        }
    }

    onTriggerModal = (e) => {
        e.preventDefault()

        this.setState(() => ({ modalOpen: true }))
    }

    onRemoveGroup = (e) => {
        e.preventDefault()

        const expensesFiltered = this.props.expenses.filter((expense) => expense.groupId === this.props.id)

        expensesFiltered.forEach(expense => {
            this.props.startRemoveExpense({ id: expense.id })
        });

        this.props.startRemoveExpensesGroup({ id: this.props.id })
        window.location.reload()
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ modalOpen: undefined }))
    }

    render() {
        return (
            <div>
                <Link className="list-item" to={`/dashboard/${this.props.id}`}>
                    <div>
                        <h3 className="list-item__title">{this.props.description}</h3>
                        <span className="list-item__sub-title">{moment(this.props.createdAt).format('Do MMMM YYYY')}</span>
                    </div>
                    <img className="list-item__deleteButton" src="/images/delete.png" onClick={this.onTriggerModal} />
                </Link>
                <ModalDeletion
                    selectedOption={this.state.modalOpen}
                    onRemoveGroup={this.onRemoveGroup}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startRemoveExpensesGroup: (data) => dispatch(startRemoveExpensesGroup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListGroupItem);