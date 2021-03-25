import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListGroupItem = ({ id, description, createdAt }) => (
    <Link className="list-item" to={`/dashboard/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('Do MMMM YYYY')}</span>
        </div>
    </Link>
);

export default ExpenseListGroupItem;