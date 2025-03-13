// All-SpecialAppointment

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface OnlySpecialAppointment {
    id: string,
    UserId: string;
    patientName: string;
    patientEmail: string;
    doctor: string;
    department: string;
    appointmentDate: Date;
    appointmentTime: string;
    status: "pending" | "confirmed" | "canceled";
    createdAt: Date;
}

interface SpecialAppointmentState {
    AllOnlySpecialAppointment: OnlySpecialAppointment[];
}

const initialState: SpecialAppointmentState = {
    AllOnlySpecialAppointment: []
};

export const FetchinSpecialAppointment = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Specile/SpecileAppointments/user-only-send/${id}`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem("Token")}`
            // }
        });
        dispatch(SetOnlySpecialAppointment(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const OnlySpecialAppointmentSlice = createSlice({
    name: "Special Appointment",
    initialState,
    reducers: {
        SetOnlySpecialAppointment: (state, action: PayloadAction<OnlySpecialAppointment[]>) => {
            state.AllOnlySpecialAppointment = action.payload;
        }
    }
});

export const { SetOnlySpecialAppointment } = OnlySpecialAppointmentSlice.actions;
export default OnlySpecialAppointmentSlice.reducer;
