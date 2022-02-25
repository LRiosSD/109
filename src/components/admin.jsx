import "./admin.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Admin = () =>{

    const [ product, setProduct] = useState({});

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAlllCoupons] = useState([]);

    const saveCoupon = () =>{
        console.log("a message", coupon);

        // send the coupon

        // display on screen
        let copy = {...allCoupons};
        copy.push(coupon);
        setAlllCoupons(copy);
    };

    const codeChange = (e) => {
        let copy = {...coupon}; //create the coupon
        copy.code = e.target.value; //modify value
        setCoupon(copy); //set the copy as the new value

    };
    const couponChange = (e) => {
        let copy = {...coupon};
        copy.discount = parseFloat(e.tartget.value);
        setCoupon(copy); 

    };

    const prodChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;


        let copy = {...product};
        copy[name] = value;
        setProduct(copy);

    };

    return(
        <div className="admin-page">
            <h1>Store Mgmt</h1>

            <div className="admin-container">

                <div>
                    <h3>Register New Products</h3>
                    
                    <div className="form">
                        <label></label>
                        <input onChange={prodChange} type="text" name="title" className="form-control" />

                        <label></label>
                        <input onChange={prodChange} type="text" name="image" className="form-control"/>

                        <label></label>
                        <input onChange={prodChange} type="text" name="price" className="form-control" />

                        <label></label>
                        <input onChange={prodChange} type="text"name="category" className="form-control" />
                    </div>
                </div>
            
                <div className="coupons">
                <h4>Coupons</h4>

                    <div className="form">
                        <div>
                            <label className="form-label">Code:</label>
                            <input onChange={codeChange} type="text" className="form-control" />

                        </div>

                        <div>
                            <label className="form-label">Discount:</label>
                            <input onChange={couponChange} type="text" className="form-control" />
                         </div>
                    
                         <button onClick={saveCoupon} className="btn btn-dark">Register</button>
                    </div>


                </div>

                <h4>Valid Coupons</h4>
                <ul>
                {allCoupons.map((c, index) => <li key={index}> {c.code} - {c.discount}%  </li> )}
                </ul>

            </div>

        </div>
    );
};

export default Admin