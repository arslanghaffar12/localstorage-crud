import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                My App
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">
                            Create
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/delete">
                            Delete
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
