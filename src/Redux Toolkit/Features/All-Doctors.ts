// All-Doctors
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllDoctors {
    _id: string;
    name: string;
    specialization: string;
    experience: string;
    profile_picture: string;
    about?: string;
    appointment_fee: string;
}

interface AllDoctorsState {
    AllDoctors: AllDoctors[];
}

const initialState: AllDoctorsState = {
    AllDoctors: []
};

export const DetchinAllDoctors = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Doctors/DoctorsRouter/all`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        });
        dispatch(SetAllDoctors(response.data));

    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const AllDoctorsSlice = createSlice({
    name: "All Doctors",
    initialState,
    reducers: {
        SetAllDoctors: (state, action: PayloadAction<AllDoctors[]>) => {
            state.AllDoctors = action.payload;
        }
    }
});

export const { SetAllDoctors } = AllDoctorsSlice.actions;
export default AllDoctorsSlice.reducer;
