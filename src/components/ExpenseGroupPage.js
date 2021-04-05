import React from 'react'
import { connect } from 'react-redux'
import ExpenseListGroupItem from './ExpenseListGroupItem'
import { startAddExpenseGroup } from '../actions/expensesGroup'

export class ExpenseGroupPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description) {
            this.setState(() => ({ error: 'Please provide description' }))
        } else {
            this.setState(() => ({ error: '', description: '' }));
            this.props.startAddExpenseGroup({ description: this.state.description })
        }
    }

    render() {
        return (
            <div className="box-layout_expensesgroup">
                <div className="content-container">
                    <form className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <input
                            type="text"
                            placeholder="Add Group ('Home expense', 'Work expense', 'Trip expense', etc...)"
                            autoFocus
                            className="text-area-group"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            maxLength="30"
                        />
                        <button className="button">Add Expense Group</button>
                    </form>

                    <div className="list-header">
                        <div className="show-for-mobile">Expense Group</div>
                        <div className="show-for-desktop">Expenses Group</div>
                        <div className="show-for-desktop">Action</div>
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