// All-appointment
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Paymentinterfase } from "./PaymentBooks";
// import { AppDispatch } from "../Store/store";
import axios from "axios";

interface PaymentState {
    AllPaymentData: Paymentinterfase[]
}

const initialState: PaymentState = {
    AllPaymentData: []
}

// export const FetchinBookDetails = () => async (dispatch: AppDispatch) => {
export const PaymetAllData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-books-Payment/Send-All-Payment`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        })
        dispatch(SetAllPaymentData(response.data))
    } catch (error) {
        console.log(error);
    }
}

const PaymentAllSlice = createSlice({
    name: "AllPamyentBooks",
    initialState,
    reducers: {
        SetAllPaymentData: (state, action: PayloadAction<Paymentinterfase[]>) => {
            state.AllPaymentData = action.payload
        }
    }
})

export const { SetAllPaymentData } = PaymentAllSlice.actions
export default PaymentAllSlice.reducer
