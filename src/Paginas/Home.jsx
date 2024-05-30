import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import React from "react";
import Product from "./Product";
import Jhin from "../Img/Jhin.png"
import Xerath from "../Img/Xerath.png"
import Lux from "../Img/Lux.png"






function Home() {
    const carritoItems = useSelector(state => state.carrito.carrito)
    return (
        <div className="bg-body-tertiary">
            <div className="d-flex justify-content-betwenn px-4 bg-dark text-white align-items-center">
                <h2></h2>
               <Link to="/Checkout"> <h4>carrito <small>{carritoItems.length}</small></h4></Link>
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id= "1"
                    title={"jhin"}
                    image={Jhin}
                    />

                </div>
              
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id="2"
                    title={"xerath"}
                    image={Xerath}
                    />

                </div>
              
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id="3"
                    title={"LUX linda"}
                    image={Lux}
                    />

                </div>
              
            </div>

        </div>
    )
}

export default Home;