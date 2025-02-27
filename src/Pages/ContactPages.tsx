import React from 'react';
import { motion } from "framer-motion"

const ContactPages: React.FC = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-16 py-12 text-gray-800">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">CONTACT US</h1>

                {/* Flexbox for Image & Contact Info */}
                <div className="flex flex-col md:flex-row items-end md:items-start gap-8">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-end">
                        <img
                            src="https://prescripto.vercel.app/assets/contact_image-IJu_19v_.png"
                            alt="Contact"
                            className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/2 bg-white p-6 md:p-10 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">OUR OFFICE</h2>
                        <p className="text-gray-700">
                            00000 Willms Station <br />
                            Suite 000, Washington, USA
                        </p>

                        <p className="mt-4 text-gray-700">
                            <span className="font-semibold">Tel:</span> (000) 000-0000 <br />
                            <span className="font-semibold">Email:</span> greatstackdev@gmail.com
                        </p>

                        {/* Careers Section */}
                        <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">CAREERS AT PRESCRIPTO</h2>
                        <p className="text-gray-700 mb-6">Learn more about our teams and job openings.</p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Explore Jobs
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-6 min-h-screen flex items-center justify-center">
                <motion.div
                    className="bg-white p-8 shadow-lg w-full max-w-8x5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >

                    <form className="space-y-4">
                        {/* Two-column Layout for Full Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-4 bg-gray-100 "
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-4 bg-gray-100 "
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Two-column Layout for Topic & Contact Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Topic</label>
                                <select
                                    className="w-full p-4 bg-gray-100"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="support">Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Contact Number</label>
                                <input
                                    type="tel"
                                    className="w-full p-4 bg-gray-100 "
                                    placeholder="Enter your contact number"
                                />
                            </div>
                        </div>

                        {/* Message Input (Full Width) */}
                        <div>
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                rows={8}
                                className="w-full p-4 bg-gray-100 "
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-[20%] bg-blue-950 text-white p-3 font-semibold hover:bg-green-700 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </>

    );
};

export default ContactPages;
