import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:px-20">
            <nav className="py-2 px-6 relative">
                <div className="container mx-auto flex justify-between items-center sticky top-0 bottom-0">
                    {/* Logo */}

                    <Link to="/" className="text-2xl font-bold text-blue-900 flex items-center">                     
                        Palwe Hospital
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
                        className={`absolute flex md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${isOpen ? "block" : "hidden md:flex"
                            }`}>

                        <div className="flex flex-col md:flex-row items-center justify-center">
                            {/* Home */}
                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>

                            {/* Doctors */}
                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/doctors"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Doctors
                                </Link>

                            </li>

                            {/* About */}
                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/about"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                            </li>

                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/FacilitiesPage"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Facilities
                                </Link>
                            </li>

                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/BlogPage"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Blog
                                </Link>
                            </li>


                            {/* Contact */}
                            <li className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                <Link
                                    to="/contact"
                                    className="block py-3 px-6 text-blue-900 hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>

                            <li className="mt-2 md:mt-0 md:ml-4 md:hidden block pb-5">
                                <Link
                                    to="/SignupPages"
                                    className="block bg-blue-700 text-white px-5 ml-5 py-2 mt-2  rounded-lg hover:bg-blue-700 transition text-center"
                                >
                                    Created Account
                                </Link>
                            </li>
                        </div>

                        <li className="mt-2 md:mt-0 md:ml-4 md:block hidden">
                            <Link
                                to="/SignupPages"
                                className="block bg-blue-700 text-white px-5 py-2 mt-1 rounded-lg hover:bg-blue-700 transition text-center"
                            >
                                Created Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
