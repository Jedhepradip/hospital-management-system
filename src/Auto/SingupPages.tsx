import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPages: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: unknown) => {
        console.log("Signup Data:", data);
        setTimeout(() => {
            toast.success('Registration successfully!');
        }, 999);
    };

    return (
        <div className="flex pb-5 items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg"
            >
                <ToastContainer />

                <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Signup
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name & Email - Horizontal Row */}
                    <div className="flex  gap-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("fullName", { required: "Full Name is required" })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullName.message as string}</p>
                            )}
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                            )}
                        </div>
                    </div>

                    {/* Phone & Password - Horizontal Row */}
                    <div className="flex  gap-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                {...register("phone", { required: "Phone number is required" })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                            )}
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>
                            )}
                        </div>
                    </div>

                    {/* Role & Hospital - Horizontal Row */}
                    <div className="flex  gap-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Role
                            </label>
                            <select
                                {...register("role", { required: "Role is required" })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            >
                                <option value="">Select a role</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Admin">Admin</option>
                                <option value="Patient">Patient</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm mt-1">{errors.role.message as string}</p>
                            )}
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 font-medium mb-1">
                                Hospital Name
                            </label>
                            <input
                                type="text"
                                {...register("hospitalName", {
                                    required: "Hospital Name is required",
                                })}
                                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            />
                            {errors.hospitalName && (
                                <p className="text-red-500 text-sm mt-1">{errors.hospitalName.message as string}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
                    >
                        Signup
                    </motion.button>
                </form>

                <div className="mt-4 text-center">
                    <p className="mt-2 text-gray-600">
                        Already have an account?{" "}
                        <NavLink to={"/SigninPages"} className="text-blue-600 hover:underline font-semibold">
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignupPages;
