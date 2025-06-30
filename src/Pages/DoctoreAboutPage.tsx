/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AllDoctors } from "../Redux Toolkit/Features/All-Doctors";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";
import { DetchinAllDoctors } from "../Redux Toolkit/Features/All-Doctors";
import { useParams } from "react-router-dom";
import { SpecialAppointment } from "../Redux Toolkit/Features/All-SpecialAppointment";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const DoctoreAboutPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isModalOpen, setModalOpen] = useState(false);
    const [doctorID, SetId] = useState<string | undefined>('');
    const [doctors, setalldoctors] = useState<AllDoctors[]>([])
    const dispatch = useAppDispatch();

    const alldcotors = useSelector((state: RootState) => state.AllDoctors.AllDoctors);

    useEffect(() => {
        dispatch(DetchinAllDoctors())
    }, [dispatch])

    useEffect(() => {
        if (alldcotors.length > 0) {
            setalldoctors(alldcotors)
        }
    }, [alldcotors])

    const sedAllData = (id: string | undefined) => {
        SetId(id)
        setModalOpen(true)
    }

    const filterdoctore = doctors.find((doc) => doc._id === id);
    const ReativeDoctore = doctors.filter((doct) => doct.specialization === filterdoctore?.specialization && doct._id !== id);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Doctor Details Section */}
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl border border-white/20">
                        <div className="flex flex-col lg:flex-row">
                            {/* Doctor Image */}
                            <motion.div
                                className="relative w-full lg:w-2/5 h-80 lg:h-auto overflow-hidden"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <img
                                    src={filterdoctore?.profile_picture}
                                    alt={filterdoctore?.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                {/* Status Badge */}
                                <div className="absolute top-6 right-6">
                                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                        Available Today
                                    </div>
                                </div>
                            </motion.div>

                            {/* Doctor Information */}
                            <motion.div
                                className="p-8 lg:p-12 flex flex-col justify-center w-full lg:w-3/5"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="mb-6">
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-2">
                                        Dr. {filterdoctore?.name}
                                    </h1>
                                    <div className="flex items-center text-lg text-gray-600 mb-4">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                            MBBS
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {filterdoctore?.specialization}
                                        </span>
                                    </div>
                                </div>

                                {/* Experience & Rating */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            {filterdoctore?.experience}
                                        </div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
                                        <div className="flex items-center text-2xl font-bold text-yellow-600 mb-1">
                                            4.8 ⭐
                                        </div>
                                        <div className="text-sm text-gray-600">Patient Rating</div>
                                    </div>
                                </div>

                                {/* About */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">About Doctor</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {filterdoctore?.about || "Dedicated healthcare professional committed to providing exceptional patient care with years of specialized experience."}
                                    </p>
                                </div>

                                {/* Fee & Booking */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-xl">
                                        <div className="text-sm text-gray-600 mb-1">Consultation Fee</div>
                                        <div className="text-2xl font-bold text-green-600">
                                            ${filterdoctore?.appointment_fee}
                                            {/* ₹ */}
                                        </div>
                                    </div>

                                    <motion.button
                                        className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => sedAllData(filterdoctore?._id)}
                                    >
                                        📅 Book Appointment
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Related Doctors Section */}
                {ReativeDoctore.length > 0 && (
                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-4">
                                Related Doctors
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Other specialists in {filterdoctore?.specialization} who can help you
                            </p>
                        </div>

                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {ReativeDoctore.map((doctor) => (
                                <motion.div
                                    key={doctor._id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <NavLink to={`/DoctoreAboutPage/${doctor._id}`}>
                                        <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative z-10">
                                                <div className="relative mb-4 overflow-hidden rounded-xl">
                                                    <img
                                                        src={doctor.profile_picture}
                                                        alt={doctor.name}
                                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-3 right-3">
                                                        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-green-600">
                                                            Available
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                                    Dr. {doctor.name}
                                                </h3>

                                                <div className="space-y-2">
                                                    <div className="flex items-center text-gray-600">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                        <span className="text-sm font-medium">{doctor.specialization}</span>
                                                    </div>

                                                    <div className="flex items-center text-gray-600">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                        <span className="text-sm">{doctor.experience} Experience</span>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="text-lg font-bold text-green-600">
                                                            ${doctor.appointment_fee}
                                                            {/* ₹ */}
                                                        </div>

                                                        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                            View Profile
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </div>

            {/* Appointment Modal */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} doctorID={doctorID} />
        </div>
    );
};

interface AppointmentModalProps {
    isOpen: boolean;
    doctorID: string | undefined;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, doctorID }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SpecialAppointment>();
    const { user } = useUser();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const doctors = useSelector((state: RootState) => state.AllDoctors.AllDoctors);

    useEffect(() => {
        dispatch(DetchinAllDoctors());
    }, [dispatch]);

    const filterdoctore = doctors.find((doc) => doc._id === doctorID);

    const onSubmit: SubmitHandler<SpecialAppointment> = async (data: SpecialAppointment) => {
        if (!user) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            navigate("/SigninPages");
            return;
        }

        const formData = new FormData();
        formData.append("appointmentDate", data.appointmentDate.toString());
        formData.append("appointmentTime", data.appointmentTime);
        formData.append("department", data.department);
        formData.append("doctor", data.doctor);
        formData.append("message", data.message);
        formData.append("patientEmail", data.patientEmail.toString());
        formData.append("patientName", data.patientName || "");
        formData.append("phonnumber", data.phonnumber || "");

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-Specile/SpecileAppointments/create/${user.id}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
                reset();
                setTimeout(() => {
                    onClose();
                }, 999);
            }
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>);
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <ToastContainer />
                <motion.div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-3xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold">Book Appointment</h2>
                                <p className="text-blue-100">with Dr. {filterdoctore?.name}</p>
                            </div>
                            <motion.button
                                onClick={onClose}
                                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Patient Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    {...register("patientName", { required: "Full Name is required" })}
                                    placeholder="Enter your full name"
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100"
                                />
                                {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                                <input
                                    type="email"
                                    {...register("patientEmail", { required: "Email is required" })}
                                    placeholder="Enter your email"
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100"
                                />
                                {errors.patientEmail && <p className="text-red-500 text-sm">{errors.patientEmail.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                                <input
                                    type="tel"
                                    {...register("phonnumber", { required: "Phone Number is required" })}
                                    placeholder="Enter your phone number"
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100"
                                />
                                {errors.phonnumber && <p className="text-red-500 text-sm">{errors.phonnumber.message}</p>}
                            </div>

                            {/* Department */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Department *</label>
                                <select
                                    {...register("department", { required: "Department is required" })}
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100"
                                >
                                    <option value="">Choose Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Gynecology">Gynecology</option>
                                </select>
                                {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
                            </div>

                            {/* Doctor */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Doctor</label>
                                <input
                                    {...register("doctor", { required: "Doctor selection is required" })}
                                    className="w-full p-4 border border-gray-200 rounded-xl bg-blue-50 text-blue-800 font-semibold"
                                    value={`Dr. ${filterdoctore?.name}`}
                                    readOnly
                                />
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Appointment Date *</label>
                                <input
                                    type="date"
                                    {...register("appointmentDate", { required: "Date is required" })}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100"
                                />
                                {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate.message}</p>}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Message *</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                placeholder="Describe your symptoms or reason for visit..."
                                rows={4}
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-100 resize-none"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            🎯 Confirm Appointment
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DoctoreAboutPage;