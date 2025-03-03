// Blog

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

interface Blog {
    id: string,
    category: string;
    date: string;
    hospital: string;
    title: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
}

interface BlogState {
    AllBlog: Blog[];
}

const initialState: BlogState = {
    AllBlog: []
};

export const FetchingBlogData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-appointments/Get-All-Appointments`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        });
        dispatch(SetAllBLog(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const SetAllBlogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {
        SetAllBLog: (state, action: PayloadAction<Blog[]>) => {
            state.AllBlog = action.payload;
        }
    }
});

export const { SetAllBLog } = SetAllBlogSlice.actions;
export default SetAllBlogSlice.reducer;
