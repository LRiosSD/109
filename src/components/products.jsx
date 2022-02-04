
import QuantityPicker from "./quantityPicker";
import "./products.css" 


const Product=(props)=>{
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300"alt="Product" />
            <h5>{props.data.title}</h5>
            <div>
                <label className="total">$20.00</label>
                <label className="price">${props.data.price}</label>                
            </div>
            
            <QuantityPicker/>

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
