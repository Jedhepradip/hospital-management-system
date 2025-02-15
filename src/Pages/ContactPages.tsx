import React from 'react';

const ContactPages: React.FC = () => {
    return (
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
                    <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-slate-700 transition duration-300">
                        Explore Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPages;
