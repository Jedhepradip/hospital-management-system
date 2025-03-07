// All-User
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllUser {
    _id: string,
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
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

export const FetchinAllUserdataToAdmin = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-user/UserRouther/AllData/Send`, {
            headers: {
                // authorization: `Bearer ${localStorage.getItem("Token")}`
                authorization: `Bearer ${token}`
            }
        });
        console.log("response.data :", response.data);
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
