import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Gemini_Generated_Image_jha65qjha65qjha6.jpeg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:px-20 z-[100]">
            <nav className="py-2 px-6 fixed top-0 left-0 w-full bg-white shadow-md z-[100]">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img src={logo} alt="Logo" className="h-20 w-16 object-cover" />

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
                            }`}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            {/* Navigation Items */}
                            {[
                                { name: "Home", path: "/" },
                                { name: "Doctors", path: "/doctors" },
                                { name: "About", path: "/about" },
                                { name: "Facilities", path: "/FacilitiesPage" },
                                { name: "Blog", path: "/BlogPage" },
                                { name: "Contact", path: "/contact" },
                                { name: "Gallery", path: "/GalleryPages" },
                            ].map((item, index) => (
                                <li key={index} className="border-b md:border-none hover:bg-blue-700 hover:rounded-lg">
                                    <Link
                                        to={item.path}
                                        className="block py-2.5 px-6 text-blue-900 hover:text-white transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {/* Signup Button (Mobile) */}
                            <li className="mt-2 md:mt-0 md:ml-4 md:hidden block pb-5">
                                <Link
                                    to="/SignupPages"
                                    className="block bg-blue-700 text-white px-5 ml-5 py-2 mt-2 rounded-lg hover:bg-blue-700 transition text-center"
                                >
                                    Create Account
                                </Link>
                            </li>
                        </div>

                        {/* Signup Button (Desktop) */}
                        <li className="mt-2 md:mt-0 md:ml-4 md:block hidden">
                            <Link
                                to="/SignupPages"
                                className="block bg-blue-900 text-white px-5 py-2 mt-1 rounded-lg hover:bg-blue-700 transition text-center"
                            >
                                Create Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
