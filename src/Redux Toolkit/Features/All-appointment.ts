// All-appointment
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllAppointment {
    _id: string,
    UserId: string;
    choosedepartment: string;
    selectDoctor: string;
    date: Date;
    time: string;
    fullname: string;
    phonnumber: number;
    message: string;
    status: "Pending" | "Confirmed" | "Cancelled";
    AllAppointmentdata: AllAppointment[];
}

const initialState: AllAppointment = {
    _id: "",
    UserId: "",
    choosedepartment: "",
    selectDoctor: "",
    date: new Date(),
    time: "",
    fullname: "",
    phonnumber: 0,
    message: "",
    status: "Pending",
    AllAppointmentdata: []
}

export const FetchinAllAppointment = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/appointmentsRouter/all`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        })
        dispatch(SetAllAppointment(response.data))
    } catch (error) {
        console.log(error);
    }
}

const AllAppointment = createSlice({
    name: "All Appointment",
    initialState,
    reducers: {
        SetAllAppointment: (state, action: PayloadAction<AllAppointment[]>) => {
            state.AllAppointmentdata = action.payload
        }
    }
})

export const { SetAllAppointment } = AllAppointment.actions
export default AllAppointment.reducer
