import { useState } from "react";
import "./quantityPicker.css"



const QuantityPicker= (props)=>{
    
    let[quanity,setQuantity]=useState(1);

    const handleIncrease=()=>{
        console.log("Plus clicked!")
        let value = quanity +1;
        setQuantity(value);
        props.onChange(value); //callls function from parent

    };
    const handleDecrease=()=>{
        let value = quanity -1;
        if (value >0){
            setQuantity(value);
            props.onChange(value);
        }

        setQuantity(value);
    }

    return (
         <div className="quantity-picker">
            <button className="btn btn-sm btn-info" onClick={handleIncrease}>+</button>
            <label>{quanity}</label>
            <button className="btn btn-sm btn-info" disabled={quanity===1} onClick={handleDecrease}>-</button>
         </div>
    );
};

export default QuantityPicker;
