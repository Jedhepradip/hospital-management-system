// // All-Facility
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../Store/store";
// import axios from "axios";

// export interface AllFacility {
//     _id: string,
//     title: string;
//     description: string[];
//     image: string;
// }

// interface AllFacilityState {
//     AllFacility: AllFacility[];
// }

// const initialState: AllFacilityState = {
//     AllFacility: []
// };

// export const DetchinAllFacility = () => async (dispatch: AppDispatch) => {
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/Facility/All`, {});
//         dispatch(SetAllFacility(response.data));
//     } catch (error) {
//         console.error("Error fetching all appointments:", error);
//     }
// };

// const AllFacilitySlice = createSlice({
//     name: "All Facility",
//     initialState,
//     reducers: {
//         SetAllFacility: (state, action: PayloadAction<AllFacility[]>) => {
//             state.AllFacility = action.payload;
//         }
//     }
// });

// export const { SetAllFacility } = AllFacilitySlice.actions;
// export default AllFacilitySlice.reducer;

// All-Facility
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllFacility {
    _id: string;
    title: string;
    description: string[];
    image: string;
}

interface AllFacilityState {
    AllFacility: AllFacility[];
    loading: boolean;
}

const initialState: AllFacilityState = {
    AllFacility: [],
    loading: false,
};

// Fetch all facilities action
export const DetchinAllFacility = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true)); // Set loading before fetching
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/Facility/All`);
        if (response.status === 200) {
            dispatch(SetAllFacility(response.data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        console.error("Error fetching all facilities:", error);
    }
};

// Create Facility slice
const AllFacilitySlice = createSlice({
    name: "All Facility",
    initialState,
    reducers: {
        SetAllFacility: (state, action: PayloadAction<AllFacility[]>) => {
            state.AllFacility = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    }
});

export const { SetAllFacility, setLoading } = AllFacilitySlice.actions;
export default AllFacilitySlice.reducer;
