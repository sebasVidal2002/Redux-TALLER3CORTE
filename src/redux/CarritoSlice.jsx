import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
    name: 'carrito',
    initialState:{
        carrito:[]
    },

    reducers: {
        addtoCarrito : (state, action) =>{
            state.carrito.push(action.payload)
        },
        removefromCarrito : (state, action) =>{
         state.carrito = state.carrito.filter(x => x.id !== action.payload.id)
          
        }

    }
})
export default carritoSlice.reducer;
export const {addtoCarrito,removefromCarrito} = carritoSlice.actions;