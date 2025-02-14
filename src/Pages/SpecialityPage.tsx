import React from 'react';

const SpecialityPage: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-6">
            {/* Title Section */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
                Find by Speciality
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
            </p>

            {/* Specialties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {/* General Physician */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/General physician"
                >
                    <img
                        src="data:image/svg+xml,%3csvg%20width='127'%20height='…ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>General Physician</p>
                </a>

                {/* Gynecologist */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/Gynecologist"
                >
                    <img
                        src="https://prescripto.vercel.app/assets/Gynecologist-Av1zZu4d.svg"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>Gynecologist</p>
                </a>

                {/* Dermatologist */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/Dermatologist"
                >
                    <img
                        src="data:image/svg+xml,%3csvg%20width='127'%20height='…ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>Dermatologist</p>
                </a>

                {/* Pediatricians */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/Pediatricians"
                >
                    <img
                        src="https://prescripto.vercel.app/assets/Pediatricians-C6nmx5n8.svg"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>Pediatricians</p>
                </a>

                {/* Neurologist */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/Neurologist"
                >
                    <img
                        src="https://prescripto.vercel.app/assets/Neurologist-CuaLxNpX.svg"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>Neurologist</p>
                </a>

                {/* Gastroenterologist */}
                <a
                    className="flex flex-col items-center text-sm font-medium text-gray-800 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg p-4 bg-white rounded-lg"
                    href="/doctors/Gastroenterologist"
                >
                    <img
                        src="https://prescripto.vercel.app/assets/Gastroenterologist-CTgzRFeY.svg"
                        className="w-16 sm:w-24 mb-2"
                    />
                    <p>Gastroenterologist</p>
                </a>
            </div>
        </div>
    );
};

export default SpecialityPage;
