import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { UserContext } from '../../App';

import googleIcon from '../../Icon/google.png';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { firebaseGoogleLogin } from './authManager';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [message, setMessage] = useState({ success: '', msg: '' });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // google signin
    const handleGoogleLogin = () => {
        firebaseGoogleLogin()
            .then(res => {
                if (res.success) {
                    setLoggedInUser({ email: res.email });
                    history.replace(from);
                } else {
                    setMessage({ msg: res.msg, success: false });
                }
            });
    }


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Cinema Ticket</Link>
            </nav>
            <div className="login-form">
                <div className="social-login">
                    <p onClick={handleGoogleLogin}>
                        <img className='social-icon' src={googleIcon} alt="Google" />
                        <span>Continue with Google</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;