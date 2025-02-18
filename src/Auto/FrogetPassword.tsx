import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
interface FormData {
    email: string;
    otp: string;
}

const ForgetPassword: React.FC = () => {


    const naviget = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        setTimeout(() => {
            toast.success('Password reset email sent successfully!');
            naviget("/SigninPages")
        }, 999);

        // Handle forget password logic here
    };

    return (
        <div className="p-10 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forget Password</h2>
                <ToastContainer />
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">OTP</label>
                        <input
                            type="text"
                            {...register('otp', { required: 'OTP is required' })}
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter OTP"
                        />
                        {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="mt-2 text-gray-600">
                        Already have an account?{" "}
                        <NavLink to={"/SigninPages"} className="text-blue-600 hover:underline font-semibold">
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;