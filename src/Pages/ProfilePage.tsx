
import React, { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";
import { FetchinPersonalAppointment, PersonalAppointment } from "../Redux Toolkit/Features/PersonalAppointment";
import { OnlySpecialAppointment, FetchinSpecialAppointment } from "../Redux Toolkit/Features/Special-Appointment";
import { Calendar, Clock, User, Stethoscope, Star, Activity, Phone, Mail } from "lucide-react";

const ProfilePage: React.FC = () => {
    const { isSignedIn, user } = useUser();
    const dispatch = useAppDispatch();
    const appointment = useSelector((state: RootState) => state.PersonalAppointment.PersonalAppointment);
    const specialAppointment = useSelector((state: RootState) => state.SpecialUserAppointment.AllOnlySpecialAppointment);
    const [appointments, setpersonalAppoint] = useState<PersonalAppointment[]>([]);
    const [Special, setSpecial] = useState<OnlySpecialAppointment[]>([]);

    useEffect(() => {
        if (appointment) {
            setpersonalAppoint(appointment);
        }
        if (specialAppointment) {
            setSpecial(specialAppointment);
        }
    }, [appointment, appointments, specialAppointment]);

    useEffect(() => {
        if (user?.id) {
            dispatch(FetchinPersonalAppointment(user?.id));
            dispatch(FetchinSpecialAppointment(user?.id));
        }
    }, [dispatch, user?.id]);

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case "confirmed":
                return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "pending":
                return "bg-amber-100 text-amber-800 border-amber-200";
            case "cancelled":
            case "canceled":
                return "bg-red-100 text-red-800 border-red-200";
            case "completed":
                return "bg-blue-100 text-blue-800 border-blue-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-8 text-center"
                >
                    <Stethoscope className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Required</h2>
                    <p className="text-gray-600">Please log in to view your medical profile.</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative">
                            <img
                                src={user.imageUrl || "https://via.placeholder.com/120"}
                                alt="Profile"
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-200 shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                                <Activity className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                {user.fullName || "Patient"}
                            </h1>
                            <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Mail className="w-5 h-5 text-blue-500" />
                                    <span>{user.primaryEmailAddress?.emailAddress || "No Email"}</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <User className="w-5 h-5 text-blue-500" />
                                    <span>Patient ID: {user.id?.slice(-8).toUpperCase()}</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-6 justify-center md:justify-start">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">{appointments.length}</div>
                                    <div className="text-sm text-gray-500">Regular</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">{Special.length}</div>
                                    <div className="text-sm text-gray-500">Special</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">
                                        {[...appointments.filter(apt => apt.status === "Confirmed"), ...Special.filter(apt => apt.status === "confirmed")].length}
                                    </div>
                                    <div className="text-sm text-gray-500">Confirmed</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <UserButton afterSignOutUrl="/" />
                            <div className="text-xs text-gray-500 text-center">
                                Last updated<br />
                                {new Date().toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Special Appointments */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <Star className="w-8 h-8" />
                                <div>
                                    <h2 className="text-2xl font-bold">Special Appointments</h2>
                                    <p className="text-purple-100">Priority medical consultations</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            {Special.length > 0 ? (
                                <div className="space-y-4">
                                    {Special.map((apt, index) => (
                                        <motion.div
                                            key={apt.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Stethoscope className="w-5 h-5 text-purple-600" />
                                                    <h3 className="font-semibold text-gray-800">{apt.doctor}</h3>
                                                </div>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(apt.status)}`}>
                                                    {apt.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(apt.appointmentDate).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{apt.appointmentTime}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                <User className="w-4 h-4" />
                                                <span>{apt.patientName}</span>
                                            </div>

                                            <div className="mt-2">
                                                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                                    {apt.department}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                    <p className="text-gray-500">No special appointments scheduled</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Regular Appointments */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-8 h-8" />
                                <div>
                                    <h2 className="text-2xl font-bold">Regular Appointments</h2>
                                    <p className="text-blue-100">Scheduled medical consultations</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            {appointments.length > 0 ? (
                                <div className="space-y-4">
                                    {appointments.slice(0, 5).map((apt, index) => (
                                        <motion.div
                                            key={apt.UserId}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Stethoscope className="w-5 h-5 text-blue-600" />
                                                    <h3 className="font-semibold text-gray-800">Dr. {apt.selectDoctor}</h3>
                                                </div>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(apt.status)}`}>
                                                    {apt.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(apt.date).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{apt.time}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                <User className="w-4 h-4" />
                                                <span>{apt.fullname}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                                    {apt.choosedepartment}
                                                </span>
                                                {apt.phonnumber && (
                                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                                        <Phone className="w-3 h-3" />
                                                        <span>{apt.phonnumber}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {apt.message && (
                                                <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-100">
                                                    <p className="text-xs text-gray-600 italic">"{apt.message}"</p>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}

                                    {appointments.length > 5 && (
                                        <div className="text-center pt-4">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                                                View all {appointments.length} appointments →
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                    <p className="text-gray-500">No appointments scheduled</p>
                                    <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Schedule Appointment
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-8 bg-white rounded-2xl shadow-xl p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Calendar, label: "Book Appointment", color: "blue" },
                            { icon: Phone, label: "Emergency Call", color: "red" },
                            { icon: Activity, label: "Health Records", color: "green" },
                            { icon: Star, label: "Special Care", color: "purple" }
                        ].map((action) => (
                            <motion.button
                                key={action.label}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-4 rounded-xl border-2 border-${action.color}-200 bg-${action.color}-50 hover:bg-${action.color}-100 transition-colors group`}
                            >
                                <action.icon className={`w-8 h-8 text-${action.color}-600 mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                                <div className={`text-sm font-medium text-${action.color}-700`}>{action.label}</div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePage;