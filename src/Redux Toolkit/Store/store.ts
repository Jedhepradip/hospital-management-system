import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import All_appointment from "../Features/All-appointment";
import All_Doctors from "../Features/All-Doctors"
import All_Facility from "../Features/All-Facility"
import All_SpecialAppointment from "../Features/All-SpecialAppointment"
import All_User from "../Features/All-User"
import Blog from "../Features/Blog"
import Personal_Appointment from "../Features/PersonalAppointment"
import SpecialUser from "../Features/Special-Appointment"
import User from "../Features/User"
import gallery from "../Features/gallery"


export const store = configureStore({
    reducer: {
        Allappointment: All_appointment,
        AllDoctors : All_Doctors,
        AllFacility : All_Facility,
        AllSpecialAppointment : All_SpecialAppointment,
        AllUser : All_User,
        Blog :Blog,
        PersonalAppointment : Personal_Appointment,
        SpecialUserAppointment:SpecialUser,
        User : User,
        gallery:gallery,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
