import React, { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";
import { FetchinPersonalAppointment, PersonalAppointment } from "../Redux Toolkit/Features/PersonalAppointment";

import { OnlySpecialAppointment, FetchinSpecialAppointment } from "../Redux Toolkit/Features/Special-Appointment";

const ProfilePage: React.FC = () => {

    const { isSignedIn, user } = useUser();
    const dispatch = useAppDispatch();
    const appointment = useSelector((state: RootState) => state.PersonalAppointment.PersonalAppointment);
    const specialAppointment = useSelector((state: RootState) => state.SpecialUserAppointment.AllOnlySpecialAppointment)
    const [appointments, setpersonalAppoint] = useState<PersonalAppointment[]>([]);
    const [Special, setSpecial] = useState<OnlySpecialAppointment[]>([]);

    useEffect(() => {
        if (appointment) {
            setpersonalAppoint(appointment)
        }
        if (specialAppointment) {
            setSpecial(specialAppointment)
        }
    }, [appointment, appointments, specialAppointment])

    useEffect(() => {
        if (user?.id) {
            dispatch(FetchinPersonalAppointment(user?.id));
        }
        if (user?.id) {
            dispatch(FetchinSpecialAppointment(user?.id));
        }
    }, [dispatch, user?.id]);

    if (!isSignedIn) {
        return <p className="text-center text-gray-500 mt-10 text-lg">Please log in to view your profile.</p>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10"
        >
            {/* Profile Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-between border-b pb-4"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={user.imageUrl || "https://via.placeholder.com/100"}
                        alt="Profile"
                        className="md:w-16 md:h-16 w-12 h-12 rounded-full border"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{user.fullName || "No Name"}</h2>
                        <p className="text-gray-500">{user.primaryEmailAddress?.emailAddress || "No Email"}</p>
                    </div>
                </div>
                <UserButton afterSignOutUrl="/" />
            </motion.div>

            {/* Special Appointment */}
            {Special.some((apt) => apt.UserId) && (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md"
                >
                    <h3 className="font-semibold text-yellow-700">Special Appointment</h3>
                    {Special
                        .filter((apt) => apt.UserId)
                        .map((apt) => (
                            <p key={apt.id} className="text-sm">
                                {apt.doctor} - {apt.createdAt.toLocaleDateString()} at {apt.createdAt.toLocaleTimeString()} ({apt.status})
                            </p>
                        ))}
                </motion.div>
            )}

            {/* Recent Appointments (Max 2) */}
            <h3 className="mt-4 font-semibold text-gray-700 text-lg">Upcoming Appointments</h3>
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-2 space-y-2"
            >
                {appointments.slice(0, 2).map((apt, index) => (
                    <motion.li
                        key={apt.UserId}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 bg-gray-100 rounded-md flex justify-between items-center shadow-sm"
                    >
                        <div>
                            <p className="font-medium">{apt.selectDoctor}</p>
                            <p className="text-sm text-gray-600">
                                {new Date(apt.date).toLocaleDateString()} at {apt.time}
                            </p>
                        </div>
                        <span
                            className={`px-2 py-1 text-xs rounded ${apt.status === "Confirmed"
                                ? "bg-green-200 text-green-700"
                                : apt.status === "Pending"
                                    ? "bg-yellow-200 text-yellow-700"
                                    : "bg-red-200 text-red-700"
                                }`}
                        >
                            {apt.status}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default ProfilePage;
