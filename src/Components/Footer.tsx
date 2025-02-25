import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 md:px-24 px-7">
            <div className="container mx-auto flex flex-col items-center md:text-left md:items-start">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-white">Palwe Hospital</h2>
                        <p className="text-gray-300 mt-2 max-w-md">
                            Dedicated to providing quality healthcare with compassion and care.
                        </p>                        
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Our Doctors", "Departments", "Contact Us"].map((item, index) => (
                                <li key={index}>
                                    <Link to="/" className="text-gray-300 hover:text-white transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Our Services</h3>
                        <ul className="space-y-2">
                            {["Emergency Care", "Surgery", "Diagnostics", "Pharmacy", "Wellness Programs"].map((service, index) => (
                                <li key={index}>
                                    <Link to="/" className="text-gray-300 hover:text-white transition">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Get in Touch</h3>
                        <p className="text-gray-300">📍 123 Hospital Street, City, Country</p>
                        <p className="text-gray-300">📞 +0-000-000-000</p>
                        <p className="text-gray-300">📧 info@palwehospital.com</p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center border-t border-gray-700 mt-6 pt-4 text-gray-400 text-sm">
                © 2024 Palwe Hospital - All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
