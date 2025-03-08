// User

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface User {
    _id: string,
    fullname: string,
    email: string,
    password: string,
    contact: number,
    address: string,
    pincode: number
}

interface AllUserStateState {
    User: User[];
}

const initialState: AllUserStateState = {
    User: []
};

export const FetchinAllUserData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        });
        dispatch(SetUser(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const UserSlice = createSlice({
    name: "All User",
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<User[]>) => {
            state.User = action.payload;
        }
    }
});

export const { SetUser } = UserSlice.actions;
export default UserSlice.reducer;
