// // All-Doctors
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../Store/store";
// import axios from "axios";

// export interface AllDoctors {
//     _id: string;
//     name: string;
//     specialization: string;
//     experience: string;
//     profile_picture: string;
//     about?: string;
//     appointment_fee: string;
// }

// interface AllDoctorsState {
//     AllDoctors: AllDoctors[];
// }

// const initialState: AllDoctorsState = {
//     AllDoctors: []
// };

// export const DetchinAllDoctors = () => async (dispatch: AppDispatch) => {
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Doctors/DoctorsRouter/all`, {
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem("Token")}`
//             }
//         });
//         dispatch(SetAllDoctors(response.data));

//     } catch (error) {
//         console.error("Error fetching all appointments:", error);
//     }
// };

// const AllDoctorsSlice = createSlice({
//     name: "All Doctors",
//     initialState,
//     reducers: {
//         SetAllDoctors: (state, action: PayloadAction<AllDoctors[]>) => {
//             state.AllDoctors = action.payload;
//         }
//     }
// });

// export const { SetAllDoctors } = AllDoctorsSlice.actions;
// export default AllDoctorsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store/store";
import axios from "axios";

export interface AllDoctors {
    _id: string;
    name: string;
    specialization: string;
    experience: string;
    profile_picture: string;
    about?: string;
    appointment_fee: string;
}

interface AllDoctorsState {
    AllDoctors: AllDoctors[];
    loading: boolean;
}

const initialState: AllDoctorsState = {
    AllDoctors: [],
    loading: false,
};

// ✅ Corrected Async Thunk Function
export const DetchinAllDoctors = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-Doctors/DoctorsRouter/all`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`,
            }
        });

        if (response.status === 200) {
            dispatch(SetAllDoctors(response.data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        console.error("Error fetching all doctors:", error);
    }
};

// ✅ Fixed Redux Slice
const allDoctorsSlice = createSlice({
    name: "allDoctors",
    initialState,
    reducers: {
        SetAllDoctors: (state, action: PayloadAction<AllDoctors[]>) => {
            state.AllDoctors = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    }
});

export const { SetAllDoctors, setLoading } = allDoctorsSlice.actions;
export default allDoctorsSlice.reducer;