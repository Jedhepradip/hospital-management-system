// All-Doctors
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

interface AllDoctors {
    id: string,
    UserId: string;
    choosedepartment: string;
    selectDoctor: string;
    date: string;  // Changed to string
    time: string;
    fullname: string;
    phonnumber: string;  // Changed to string
    message: string;
    status: "Pending" | "Confirmed" | "Cancelled";
}

interface AllDoctorsState {
    AllDoctors: AllDoctors[];
}

const initialState: AllDoctorsState = {
    AllDoctors: []
};

export const DetchinAllDoctors = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments`, {
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
