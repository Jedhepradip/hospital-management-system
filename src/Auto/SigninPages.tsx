import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SigninPages: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log("Login Data:", data);
    setTimeout(() => {
      toast.success('Login successfully!');
    }, 999);
  };

  return (
    <div className="flex p-2 items-center justify-center mb-10">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-3">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="mt-4 text-center">
          <NavLink to={"/ForgetPassword"} className="text-blue-600 hover:underline">
            Forgot Password?
          </NavLink>
          <p className="mt-2 text-gray-600">
            Don't have an account?{" "}
            <NavLink to={"/SignupPages"} className="text-blue-600 hover:underline font-semibold">
              Sign Up
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SigninPages;
