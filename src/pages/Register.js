import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
