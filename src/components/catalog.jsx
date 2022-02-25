
import { useEffect, useState } from "react";
import Product from "./products";
import "./catalog.css"
import DataService from "../services/dataService";

const Catalog =()=>{

    const [products, setProducts] = useState([]);
    
    // here
    const loadData=()=>{
        console.log("component loaded");

        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    // when the component loads
    useEffect(()=>{
        loadData();
    });

// create a state variable (products)
//  set data (from loadData) to the state variable

    return(
        <div className="catalog">
            <h3> Check Out Our Amazing Product Line!</h3>
            <h5>There are {products.length} products available</h5>
            {console.log("component rendered")}
            
            {products.map((p) =>(
            <Product key={p._id} data={p}/>
            ))}
            
        </div>
    );
};

export default Catalog;