import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileMenu = () => {
        setProfileOpen(!profileOpen);
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">StompKicks</Link>
            </div>
            <div className="navbar-menu">
                <div className="menu-item">
                    <Link to="/new">New</Link>
                </div>
                <div className="menu-item">
                    <Link to="/women">Women</Link>
                    <div className="dropdown-menu">
                        <Link to="/women/sneakers">Sneakers</Link>
                        <Link to="/women/running">Running</Link>
                        <Link to="/women/walking">Walking</Link>
                        <Link to="/women/training-gym">Training & Gym</Link>
                        <Link to="/women/sandals-flip-flops">Sandals & Flip-Flops</Link>
                    </div>
                </div>
                <div className="menu-item">
                    <Link to="/men">Men</Link>
                    <div className="dropdown-menu">
                        <Link to="/men/sneakers">Sneakers</Link>
                        <Link to="/men/running">Running</Link>
                        <Link to="/men/walking">Walking</Link>
                        <Link to="/men/training-gym">Training & Gym</Link>
                        <Link to="/men/sandals-flip-flops">Sandals & Flip-Flops</Link>
                    </div>
                </div>
                <div className="menu-item">
                    <Link to="/kids">Kids</Link>
                    <div className="dropdown-menu">
                        <Link to="/kids/boys">Boys</Link>
                        <Link to="/kids/girls">Girls</Link>
                    </div>
                </div>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="navbar-icons">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
                <div className={`profile-icon ${profileOpen ? 'clicked' : ''}`} onClick={toggleProfileMenu}>
                    <i className="fas fa-user"></i>
                    {profileOpen && (
                        <div className="profile-dropdown">
                            <Link to="/account">My Account</Link>
                            <Link to="/wishlist">Wishlist</Link>
                            <Link to="/order">Check Order/Initiate Return</Link>
                            <div className="profile-buttons">
                                <button className="auth-button" onClick={handleLogin}>Login</button>
                                <button className="auth-button register-button" onClick={handleRegister}>Register Here</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
