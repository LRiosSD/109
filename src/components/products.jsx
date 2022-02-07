
import QuantityPicker from "./quantityPicker";
import "./products.css" 
import { useState } from 'react';

const Product=(props)=>{

    const [quantity, setQuantity]= useState(1);


    const onQuantityChange = (value)=>{
        console.log("qnty changed",(value));
        setQuantity(value);
    }
    const getTotal=()=>{
        let total=quantity*props.data.price;
        return"$"+total.toFixed(2)
    }

    return(
        <div className="product">
            <img src={"/images/" + props.data.image }alt="Product" />
            <h5>{props.data.title}</h5>
            <div>
                <h7>Total: </h7><label className="total">{getTotal()}</label>
                <br />
                <h7> Each: </h7><label className="price">${props.data.price.toFixed(2)}</label>                
            </div>
            
            <QuantityPicker onChange={onQuantityChange}/>

            <button className="btn btn-sm btn-primary">Add to cart</button>
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
