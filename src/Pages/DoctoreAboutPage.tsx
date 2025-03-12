/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const DoctoreAboutPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [isModalOpen, setModalOpen] = useState(false);
    // const [selectedSpecialty, setSelectedSpecialty] = useState("");
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

    const filterdoctore = doctors.find((doc) => doc._id === id);
    const ReativeDoctore = doctors.filter((doct) => doct.specialization === filterdoctore?.specialization);

    return (
        <div>
            <motion.div className="flex items-center justify-center p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <motion.div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <motion.div className="relative w-full md:w-1/3 h-60 md:h-auto overflow-hidden" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        <img src={filterdoctore?.profile_picture} alt={filterdoctore?.name} className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div className="p-6 flex flex-col justify-center w-full md:w-2/3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        <h2 className="text-xl font-bold text-gray-800">{filterdoctore?.name}</h2>
                        <p className="text-gray-500">MBBS - {filterdoctore?.specialization}</p>
                        <p className="text-gray-600 mt-2">{filterdoctore?.experience} Years of Experience</p>
                        <p className="text-gray-700 mt-4 text-sm">{filterdoctore?.about}</p>
                        <p className="text-lg font-semibold text-blue-600 mt-4">Appointment Fee:{filterdoctore?.appointment_fee}</p>

                        {/* Button to Open Modal */}
                        <motion.button
                            className="mt-6 bg-blue-900 text-white px-2 py-3 w-[40%] text-sm rounded-lg hover:bg-blue-600 transition-all duration-300"
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
                    {ReativeDoctore?.map((doctor) => (
                        <NavLink to={`/DoctoreAboutPage?doctorName=${encodeURIComponent(doctor.name)}`} key={doctor.name}>
                            <div className="p-5 rounded-2xl transition duration-300 border border-black">
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
            <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<SpecialAppointment>();

    const naviget = useNavigate();

    if (!isOpen) {
        return null
    }

    const onSubmit: SubmitHandler<SpecialAppointment> = async (data: SpecialAppointment) => {
        // const token = localStorage.getItem("token")  
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"
        if (token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            naviget("/SigninPages")
            return;
        }

        const formData = new FormData();
        formData.append("appointmentDate", data.appointmentDate.toString())
        formData.append("appointmentTime", data.appointmentTime)
        formData.append("department", data.department)
        formData.append("doctor", data.doctor)
        formData.append("message", data.message)
        formData.append("patientEmail", data.patientEmail.toString())
        formData.append("patientName", data.patientName || "")
        formData.append("phonnumber", data.phonnumber || "")

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-Specile/SpecileAppointments/create`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission                                
                setTimeout(() => {
                    onClose();
                }, 999);
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409 || errorMessage === "User already exists") {
                    console.log("Error: User already exists.");
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                } else {
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                    console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
                }
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ToastContainer />
            <div className="bg-white p-6 shadow-lg w-[40rem] relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-900 hover:text-gray-700">
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-blue-900 mb-4">Book an Appointment</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">

                    {/* Patient Name */}
                    <input type="text" {...register("patientName", { required: "Full Name is required" })}
                        placeholder="Full Name" className="w-full p-3 border border-gray-300" />
                    {errors.patientName && <p className="text-red-500 text-sm col-span-2">{errors.patientName.message}</p>}

                    {/* Email */}
                    <input type="email" {...register("patientEmail", { required: "Email is required" })}
                        placeholder="Email Address" className="w-full p-3 border border-gray-300" />
                    {errors.patientEmail && <p className="text-red-500 text-sm col-span-2">{errors.patientEmail.message}</p>}

                    {/* Phone Number */}
                    <input type="tel" {...register("phonnumber", { required: "Phone Number is required" })}
                        placeholder="Phone Number" className="w-full p-3 border border-gray-300" />
                    {errors.phonnumber && <p className="text-red-500 text-sm col-span-2">{errors.phonnumber.message}</p>}

                    {/* Department */}
                    <select {...register("department", { required: "Department is required" })}
                        className="w-full p-3 border border-gray-300">
                        <option value="">Choose Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                    </select>
                    {errors.department && <p className="text-red-500 text-sm col-span-2">{errors.department.message}</p>}

                    {/* Doctor Selection */}
                    <select {...register("doctor", { required: "Doctor selection is required" })}
                        className="w-full p-3 border border-gray-300">
                        <option value="">Select Doctor</option>
                        <option value="Dr. John Doe">Dr. John Doe</option>
                        <option value="Dr. Lisa Smith">Dr. Lisa Smith</option>
                        <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                    </select>
                    {errors.doctor && <p className="text-red-500 text-sm col-span-2">{errors.doctor.message}</p>}

                    {/* Date */}
                    <input type="date" {...register("appointmentDate", { required: "Date is required" })}
                        className="w-full p-3 border border-gray-300" />
                    {errors.appointmentDate && <p className="text-red-500 text-sm col-span-2">{errors.appointmentDate.message}</p>}

                    {/* Message Input (Full Width) */}
                    <textarea {...register("message", { required: "Message is required" })}
                        placeholder="Write your message here..." className="w-full p-3 border border-gray-300 h-32 col-span-2"></textarea>
                    {errors.message && <p className="text-red-500 text-sm col-span-2">{errors.message.message}</p>}

                    {/* Submit Button (Full Width) */}
                    <button type="submit" className="w-full p-3 bg-blue-900 text-white hover:bg-blue-700 transition col-span-2">
                        Confirm Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DoctoreAboutPage;
