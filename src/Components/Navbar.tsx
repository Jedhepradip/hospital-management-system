// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/Gemini_Generated_Image_jha65qjha65qjha6.jpeg"
// import { IoLocationOutline, IoThumbsUpOutline } from "react-icons/io5";
// import { useUser } from "@clerk/clerk-react"
// import { FaRegUserCircle } from "react-icons/fa";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const { user } = useUser();

//     return (
//         <>
//             <div className="flex flex-col md:flex-row items-center justify-around text-[15px] bg-blue-950 text-white py-2 px-4 text-center md:text-left space-y-2 md:space-y-0">
//                 <span className="flex items-center gap-2">
//                     <i className="mt-1"><IoThumbsUpOutline /></i> support@Palwehospital.com
//                 </span>
//                 <h1 className="flex items-center gap-2">
//                     <i className="mt-1"><IoLocationOutline /></i> Shree Ram Chowk, Pipeline Rd, Ahmednagar
//                 </h1>
//                 <span>Emergency No: 0241 242 5351</span>
//             </div>
//             {/* 
//             {IsAdmin === true ? <> */}
//             {/* <Admin />
//             </>
//                 :
//                 <> */}
//             <div className="md:px-2 static z-[100]">
//                 <nav className="px-6 sticky top-0 left-0 w-full bg-white z-[100]">
//                     <div className="container mx-auto flex justify-between items-center">

//                         <img src={logo} alt="" className="h-20 w-16 object-cover" />

//                         <button
//                             className="md:hidden text-black focus:outline-none"
//                             onClick={() => setIsOpen(!isOpen)}
//                         >
//                             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                         </button>

//                         {/* Navigation Links */}
//                         <ul
//                             className={`absolute flex md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${isOpen ? "block" : "hidden md:flex"
//                                 }`}>

//                             <div className="flex flex-col md:flex-row items-center justify-center">
//                                 {/* Home */}
//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/"
//                                         className="block py-2.5 px-6 text-[18px] text-black hover:text-red-500 font-medium transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Home
//                                     </Link>
//                                 </li>

//                                 {/* Doctors */}
//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/doctors"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Doctors
//                                     </Link>

//                                 </li>

//                                 {/* About */}
//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/about"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         About
//                                     </Link>
//                                 </li>

//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/FacilitiesPage"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Facilities
//                                     </Link>
//                                 </li>


//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/BlogPage"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Blog
//                                     </Link>
//                                 </li>

//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/Gallerypages"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Gallery
//                                     </Link>
//                                 </li>

//                                 {/* Contact */}
//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/contact"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Contact
//                                     </Link>
//                                 </li>

//                                 <li className="border-b md:border-none hover:rounded-lg">
//                                     <Link
//                                         to="/Appointment"
//                                         className="block py-2.5 px-6 font-medium text-[18px] text-black hover:text-red-500 transition"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         Appointment
//                                     </Link>

//                                 </li>

//                                 {!user ? <>
//                                     <li className="mt-2 md:mt-0 md:ml-4 md:hidden block pb-5">
//                                         <Link
//                                             to="/SignupPages"
//                                             className="block bg-slate-100 text-[18px] font-bold text-black py-2 mt-2  rounded-lg transition text-center"
//                                         >
//                                             Login
//                                         </Link>
//                                     </li>
//                                 </>
//                                     :
//                                     <Link to={"/ProfilePage"}>
//                                         <div className="md:hidden block mt-2 mb-3 text-2xl">
//                                             {/* <UserButton /> */}
//                                             <FaRegUserCircle />
//                                         </div>
//                                     </Link>
//                                 }
//                             </div>

//                             {!user ? <>
//                                 <li className="mt-2 md:mt-0 md:ml-4 md:block hidden">
//                                     <Link
//                                         to="/SignupPages"
//                                         className="block bg-white text-black shadow shadow-gray-30 px-5 py-2 mt-1 rounded-lg hover:bg-gray-10 font-medium transition text-center"
//                                     >
//                                         Login
//                                     </Link>
//                                 </li>
//                             </>
//                                 :
//                                 <>
//                                     <Link to={"/ProfilePage"}>
//                                         <div className="md:block hidden mt-3 text-2xl">
//                                             {/* <UserButton /> */}
//                                             <FaRegUserCircle />
//                                         </div>
//                                     </Link>
//                                 </>
//                             }
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Gemini_Generated_Image_jha65qjha65qjha6.jpeg"
import { IoLocationOutline, IoThumbsUpOutline } from "react-icons/io5";
import { useUser } from "@clerk/clerk-react"
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();

    return (
        <>
            {/* Top Info Bar - Fixed */}
            <div className="fixed top-0 left-0 right-0 z-[200] flex flex-col md:flex-row items-center justify-around text-[14px] bg-blue-950 text-white py-2 px-4 text-center md:text-left space-y-1 md:space-y-0 shadow-lg">
                <span className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                    <IoThumbsUpOutline className="text-blue-300" />
                    support@Palwehospital.com
                </span>
                <h1 className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                    <IoLocationOutline className="text-blue-300" />
                    Shree Ram Chowk, Pipeline Rd, Ahmednagar
                </h1>
                <span className="font-medium text-yellow-300">
                    Emergency No: 0241 242 5351
                </span>
            </div>

            {/* Main Navigation - Fixed */}
            <div className="fixed top-[60px] md:top-[44px] left-0 right-0 z-[150] bg-white shadow-lg backdrop-blur-sm bg-white/95">
                <nav className="px-4 md:px-6">
                    <div className="container mx-auto flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="Palwe Hospital Logo"
                                className="h-16 w-12 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-gray-700 hover:text-red-500 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-all duration-200"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        {/* Navigation Links */}
                        <ul className={`absolute md:static top-20 left-0 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 md:opacity-100 md:visible md:translate-y-0"
                            } md:flex md:items-center`}>

                            <div className="flex flex-col md:flex-row items-center justify-center py-4 md:py-0">
                                {/* Navigation Items */}
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/doctors", label: "Doctors" },
                                    { to: "/about", label: "About" },
                                    { to: "/FacilitiesPage", label: "Facilities" },
                                    { to: "/BlogPage", label: "Blog" },
                                    { to: "/Gallerypages", label: "Gallery" },
                                    { to: "/contact", label: "Contact" },
                                    { to: "/Appointment", label: "Appointment" }
                                ].map((item, index) => (
                                    <li key={index} className="border-b border-gray-100 md:border-none w-full md:w-auto">
                                        <Link
                                            to={item.to}
                                            className="block py-3 md:px-6 px-8 text-[16px] text-gray-700 hover:text-red-500 hover:bg-red-50 md:hover:bg-transparent font-medium transition-all duration-200 text-start md:text-left relative group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                    </li>
                                ))}

                                {/* Mobile User Section */}
                                {!user ? (
                                    <li className="mt-4 md:mt-0 md:ml-4 md:hidden block pb-4 px-6">
                                        <Link
                                            to="/SignupPages"
                                            className="block bg-gradient-to-r from-blue-900 to-blue-950 text-white text-[16px] font-semibold py-3 px-6 rounded-lg hover:from-blue-900 hover:to-blue-950 transition-all duration-200 md:text-center text-start shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Login
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="md:hidden block mt-4 mb-4 px-10 w-full">
                                        <div className="flex md:items-center md:justify-center ">
                                            <Link
                                                to="/ProfilePage"
                                                onClick={() => setIsOpen(false)}
                                                className="gap-2 text-gray-700 hover:text-red-500 transition-colors"
                                            >
                                                <FaRegUserCircle className="text-2xl" />
                                                {/* <span>Profile</span> */}
                                            </Link>
                                        </div>
                                    </li>
                                )}
                            </div>

                            {/* Desktop User Section */}
                            {!user ? (
                                <li className="mt-2 md:mt-0 md:ml-6 md:block hidden">
                                    <Link
                                        to="/SignupPages"
                                        className="inline-block bg-gradient-to-r from-blue-900 to-blue-950 text-white px-6 py-2.5 rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Login
                                    </Link>
                                </li>
                            ) : (
                                <li className="md:block hidden md:ml-6">
                                    <Link
                                        to="/ProfilePage"
                                        className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-50"
                                    >
                                        <FaRegUserCircle className="text-2xl" />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-[104px] md:h-[88px]"></div>
        </>
    );
};

export default Navbar;