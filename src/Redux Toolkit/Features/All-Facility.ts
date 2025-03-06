// All-Facility
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllFacility {
    _id: string,
    title: string;
    description: string[];
    image: string;
}

interface AllFacilityState {
    AllFacility: AllFacility[];
}

const initialState: AllFacilityState = {
    AllFacility: []
};

export const DetchinAllFacility = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/Facility/All`, {});
        dispatch(SetAllFacility(response.data));
    } catch (error) {
        console.error("Error fetching all appointments:", error);
    }
};

const AllFacilitySlice = createSlice({
    name: "All Facility",
    initialState,
    reducers: {
        SetAllFacility: (state, action: PayloadAction<AllFacility[]>) => {
            state.AllFacility = action.payload;
        }
    }
});

export const { SetAllFacility } = AllFacilitySlice.actions;
export default AllFacilitySlice.reducer;
