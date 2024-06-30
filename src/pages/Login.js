import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
