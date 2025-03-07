import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { AllFacility, DetchinAllFacility } from "../Redux Toolkit/Features/All-Facility";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { SubmitHandler } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FacilitiesEditProps {
    FacilitiesId: string;
    onCancel: () => void;
}

interface FacilityFormData {
    title: string;
    image: string;
    description: string;
}

const FacilitiesEdit: React.FC<FacilitiesEditProps> = ({ FacilitiesId, onCancel }) => {

    const [Faciltiy, SetAllFacility] = useState<AllFacility[]>([])
    const dispatch = useAppDispatch();
    const AllFacility = useSelector((state: RootState) => state.AllFacility.AllFacility);

    useEffect(() => {
        dispatch(DetchinAllFacility())
    }, [dispatch])

    useEffect(() => {
        if (AllFacility.length > 0) {
            SetAllFacility(AllFacility)
        }
    }, [AllFacility])

    useEffect(() => {
        if (AllFacility.length > 0) {
            const selectedFacility = AllFacility.find((item) => item._id === FacilitiesId);
            if (selectedFacility) {
                SetAllFacility(selectedFacility);
            }
        }
    }, [FacilitiesId, AllFacility]);

    console.log(Faciltiy);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FacilityFormData>();

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"
    const onSubmitFacility: SubmitHandler<FacilityFormData> = async (data: FacilityFormData) => {
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("description", data.description);
        formData.append("title", data.title);
        formData.append("image", data.image)
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/Facility/Update/${FacilitiesId}`, formData, {
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
        <form onSubmit={handleSubmit(onSubmitFacility)} className="bg-white p-6 rounded-lg mb-6 shadow-lg">
            {/* Title Input */}
            <ToastContainer />
            <input
                type="text"
                {...register("title")}
                placeholder="Title"
                defaultValue={Faciltiy?.title}
                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Image URL Input */}
            <input
                type="url"
                {...register("image")}
                placeholder="Image URL"
                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Description Input */}
            <textarea
                {...register("description")}
                placeholder="Description"
                defaultValue={Faciltiy.description}
                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-950 text-white p-3 w-full rounded-md hover:bg-blue-900 transition">
                Update Facility
            </button>

            {/* Cancel Button */}
            <button
                type="button"
                onClick={onCancel}
                className="mt-2 p-3 w-full text-blue-900 border border-blue-900 rounded-md hover:bg-blue-100 transition"
            >
                Cancel
            </button>
        </form>
    );
};

export default FacilitiesEdit;
