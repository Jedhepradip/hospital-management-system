// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import { FaUser } from 'react-icons/fa'
// // import { motion } from "framer-motion"
// import { useForm } from "react-hook-form"
// import axios from 'axios'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface FormData {
//     choosedepartment: string;
//     selectDoctor: string;
//     date: string;
//     time: string;
//     fullname: string;
//     phonnumber: string;
//     message?: string;
// }

// import { useUser } from '@clerk/clerk-react';

// const Appointment: React.FC = () => {

//     const { user } = useUser();
//     const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

//     const onSubmit = async (data: FormData) => {
//         if (!user) {
//             toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
//             return;
//         }
//         const formData = new FormData();
//         formData.append("choosedepartment", data.choosedepartment)
//         formData.append("selectDoctor", data.selectDoctor)
//         formData.append("date", data.date)
//         formData.append("time", data.time)
//         formData.append("fullname", data.fullname)
//         formData.append("phonnumber", data.phonnumber.toString())
//         formData.append("message", data.message || "")

//         try {
//             const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/appointmentsRouter/create/${user.id}`, formData, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (response.status === 201 || response.status === 200) {
//                 toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
//                 reset(); // Clear form after submission
//             }

//         } catch (error: any) {
//             if (error.response) {
//                 const errorMessage = error.response.data.message;
//                 if (error.response.status === 409 || errorMessage === "User already exists") {
//                     console.log("Error: User already exists.");
//                     toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
//                 } else {
//                     toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
//                     console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
//                 }
//             } else {
//                 console.log("Error: Network issue or server not responding", error);
//             }
//         }
//     };

//     return (
//         <>
//             <div
//                 className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
//                 style={{ backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
//             >
//                 <ToastContainer />
//                 <div className="absolute inset-0 bg-blue-950/80"></div>
//                 <div className="relative text-center z-10 py-16 px-4">
//                     <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
//                         Book Your Appointment
//                     </h1>
//                     <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
//                         Quality Healthcare, Anytime
//                     </h1>
//                     <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//                         Schedule your appointment with top healthcare professionals. Get expert consultations,
//                         timely medical advice, and personalized care, all at your convenience.
//                     </p>
//                 </div>
//             </div>
//             <div className="flex flex-col md:flex-row items-center justify-between bg-white md:p-6 p-2 py-5 rounded-lg shadow-lg">
//                 {/* Left Side - Emergency Contact Info */}
//                 <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">

//                     <h2 className="text-2xl font-bold text-blue-900 flex gap-2"> <FaUser /> Call for an Emergency Service!</h2>
//                     <p className="text-3xl font-extrabold text-blue-700 mt-2">+84 789 1256</p>
//                 </div>

//                 <div className="w-full md:w-full bg-white p-6">
//                     <h2 className="text-xl font-bold text-blue-900 text-start mb-4">Book an Appointment</h2>
//                     <span className='text-xl font-serif text-blue-900 text-center mb-4'>
//                         Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.
//                     </span>
//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10">

//                         {/* Row 1: Department & Doctor Selection */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <select {...register("choosedepartment", { required: "Department is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100">
//                                     <option value="">Choose Department</option>
//                                     <option value="Cardiology">Cardiology</option>
//                                     <option value="Dermatology">Dermatology</option>
//                                     <option value="Neurology">Neurology</option>
//                                     <option value="Orthopedics">Orthopedics</option>
//                                 </select>
//                                 {errors.choosedepartment && <p className="text-red-500 text-sm">{errors.choosedepartment.message}</p>}
//                             </div>

//                             <div>
//                                 <select {...register("selectDoctor", { required: "selectDoctor selection is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100">
//                                     <option value="">Select Doctor</option>
//                                     <option value="Dr. John Doe">Dr. John Doe</option>
//                                     <option value="Dr. Lisa Smith">Dr. Lisa Smith</option>
//                                     <option value="Dr. Michael Brown">Dr. Michael Brown</option>
//                                 </select>
//                                 {errors.selectDoctor && <p className="text-red-500 text-sm">{errors.selectDoctor.message}</p>}
//                             </div>
//                         </div>

//                         {/* Row 2: Date & Time Selection */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <input type="date" {...register("date", { required: "Date is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
//                                 {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
//                             </div>

//                             <div>
//                                 <input type="time" {...register("time", { required: "Time is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
//                                 {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
//                             </div>
//                         </div>

//                         {/* Row 3: Full Name & Phone Number */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                                 <input type="text" placeholder="Full Name" {...register("fullname", { required: "Full Name is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
//                                 {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
//                             </div>

//                             <div>
//                                 <input type="tel" placeholder="Phone Number" {...register("phonnumber", { required: "Phone Number is required" })} className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-gray-100" />
//                                 {errors.phonnumber && <p className="text-red-500 text-sm">{errors.phonnumber.message}</p>}
//                             </div>
//                         </div>

//                         {/* Message Input */}
//                         <div>
//                             <textarea placeholder="Your Message" rows={5} {...register("message")} className="w-full p-4 border border-gray-300 bg-gray-100"></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <button type="submit" className="md:w-[52%] w-full  bg-blue-900 text-white font-bold py-3  hover:bg-blue-700 transition">
//                             Book Appointment
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Appointment

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { MdMedicalServices } from 'react-icons/md'
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

import { useUser } from '@clerk/clerk-react';
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../Redux Toolkit/Store/store'
import { DetchinAllDoctors } from '../Redux Toolkit/Features/All-Doctors'

const Appointment: React.FC = () => {
    const { user } = useUser();
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    // Watch form values for step completion
    const watchedValues = watch();

    useEffect(() => {
        // Update completed steps based on form values
        const newCompletedSteps: number[] = [];

        if (watchedValues.choosedepartment && watchedValues.selectDoctor) {
            newCompletedSteps.push(1);
        }
        if (watchedValues.date && watchedValues.time) {
            newCompletedSteps.push(2);
        }
        if (watchedValues.fullname && watchedValues.phonnumber) {
            newCompletedSteps.push(3);
        }

        setCompletedSteps(newCompletedSteps);
    }, [watchedValues]);

    const onSubmit = async (data: FormData) => {
        if (!user) {
            toast.error("Failed to book appointment. Please login first.", {
                position: "top-right",
                autoClose: 3000,
                className: "custom-toast-error"
            });
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("choosedepartment", data.choosedepartment)
        formData.append("selectDoctor", data.selectDoctor)
        formData.append("date", data.date)
        formData.append("time", data.time)
        formData.append("fullname", data.fullname)
        formData.append("phonnumber", data.phonnumber.toString())
        formData.append("message", data.message || "")

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/appointmentsRouter/create/${user.id}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("🎉 Appointment booked successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    className: "custom-toast-success"
                });
                reset();
                setCurrentStep(1);
                setCompletedSteps([]);
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                toast.error(
                    <div className='font-medium text-sm text-white'>
                        ❌ {errorMessage}
                    </div>,
                    {
                        position: "top-right",
                        autoClose: 4000,
                        className: "custom-toast-error"
                    }
                )
            } else {
                toast.error("❌ Network error. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    className: "custom-toast-error"
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const departments = [
        { value: "Cardiology", icon: "💓" },
        { value: "Gynecology", icon: "👩‍⚕️" },
        { value: "Neurology", icon: "🧠" },
        { value: "Orthopedics", icon: "🦴" },
        { value: "Spine Injury", icon: "🏥" },
        { value: "Uncategorized", icon: "❓" },
        { value: "Infectious", icon: "🦠" },
        { value: "Medical Breakthroughs", icon: "🔬" },
        { value: "Life Style", icon: "💡" }
    ];


    const dispatch = useAppDispatch();

    const alldcotors = useSelector((state: RootState) => state.AllDoctors.AllDoctors);
    console.log('alldcotors :', alldcotors);

    useEffect(() => {
        dispatch(DetchinAllDoctors())
    }, [dispatch])


    const doctors = alldcotors.map((val) => ({
        value: val.name,
        department: val.specialization,
        experience: val.experience
    }));

    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
    ];

    const StepIndicator = ({ step, isCompleted, isCurrent }: { step: number, isCompleted: boolean, isCurrent: boolean }) => (
        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${isCompleted
            ? 'bg-green-500 border-green-500 text-white'
            : isCurrent
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-gray-200 border-gray-300 text-gray-500'
            }`}>
            {isCompleted ? <FaCheckCircle className="text-sm" /> : step}
        </div>
    );

    return (
        <>
            <style>{`
                .custom-toast-success {
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
                }
                .custom-toast-error {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
                }
                .glass-effect {
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.95);
                }
                .input-focus:focus {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
                }
                .floating-label {
                    transition: all 0.3s ease;
                }
                .floating-label.active {
                    transform: translateY(-20px) scale(0.8);
                    color: #3b82f6;
                }
            `}</style>

            {/* Hero Section */}
            <div className="relative h-[400px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3
                }}></div>

                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full animate-bounce"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>

                <ToastContainer />
                <div className="relative text-center z-10 py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-blue-200 mb-4 animate-fadeInUp">
                            🏥 Professional Healthcare Services
                        </h1>
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white leading-tight animate-fadeInUp animation-delay-200">
                            Book Your
                            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Appointment</span>
                        </h1>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
                            Experience world-class healthcare with our expert medical professionals.
                            Schedule your consultation today for personalized care and treatment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Emergency Contact Banner */}
            <div className="bg-gradient-to-r from-hray-500 to-red-600 text-black py-4 px-6 shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="bg-white/10 p-3 rounded-full">
                            <FaPhone className="text-xl animate-pulse" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">24/7 Emergency Hotline</h3>
                            <p className="text-gray-700">Call us anytime for urgent medical assistance</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-3xl font-bold">+84 789 1256</p>
                        <p className="text-gray-700">Available round the clock</p>
                    </div>
                </div>
            </div>

            {/* Main Appointment Form */}
            <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Progress Steps */}
                    <div className="glass-effect p-6 rounded-2xl shadow-2xl mb-8">
                        <div className="flex items-center justify-between mb-6">
                            {[1, 2, 3].map((step, index) => (
                                <React.Fragment key={step}>
                                    <div className="flex flex-col items-center">
                                        <StepIndicator
                                            step={step}
                                            isCompleted={completedSteps.includes(step)}
                                            isCurrent={currentStep === step}
                                        />
                                        <p className={`mt-2 text-sm font-medium ${completedSteps.includes(step) ? 'text-green-600' :
                                            currentStep === step ? 'text-blue-600' : 'text-gray-500'
                                            }`}>
                                            {step === 1 ? 'Select Service' : step === 2 ? 'Choose Time' : 'Your Details'}
                                        </p>
                                    </div>
                                    {index < 2 && (
                                        <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${completedSteps.includes(step) ? 'bg-green-500' : 'bg-gray-200'
                                            }`}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="glass-effect p-8 rounded-3xl shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Schedule Your Appointment
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Fill out the form below to book your appointment with our experienced medical professionals.
                                We'll confirm your booking within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Step 1: Department & Doctor Selection */}
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                    <MdMedicalServices className="text-blue-600" />
                                    Select Department & Doctor
                                </h3>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Choose Department *
                                        </label>
                                        <select
                                            {...register("choosedepartment", { required: "Department is required" })}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white transition-all duration-300 input-focus text-gray-700"
                                        >
                                            <option value="">Select a department...</option>
                                            {departments.map((dept) => (
                                                <option key={dept.value} value={dept.value}>
                                                    {dept.icon} {dept.value}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.choosedepartment && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.choosedepartment.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Doctor *
                                        </label>
                                        <select
                                            {...register("selectDoctor", { required: "Doctor selection is required" })}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white transition-all duration-300 input-focus text-gray-700"
                                        >
                                            <option value="">Choose your doctor...</option>
                                            {doctors.map((doctor) => (
                                                <option key={doctor.value} value={doctor.value}>
                                                    👨‍⚕️ {doctor.value} - {doctor.experience} exp.
                                                </option>
                                            ))}
                                        </select>
                                        {errors.selectDoctor && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.selectDoctor.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Date & Time Selection */}
                            <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                    <FaCalendarAlt className="text-green-600" />
                                    Select Date & Time
                                </h3>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            {...register("date", { required: "Date is required" })}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white transition-all duration-300 input-focus text-gray-700"
                                        />
                                        {errors.date && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.date.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Time *
                                        </label>
                                        <select
                                            {...register("time", { required: "Time is required" })}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 bg-white transition-all duration-300 input-focus text-gray-700"
                                        >
                                            <option value="">Select time slot...</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time}>
                                                    🕐 {time}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.time && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.time.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Personal Information */}
                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                    <FaUser className="text-purple-600" />
                                    Personal Information
                                </h3>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            {...register("fullname", { required: "Full Name is required" })}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white transition-all duration-300 input-focus text-gray-700 placeholder-gray-400"
                                        />
                                        {errors.fullname && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.fullname.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            {...register("phonnumber", {
                                                required: "Phone Number is required",
                                                pattern: {
                                                    value: /^[0-9+\-\s()]+$/,
                                                    message: "Please enter a valid phone number"
                                                }
                                            })}
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white transition-all duration-300 input-focus text-gray-700 placeholder-gray-400"
                                        />
                                        {errors.phonnumber && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                ⚠️ {errors.phonnumber.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Additional Message (Optional)
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your symptoms or any specific concerns..."
                                        rows={4}
                                        {...register("message")}
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white transition-all duration-300 input-focus text-gray-700 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 ${isSubmitting
                                        ? 'opacity-75 cursor-not-allowed'
                                        : 'hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800'
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                                                Book My Appointment
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information Card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-blue-600 text-3xl mb-4">
                                <FaPhone />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-600">+84 789 1256</p>
                            <p className="text-sm text-gray-500">24/7 Available</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-green-600 text-3xl mb-4">
                                <FaEnvelope />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-600">support@Palwehospital.com</p>
                            <p className="text-sm text-gray-500">Quick Response</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-purple-600 text-3xl mb-4">
                                <FaMapMarkerAlt />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Shree Ram Chowk, Pipeline Rd</p>
                            <p className="text-sm text-gray-500">Ahmednagar</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment