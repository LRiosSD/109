
import QuantityPicker from "./quantityPicker";
import "./products.css" 
import { useState, useContext } from 'react';
import storeContext from "../store/storeContext";
import GlobalState from './../store/globalStates';

const Product=(props)=>{

    const [quantity, setQuantity]= useState(1);
    const {addProductToCart, removeProductFromCart} =useContext(storeContext);


    const onQuantityChange = (value)=>{
        console.log("qnty changed",(value));
        setQuantity(value);
    }
    const getTotal=()=>{
        let total=quantity*props.data.price;
        return"$"+total.toFixed(2)
    }
    const pushToCart = () =>{
        console.log("pushing to cart", props.data.title);
        let prodToCart = {
            ...props.data,
            quantity:quantity
        };
        addProductToCart(prodToCart);
    }
    return(
        <div className="product">
            <img src={"/images/" + props.data.image }alt="Product" />
            <h5>{props.data.title}</h5>
            <div>
                <h6>Total: </h6><label className="total">{getTotal()}</label>
                <br />
                <h6> Each: </h6><label className="price">${props.data.price.toFixed(2)}</label>                
            </div>
            
            <QuantityPicker onChange={onQuantityChange}/>

            <button onClick={pushToCart} className="btn btn-sm btn-primary">Add to cart</button>
        </div>
        
    );
};

export default Product;

// simple change

// need the product jsx you need to render:
// add image
// add title
// add price
// add total
// QP
// button for add to cart
