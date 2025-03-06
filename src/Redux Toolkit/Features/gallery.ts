// Gallery

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface Gallery {
    _id: string,
    GalleryImg: string;
}

interface GalleryState {
    AllGallery: Gallery[];
}

const initialState: GalleryState = {
    AllGallery: []
};

export const FetchinGalleryAllData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Gallery/Galleryrouter/all`, {

        });
        dispatch(SetGalleryAllData(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const GallerySlice = createSlice({
    name: "Gallery",
    initialState,
    reducers: {
        SetGalleryAllData: (state, action: PayloadAction<Gallery[]>) => {
            state.AllGallery = action.payload;
        }
    }
});

export const { SetGalleryAllData } = GallerySlice.actions;
export default GallerySlice.reducer;
