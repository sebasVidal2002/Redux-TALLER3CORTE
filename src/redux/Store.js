import { configureStore } from "@reduxjs/toolkit";
import CarritoSlice from "./CarritoSlice";

const store = configureStore({
    reducer:{
        carrito: CarritoSlice

    }
})

export default store;