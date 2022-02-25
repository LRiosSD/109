import { useContext } from "react";
import storeContext from "../store/storeContext";
import "./cart.css"


const Cart = () =>{
    const {cart} = useContext(storeContext);

    return(
        <div className="cart">
            <h1>Shopping Cart: {cart.length} Products</h1>

            <div className="products">
                <ul>
                    {cart.map(prod=> <li key={prod._id}> {prod.title}</li>)}
                </ul>

            </div>
        </div>
    );
};

export default Cart