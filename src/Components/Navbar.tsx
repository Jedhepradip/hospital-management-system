import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Gemini_Generated_Image_jha65qjha65qjha6.jpeg"
import { IoLocationOutline, IoThumbsUpOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-around text-[15px] bg-blue-950 text-white py-2">
                <span className="flex gap-2"> <i className="mt-1"><IoThumbsUpOutline /></i>support@Palwehospital.com</span>
                <h1 className="flex gap-2"> <i className="mt-1"><IoLocationOutline /></i>Shree ram chowk, Pipeline Rd, Ahmednagar</h1>
                <span>Emergency No : 0241 242 5351</span>
            </div>
            <div className="md:px-2 static z-[100]">

                <nav className="px-6 sticky top-0 left-0 w-full bg-white z-[100]">
                    <div className="container mx-auto flex justify-between items-center">

                        <img src={logo} alt="" className="h-20 w-16 object-cover" />

                        <button
                            className="md:hidden text-black focus:outline-none"
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
                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/"
                                        className="block py-2.5 px-6 text-[18px] text-black hover:text-red-500 font-medium transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* Doctors */}
                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/doctors"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Doctors
                                    </Link>

                                </li>

                                {/* About */}
                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/about"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/FacilitiesPage"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Facilities
                                    </Link>
                                </li>


                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/BlogPage"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </li>

                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/Gallerypages"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Gallery
                                    </Link>
                                </li>                            

                                {/* Contact */}
                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/contact"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>

                                <li className="border-b md:border-none hover:rounded-lg">
                                    <Link
                                        to="/Appointment"
                                        className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Appointment
                                    </Link>

                                </li>

                                <li className="mt-2 md:mt-0 md:ml-4 md:hidden block pb-5">
                                    <Link
                                        to="/SignupPages"
                                        className="block bg-slate-100text-[18px] text-white px-5 ml-5 py-2 mt-2  rounded-lg transition text-center"
                                    >
                                        Created Account
                                    </Link>
                                </li>
                            </div>

                            <li className="mt-2 md:mt-0 md:ml-4 md:block hidden">
                                <Link
                                    to="/SignupPages"
                                    className="block bg-white text-black shadow shadow-gray-30 px-5 py-2 mt-1 rounded-lg hover:bg-gray-10 font-medium transition text-center"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;