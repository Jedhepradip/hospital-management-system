import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RootState } from '../Redux Toolkit/Store/store';
import { AllDoctors, DetchinAllDoctors } from '../Redux Toolkit/Features/All-Doctors';
import { useAppDispatch } from '../Redux Toolkit/Store/store';

interface DoctorEditProps {
    DoctoreId: string;
    onCancel: () => void;
}

const EditDoctore: React.FC<DoctorEditProps> = ({ DoctoreId, onCancel }) => {
    const doctoreAll = useSelector((state: RootState) => state.AllDoctors.AllDoctors);
    const [doctorData, setDoctorData] = useState<AllDoctors | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(DetchinAllDoctors());
    }, [dispatch])

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AllDoctors>();

    useEffect(() => {
        if (doctoreAll.length > 0) {
            const selectedDoctor = doctoreAll.find((doctor) => doctor._id === DoctoreId);
            if (selectedDoctor) {
                setDoctorData(selectedDoctor);
            }
        }
    }, [doctoreAll, DoctoreId, reset]);

    const onSubmit: SubmitHandler<AllDoctors> = (data: AllDoctors) => {
        console.log('Updated Doctor Data:', data);
        onCancel(); // Close form after submission
    };

    return (
        <div className="p-6 max-w-4xl bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Edit Doctor</h3>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-md rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <input
                            {...register("name", { required: "Name is required" })}
                            placeholder="Name"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.name}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Specialization */}
                    <div className="w-full">
                        <select
                            {...register("specialization", { required: "Specialization is required" })}
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
                        {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization.message}</p>}
                    </div>

                    {/* Experience */}
                    <div>
                        <input
                            type="number"
                            {...register("experience", { required: "Experience is required" })}
                            placeholder="Experience (years)"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.experience}
                        />
                        {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
                    </div>

                    {/* Profile Picture */}
                    <div>
                        <input
                            type="url"
                            {...register("profile_picture", { required: "Profile picture URL is required" })}
                            placeholder="Profile Picture URL"
                            className="border p-3 w-full rounded"
                            defaultValue={doctorData?.profile_picture}
                        />
                        {errors.profile_picture && <p className="text-red-500 text-sm">{errors.profile_picture.message}</p>}
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
                    {...register("appointment_fee", { required: "Appointment Fee is required" })}
                    placeholder="Appointment Fee"
                    className="border p-3 w-full rounded"
                    defaultValue={doctorData?.appointment_fee}
                />
                {errors.appointment_fee && <p className="text-red-500 text-sm">{errors.appointment_fee.message}</p>}

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
