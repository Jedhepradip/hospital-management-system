import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import Blog from "../Features/Blog"
import User from "../Features/User"
import gallery from "../Features/gallery"
import All_User from "../Features/All-User"
import All_Doctors from "../Features/All-Doctors"
import All_Facility from "../Features/All-Facility"
import SpecialUser from "../Features/Special-Appointment"
import All_appointment from "../Features/All-appointment";
import Personal_Appointment from "../Features/PersonalAppointment"
import All_SpecialAppointment from "../Features/All-SpecialAppointment"

export const store = configureStore({
    reducer: {
        Blog: Blog,
        User: User,
        gallery: gallery,
        AllUser: All_User,
        AllDoctors: All_Doctors,
        AllFacility: All_Facility,
        Allappointment: All_appointment,
        SpecialUserAppointment: SpecialUser,
        PersonalAppointment: Personal_Appointment,
        AllSpecialAppointment: All_SpecialAppointment,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
