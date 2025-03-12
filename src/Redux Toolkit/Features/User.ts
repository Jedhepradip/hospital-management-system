// User Slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";
import { useUser } from "@clerk/clerk-react"

// Define the user state type
export interface User {
    _id: string;
    fullname: string;
    email: string;
    password: string;
    contact: number;
    address: string;
    pincode: number;
    isAdmin: boolean;
}

// Initial state
const initialState: User = {
    _id: "",
    fullname: "",
    email: "",
    password: "",
    contact: 0,
    address: "",
    pincode: 0,
    isAdmin: false,
};

// Async thunk for fetching user data
export const FetchingUserData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments/${useUser}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
        });
        dispatch(SetUser(response.data)); // Ensure response.data matches the expected structure
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

// Create Redux slice
const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<User>) => {
            return action.payload; // Replace the state with new user data
        },
    },
});

// Export actions and reducer
export const { SetUser } = UserSlice.actions;
export default UserSlice.reducer;
