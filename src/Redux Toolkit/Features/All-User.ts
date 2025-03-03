// All-User
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

interface AllUser {
    id: string,
    fullname: string,
    email: string,
    password: string,
    contact: number,
    address: string,
    pincode: number
}

interface AllUserStateState {
    AllUser: AllUser[];
}

const initialState: AllUserStateState = {
    AllUser: []
};

export const DetchinAllSpecialAppointment = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        });
        dispatch(SetAllUser(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const AllUserSlice = createSlice({
    name: "All User",
    initialState,
    reducers: {
        SetAllUser: (state, action: PayloadAction<AllUser[]>) => {
            state.AllUser = action.payload;
        }
    }
});

export const { SetAllUser } = AllUserSlice.actions;
export default AllUserSlice.reducer;
