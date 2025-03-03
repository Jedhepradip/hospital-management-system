// Personal-appointment

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

interface PersonalAppointment {
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

interface PersonalAppointmentState {
    PersonalAppointment: PersonalAppointment[];
}

const initialState: PersonalAppointmentState = {
    PersonalAppointment: []
};

export const FetchinPersonalAppointment = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        });
        dispatch(SetPersonalAppointment(response.data));
    } catch (error) {
        console.error("Error fetching personal appointments:", error);
    }
};

const PersonalAppointmentSlice = createSlice({
    name: "PersonalAppointment",
    initialState,
    reducers: {
        SetPersonalAppointment: (state, action: PayloadAction<PersonalAppointment[]>) => {
            state.PersonalAppointment = action.payload;
        }
    }
});

export const { SetPersonalAppointment } = PersonalAppointmentSlice.actions;
export default PersonalAppointmentSlice.reducer;
