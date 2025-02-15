import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { doctors } from "../Data/DoctoreData";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const DoctoreAboutPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const doctorName = searchParams.get("doctorName") || "Guest";

    const filterdoctore = doctors.find((doc) => doc.name === doctorName);
    const ReativeDoctore = doctors.filter((doct) => doct.specialization === filterdoctore?.specialization);

    const [isModalOpen, setModalOpen] = useState(false);

    if (!filterdoctore) {
        return <p className="text-center text-red-500 font-bold mt-10">Doctor not found</p>;
    }

    return (
        <div>
            <motion.div className="flex items-center justify-center p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <motion.div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <motion.div className="relative w-full md:w-1/3 h-60 md:h-auto overflow-hidden" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <img src={filterdoctore.profile_picture} alt={filterdoctore.name} className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div className="p-6 flex flex-col justify-center w-full md:w-2/3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        <h2 className="text-xl font-bold text-gray-800">{filterdoctore.name}</h2>
                        <p className="text-gray-500">MBBS - {filterdoctore.specialization}</p>
                        <p className="text-gray-600 mt-2">{filterdoctore.experience} Years of Experience</p>
                        <p className="text-gray-700 mt-4 text-sm">{filterdoctore.about}</p>
                        <p className="text-lg font-semibold text-blue-600 mt-4">Appointment Fee: ${filterdoctore.appointment_fee}</p>

                        {/* Button to Open Modal */}
                        <motion.button
                            className="mt-6 bg-blue-900 text-white px-6 py-3 w-[40%] text-sm rounded-lg hover:bg-blue-600 transition-all duration-300"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setModalOpen(true)} // Open modal
                        >
                            Book Appointment
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Related Doctors Section */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Related Doctors</h2>
                <p className="text-center text-gray-600 mb-10">Simply browse through our extensive list of trusted doctors.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ReativeDoctore.map((doctor) => (
                        <NavLink to={`/DoctoreAboutPage?doctorName=${encodeURIComponent(doctor.name)}`} key={doctor.name}>
                            <div className="bg-slate-100 p-5 rounded-2xl transition duration-300 border border-black">
                                <img src={doctor.profile_picture} alt={doctor.name} className="w-full h-[180px] object-cover rounded-xl mb-4" />
                                <h3 className="text-lg font-semibold text-green-600">{doctor.name}</h3>
                                <p className="text-gray-500">{doctor.specialization}</p>
                                <p className="text-gray-700 font-medium">Experience: {doctor.experience}</p>
                                <p className="text-gray-800 font-bold">Fee: {doctor.appointment_fee}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Appointment Modal Component */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} doctorName={filterdoctore.name} />
        </div>
    );
};

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    doctorName: string;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, doctorName }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-2">Book an Appointment</h2>
                <p className="text-gray-600 mb-4">Dr. {doctorName}</p>

                {/* Form Fields */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Your Contact"
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="date"
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Confirm Booking
                    </button>
                </div>
            </motion.div>
        </div>
    );
};


export default DoctoreAboutPage;
