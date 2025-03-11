// // Blog

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface Blog {
    _id: string;
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
    loading: boolean; // Added loading state
}

const initialState: BlogState = {
    AllBlog: [],
    loading: false,
};

export const FetchingBlogData = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true)); // Set loading before fetching
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-blog/Blogrouter/all`);

        if (response.status === 200) {
            dispatch(SetAllBLog(response.data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        console.error("Error fetching all blogs:", error);
    }
};

const SetAllBlogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {
        SetAllBLog: (state, action: PayloadAction<Blog[]>) => {
            state.AllBlog = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { SetAllBLog, setLoading } = SetAllBlogSlice.actions;
export default SetAllBlogSlice.reducer;
