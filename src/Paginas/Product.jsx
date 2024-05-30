import { useDispatch } from 'react-redux';
import { addtoCarrito } from "../redux/CarritoSlice";

import React from "react";


function Product ( {id,title, image}){
    const dispatch = useDispatch()

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} className="w-50"/>
            <br />
            <button className='btn btn-warning btn-sm' onClick={() => dispatch(addtoCarrito({id,title, image}))}>
                Mercar añañai
                </button>
        </div>

    );
}
    
export default Product;