// All-SpecialAppointment

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface SpecialAppointment {
    _id: string,
    UserId: string;
    patientName: string;
    patientEmail: string;
    doctor: string;
    department: string;
    message: string,
    appointmentDate: Date;
    appointmentTime: string;
    phonnumber: string;
    status: "pending" | "confirmed" | "canceled";
    createdAt: Date;
}

interface SpecialAppointmentState {
    AllSpecialAppointment: SpecialAppointment[];
}

const initialState: SpecialAppointmentState = {
    AllSpecialAppointment: []
};


const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

export const DetchinAllSpecialAppointment = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Specile/SpecileAppointments/user-appointments`, {
            headers: {
                // authorization: `Bearer ${localStorage.getItem("Token")}`
                authorization: `Bearer ${token}`
            }
        });
        dispatch(SetSpecialAppointment(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const SpecialAppointmentSlice = createSlice({
    name: "Special Appointment",
    initialState,
    reducers: {
        SetSpecialAppointment: (state, action: PayloadAction<SpecialAppointment[]>) => {
            state.AllSpecialAppointment = action.payload;
        }
    }
});

export const { SetSpecialAppointment } = SpecialAppointmentSlice.actions;
export default SpecialAppointmentSlice.reducer;
