// // Gallery

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../Store/store";
// import axios from "axios";

// export interface Gallery {
//     _id: string,
//     GalleryImg: string;
// }

// interface GalleryState {
//     AllGallery: Gallery[];
// }

// const initialState: GalleryState = {
//     AllGallery: []
// };

// export const FetchinGalleryAllData = () => async (dispatch: AppDispatch) => {
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Gallery/Galleryrouter/all`, {

//         });
//         dispatch(SetGalleryAllData(response.data));
//     } catch (error) {
//         console.error("Error fetching all appointments:", error);
//     }
// };

// const GallerySlice = createSlice({
//     name: "Gallery",
//     initialState,
//     reducers: {
//         SetGalleryAllData: (state, action: PayloadAction<Gallery[]>) => {
//             state.AllGallery = action.payload;
//         }
//     }
// });

// export const { SetGalleryAllData } = GallerySlice.actions;
// export default GallerySlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface Gallery {
    _id: string;
    GalleryImg: string;
}

interface GalleryState {
    AllGallery: Gallery[];
    loading: boolean;
}

const initialState: GalleryState = {
    AllGallery: [],
    loading: false,
};

export const FetchinGalleryAllData = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true)); // Set loading before fetching
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api-Gallery/Galleryrouter/all`
        );

        if (response.status === 200) {
            dispatch(SetGalleryAllData(response.data));
        }
        dispatch(setLoading(false)); // Stop loading after fetching
    } catch (error) {
        console.error("Error fetching gallery data:", error);
    }
};

const GallerySlice = createSlice({
    name: "Gallery",
    initialState,
    reducers: {
        SetGalleryAllData: (state, action: PayloadAction<Gallery[]>) => {
            state.AllGallery = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { SetGalleryAllData, setLoading } = GallerySlice.actions;
export default GallerySlice.reducer;
