import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-100 text-gray-800 py-10">
            <div className="container mx-auto px-3">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-8 border-b border-gray-400">
                    {/* Department Section */}
                    <div >
                        <h2 className="text-lg font-semibold mb-3 md:text-center">Department</h2>
                        <ul className="space-y-2 text-sm md:text-center">
                            <li>Surgery</li>
                            <li>Women's Health</li>
                            <li>Radiology</li>
                            <li>Cardiology</li>
                            <li>Medicine</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3 md:text-center">Company</h2>
                        <ul className="space-y-2 text-sm md:text-center">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Company Support</li>
                            <li>FAQ Questions</li>
                            <li>Company License</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3 md:text-center">Get in Touch</h2>
                        <p className="text-sm md:text-center">Support Available 24/7</p>
                        <p className="text-sm md:text-center">Email: support@email.com</p>
                        <p className="text-sm md:text-center">Mon - Fri: 08:30 - 18:00</p>
                        <p className="text-sm md:text-center">Phone: +23-456-6588</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3 md:text-center">Quick Links</h2>
                        <ul className="space-y-2 text-sm md:text-center">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Careers</li>
                            <li>Press & Media</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3 md:text-center">Subscribe</h2>
                        <p className="text-sm mb-2">Stay updated with our latest news.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 w-full rounded-l-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="md:px-0 px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-800">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media & Footer Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                        <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
                        <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:text-pink-700" />
                        <FaYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-800" />
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center text-sm mt-4 md:mt-0">
                        <p>Copyright © 2021, Designed & Developed by Themefisher</p>
                        <p>Your Email Address</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
