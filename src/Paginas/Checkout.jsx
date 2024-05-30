
import { useSelector, useDispatch } from "react-redux";
import { removefromCarrito } from "../redux/CarritoSlice"; 
import { Link } from "react-router-dom";

function Checkout() {
    const carritoItems = useSelector(state => state.carrito.carrito);
    const dispatch = useDispatch();

    return (
        <div className="bg-body-tertiary">
            <div className="d-flex justify-content-between px-4 bg-dark text-white align-items-center">
                <h2>Carrito Items</h2>
                <Link to="/">
                    <h2 className="d-flex justify-content-between px-4 bg-dark text-white align-items-right">Home</h2>
                </Link>
            </div>
            <div>
                {
                    carritoItems.map(item => (
                        <div className="container d-flex flex-wrap mt-5" key={item.id}>
                            <img src={item.image} className="border w-5" alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <button className="btn btn-warning btn-sm"
                                    onClick={() => dispatch(removefromCarrito({ id: item.id }))}>
                                    Eliminar ome :c
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Checkout;

