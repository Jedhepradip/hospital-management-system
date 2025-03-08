/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RootState } from '../Redux Toolkit/Store/store';
import { AllDoctors, DetchinAllDoctors } from '../Redux Toolkit/Features/All-Doctors';
import { useAppDispatch } from '../Redux Toolkit/Store/store';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

interface DoctorEditProps {
    DoctoreId: string;
    onCancel: () => void;
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

const EditDoctore: React.FC<DoctorEditProps> = ({ DoctoreId, onCancel }) => {
    const doctoreAll = useSelector((state: RootState) => state.AllDoctors.AllDoctors);
    const [doctorData, setDoctorData] = useState<AllDoctors | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(DetchinAllDoctors());
    }, [dispatch])

    const { register, handleSubmit, reset } = useForm<AllDoctors>();

    useEffect(() => {
        if (doctoreAll.length > 0) {
            const selectedDoctor = doctoreAll.find((doctor) => doctor._id === DoctoreId);
            if (selectedDoctor) {
                setDoctorData(selectedDoctor);
            }
        }
    }, [doctoreAll, DoctoreId, reset]);

    const onSubmit: SubmitHandler<AllDoctors> = async (data: AllDoctors) => {
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("specialization", data.specialization)
        formData.append("about", data.about || "")
        formData.append("appointment_fee", data.appointment_fee)
        formData.append("experience", data.experience)
        formData.append("profile_picture", data.profile_picture)
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api-Doctors/DoctorsRouter/update/${DoctoreId}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission                

                setTimeout(() => {
                    onCancel()
                }, 1000);
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
        <div className="p-6 max-w-4xl bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Edit Doctor</h3>
            <ToastContainer />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-md rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.name}
                        />
                    </div>

                    {/* Specialization */}
                    <div className="w-full">
                        <select
                            {...register("specialization")}
                            className="border p-3 w-full rounded bg-white"
                            defaultValue={doctorData?.specialization}
                        >
                            <option value="">Select Specialization</option>
                            <option value="General Physician">General Physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>

                    {/* Experience */}
                    <div>
                        <input
                            type="number"
                            {...register("experience")}
                            placeholder="Experience (years)"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.experience}
                        />
                    </div>

                    {/* Profile Picture */}
                    <div>
                        <input
                            type="url"
                            {...register("profile_picture")}
                            placeholder="Profile Picture URL"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.profile_picture}
                        />
                    </div>
                </div>

                {/* About */}
                <textarea
                    {...register("about")}
                    placeholder="About Doctor"
                    className="border p-3 w-full rounded"
                    defaultValue={doctorData?.about}
                />

                {/* Appointment Fee */}
                <input
                    type="number"
                    {...register("appointment_fee")}
                    placeholder="Appointment Fee"
                    className="border p-3 w-full rounded"
                    defaultValue={doctorData?.appointment_fee}
                />

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white p-3 px-7 rounded-lg">
                        Update Doctor
                    </button>
                    <button onClick={onCancel} type="button" className="bg-gray-900 px-7 hover:bg-gray-600 text-white p-3 rounded-lg">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditDoctore;
