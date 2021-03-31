import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/group">
                    <h1>Expensify</h1>
                </Link>
                <p className="header__title__welcome">Welcome back, {props.displayName}!</p>
                <button className="button button--link" onClick={props.startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapStateToProps = (state) => ({
    displayName: state.auth.displayName
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);