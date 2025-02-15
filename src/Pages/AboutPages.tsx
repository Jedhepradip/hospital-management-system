import React from 'react';

const AboutPages: React.FC = () => {
    return (
        <div className="container mx-auto px-4 md:px-20 py-10 text-gray-800">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                About <span className="text-blue-600">US</span>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png"
                        alt="About Us"
                        className="w-full max-w-md rounded-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-[50%] bg-white p-0 md:p-1 rounded-lg">
                    <p className="text-sm leading-relaxed text-gray-700">
                        Welcome to <span className="text-blue-600 font-semibold">Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently.
                        At <span className="text-blue-600 font-semibold">Prescripto</span>, we understand the challenges individuals face when it comes to scheduling doctor appointments
                        and managing their health records.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                        <span className="text-blue-600 font-semibold">Prescripto</span> is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, <span className="text-blue-600 font-semibold">Prescripto</span> is here to support you every step of the way.
                    </p>

                    {/* Vision Section */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-blue-900">Our Vision</h2>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Our vision at <span className="text-blue-600 font-semibold">Prescripto</span> is to create a seamless healthcare experience for every user.
                            We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-20 py-12 text-gray-800">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                WHY <span className="text-blue-600">CHOOSE US</span>
            </h1>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 - Efficiency */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">EFFICIENCY</h2>
                    <p className="text-gray-700">
                        Streamlined appointment scheduling that fits into your busy lifestyle.
                    </p>
                </div>

                {/* Card 2 - Convenience */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">CONVENIENCE</h2>
                    <p className="text-gray-700">
                        Access to a network of trusted healthcare professionals in your area.
                    </p>
                </div>

                {/* Card 3 - Personalization */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">PERSONALIZATION</h2>
                    <p className="text-gray-700">
                        Tailored recommendations and reminders to help you stay on top of your health.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutPages;
