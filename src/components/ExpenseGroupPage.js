import React from "react"
import { connect } from 'react-redux'
import ExpenseListGroupItem from './ExpenseListGroupItem'
import { startAddExpenseGroup } from '../actions/expensesGroup'

export class ExpenseGroupPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expensesGroup.length !== 0 ? props.expensesGroup.description : ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.startAddExpenseGroup({ description: this.state.description })
    }

    render() {
        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Add Group ('Home expense', 'Work expense', 'Trip expense', etc...)"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <button className="button">Add Expense Group</button>
                </form>

                <div className="list-header">
                    <div className="show-for-mobile">Expenses Group</div>
                    <div className="show-for-desktop">Expenses Group</div>
                    <div className="show-for-desktop">Total Amount</div>
                </div>
                {
                    this.props.expensesGroup.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Expenses!</span>
                        </div>
                    ) : (
                        this.props.expensesGroup.map((expenseGroup) => {
                            return <ExpenseListGroupItem key={expenseGroup.id} {...expenseGroup} />
                        })
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expensesGroup: state.expensesGroup
})

const mapDispatchToProps = (dispatch) => ({
    startAddExpenseGroup: (expensesGroupData) => dispatch(startAddExpenseGroup(expensesGroupData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseGroupPage)