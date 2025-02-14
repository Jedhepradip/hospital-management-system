import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-2 px-6 bg-blue-200 shadow-md relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-900">
                    Palwe
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-blue-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${isOpen ? "block" : "hidden md:flex"
                        }`}
                >
                    {/* Home */}
                    <li className="border-b md:border-none md:ml-6">
                        <Link
                            to="/"
                            className="block py-3 px-6 text-blue-900 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    {/* Doctors */}
                    <li className="border-b md:border-none md:ml-6">
                        <Link
                            to="/doctors"
                            className="block py-3 px-6 text-blue-900 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Doctors
                        </Link>
                    </li>

                    {/* About */}
                    <li className="border-b md:border-none md:ml-6">
                        <Link
                            to="/about"
                            className="block py-3 px-6 text-blue-900 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>

                    {/* Contact */}
                    <li className="border-b md:border-none md:ml-6">
                        <Link
                            to="/contact"
                            className="block py-3 px-6 text-blue-900 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Login & Signup Buttons */}
                    <li className="md:mt-0 md:ml-6">
                        <Link
                            to="/login"
                            className="block bg-blue-900 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition text-center"
                        >
                            Login
                        </Link>
                    </li>
                    <li className="mt-2 md:mt-0 md:ml-4">
                        <Link
                            to="/signup"
                            className="block bg-blue-900 text-white px-5 py-1.5 rounded-lg hover:bg-blue-700 transition text-center"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
