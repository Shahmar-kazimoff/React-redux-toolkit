import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Slice/BasketSlice";

export const Store = configureStore({
    reducer: {
        basket: basketReducer
    }
});
