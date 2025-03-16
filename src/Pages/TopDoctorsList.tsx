import React from "react";
// import { doctors } from "../Data/DoctoreData";
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

    return (
        <div className="p-6 min-h-screen">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Top Doctors to Book
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Simply browse through our extensive list of trusted doctors.
            </p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="p-2 rounded-2xl border shadow-lg">
                            <Skeleton height={180} className="w-full rounded-xl mb-4" />
                            <Skeleton width={120} height={20} />
                            <Skeleton width={150} height={18} />
                            <Skeleton width={100} height={18} />
                            <Skeleton width={80} height={20} />
                        </div>
                    ))
                    : doctors.map((doctor, index) => (
                        <NavLink
                            to={`/DoctoreAboutPage/${doctor._id}`}
                            key={index}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-2xl transition duration-300 border border-black shadow-lg"
                            >
                                <motion.img
                                    src={doctor.profile_picture}
                                    alt={doctor.name}
                                    className="w-full h-[180px] object-cover rounded-xl mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <h3 className="text-lg font-semibold text-green-600">{doctor.name}</h3>
                                <p className="text-gray-500">{doctor.specialization}</p>
                                <p className="text-gray-700 font-medium">
                                    Experience: {doctor.experience}
                                </p>
                                <p className="text-gray-800 font-bold">
                                    Fee: {doctor.appointment_fee}
                                </p>
                            </motion.div>
                        </NavLink>
                    ))}
            </motion.div>

        </div>
    );
};

export default TopDoctorsList;
