import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
            <nav className="flex items-center container mx-auto">
                <div>
                    <a href="/" className="text-green-500 italic text-4xl">
                        Welcome to TunTrans
                    </a>
                </div>
                <ul className="list-none flex justify-center items-center ml-auto gap-5">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/booking">Booking</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
