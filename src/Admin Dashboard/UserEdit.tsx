import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FetchinAllUserData, User } from '../Redux Toolkit/Features/User';
import { RootState, useAppDispatch } from '../Redux Toolkit/Store/store';
import { useSelector } from 'react-redux';
import { AllUser } from '../Redux Toolkit/Features/All-User';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserEditProps {
    UserId: string;
    onCancel: () => void;
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

const UserEdit: React.FC<UserEditProps> = ({ UserId, onCancel }) => {
    const [user, setUser] = useState<AllUser | null>(null);
    const dispatch = useAppDispatch();
    const userAll = useSelector((state: RootState) => state.AllUser.AllUser);

    const { register, handleSubmit, reset } = useForm<User>();

    useEffect(() => {
        if (userAll.length > 0) {
            const selectedUser = userAll.find((item) => item._id === UserId);
            if (selectedUser) {
                setUser(selectedUser);
            }
        }
        if (user) {
            reset(user);
        }
    }, [UserId, userAll, reset, user]);

    useEffect(() => {
        dispatch(FetchinAllUserData());
    }, [dispatch]);

    const onSubmitUserEdit: SubmitHandler<User> = async (data: User) => {
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("contact", data?.contact.toString())
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/Facility/Update/${UserId}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            const JobsResponses = await response.data;

            if (response.status === 201 || response.status === 200) {
                toast.success(JobsResponses.message, { position: "top-right", autoClose: 3000 });
                onCancel();
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmitUserEdit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        {...register('fullname')}
                        defaultValue={user?.fullname}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        {...register('email')}
                        defaultValue={user?.email}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Contact:</label>
                    <input
                        {...register('contact')}
                        defaultValue={user?.contact}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;