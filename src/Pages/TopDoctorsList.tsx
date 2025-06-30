import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useState } from "react";
import { AllDoctors } from "../Redux Toolkit/Features/All-Doctors";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";
import { DetchinAllDoctors } from "../Redux Toolkit/Features/All-Doctors";

const TopDoctorsList: React.FC = () => {
    const [doctors, setalldoctors] = useState<AllDoctors[]>([])
    const dispatch = useAppDispatch();
    const { AllDoctors, loading } = useSelector((state: RootState) => state.AllDoctors);

    useEffect(() => {
        dispatch(DetchinAllDoctors())
    }, [dispatch])

    useEffect(() => {
        if (AllDoctors.length > 0) {
            setalldoctors(AllDoctors)
        }
    }, [AllDoctors])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
                className="max-w-7xl mx-auto text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    Top Doctors to Book
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Simply browse through our extensive list of trusted doctors and book your appointment with ease.
                </p>
            </motion.div>

            {/* Doctors Grid */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {loading
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
                                variants={cardVariants}
                            >
                                <div className="p-6">
                                    <Skeleton height={200} className="w-full rounded-2xl mb-4" />
                                    <div className="space-y-3">
                                        <Skeleton width={150} height={24} />
                                        <Skeleton width={120} height={20} />
                                        <Skeleton width={180} height={20} />
                                        <Skeleton width={100} height={24} />
                                    </div>
                                </div>
                            </motion.div>
                        ))
                        : doctors.map((doctor, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group"
                            >
                                <NavLink
                                    to={`/DoctoreAboutPage/${doctor._id}`}
                                    className="block h-full"
                                >
                                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 h-full">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <motion.img
                                                src={doctor.profile_picture}
                                                alt={doctor.name}
                                                className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                                                initial={{ opacity: 0, scale: 1.1 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.8 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            {/* Availability Badge */}
                                            <div className="absolute top-4 right-4">
                                                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                    Available
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="space-y-3">
                                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                                    {doctor.name}
                                                </h3>
                                                
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <p className="text-blue-600 font-semibold">
                                                        {doctor.specialization}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center space-x-2 text-gray-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="text-sm font-medium">
                                                        Experience: {doctor.experience}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center justify-between pt-2">
                                                    <div className="flex items-center space-x-2">
                                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                                        </svg>
                                                        <p className="text-lg font-bold text-gray-800">
                                                            {doctor.appointment_fee}
                                                        </p>
                                                    </div>
                                                    
                                                    <div className="flex items-center space-x-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                        <span className="text-sm text-gray-500 ml-1">4.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Book Now Button */}
                                            <div className="mt-6">
                                                <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 group-hover:from-blue-600 group-hover:to-green-600 group-hover:shadow-lg transform group-hover:-translate-y-1">
                                                    Book Appointment
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                className="max-w-4xl mx-auto mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                        Need Help Finding the Right Doctor?
                    </h3>
                    <p className="text-blue-100 mb-6">
                        Our medical experts are here to help you choose the best healthcare professional for your needs.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                        Get Consultation
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default TopDoctorsList;

