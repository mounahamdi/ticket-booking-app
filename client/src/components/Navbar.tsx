import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
            <nav className="flex items-center container mx-auto">
                <div>
                    <Link to="/" className="text-green-500 italic text-4xl">
                        Welcome to TransTun
                    </Link>
                </div>
                <ul className="list-none flex justify-center items-center ml-auto gap-5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
