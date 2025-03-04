/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FaUser } from 'react-icons/fa'
// import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
    choosedepartment: string;
    selectDoctor: string;
    date: string;
    time: string;
    fullname: string;
    phonnumber: string;
    message?: string;
}

const Appointment: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // const token = localStorage.getItem("token")  
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"   
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("choosedepartment", data.choosedepartment)
        formData.append("selectDoctor", data.selectDoctor)
        formData.append("date", data.date)
        formData.append("time", data.time)
        formData.append("fullname", data.fullname)
        formData.append("phonnumber", data.phonnumber.toString())
        formData.append("message", data.message || "")

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/appointmentsRouter/create`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission
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
        <>
            <div
                className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            >
                <ToastContainer />
                <div className="absolute inset-0 bg-blue-950/80"></div>
                <div className="relative text-center z-10 py-16 px-4">
                    <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
                        Book Your Appointment
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
                        Quality Healthcare, Anytime
                    </h1>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Schedule your appointment with top healthcare professionals. Get expert consultations,
                        timely medical advice, and personalized care, all at your convenience.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
                {/* Left Side - Emergency Contact Info */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">

                    <h2 className="text-2xl font-bold text-blue-900 flex gap-2"> <FaUser /> Call for an Emergency Service!</h2>
                    <p className="text-3xl font-extrabold text-blue-700 mt-2">+84 789 1256</p>
                </div>

                <div className="w-full md:w-full bg-white p-6">
                    <h2 className="text-xl font-bold text-blue-900 text-start mb-4">Book an Appointment</h2>
                    <span className='text-xl font-serif text-blue-900 text-center mb-4'>
                        Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.
                    </span>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10">

                        {/* Row 1: Department & Doctor Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <select {...register("choosedepartment", { required: "Department is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100">
                                    <option value="">Choose Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                </select>
                                {errors.choosedepartment && <p className="text-red-500 text-sm">{errors.choosedepartment.message}</p>}
                            </div>

                            <div>
                                <select {...register("selectDoctor", { required: "selectDoctor selection is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100">
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. John Doe">Dr. John Doe</option>
                                    <option value="Dr. Lisa Smith">Dr. Lisa Smith</option>
                                    <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                                </select>
                                {errors.selectDoctor && <p className="text-red-500 text-sm">{errors.selectDoctor.message}</p>}
                            </div>
                        </div>

                        {/* Row 2: Date & Time Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input type="date" {...register("date", { required: "Date is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
                                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                            </div>

                            <div>
                                <input type="time" {...register("time", { required: "Time is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                            </div>
                        </div>

                        {/* Row 3: Full Name & Phone Number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" placeholder="Full Name" {...register("fullname", { required: "Full Name is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
                                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
                            </div>

                            <div>
                                <input type="tel" placeholder="Phone Number" {...register("phonnumber", { required: "Phone Number is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
                                {errors.phonnumber && <p className="text-red-500 text-sm">{errors.phonnumber.message}</p>}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div>
                            <textarea placeholder="Your Message" rows={5} {...register("message")} className="w-full p-4 border border-gray-300 bg-gray-100"></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-[50%] bg-blue-900 text-white font-bold py-4 hover:bg-blue-700 transition">
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Appointment