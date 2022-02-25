
import "./navBar.css"
import { Link, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";


const NavBar=()=>{
  const {cart,user} = useContext(storeContext);


    return( 
             
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
            <a className="nav-link active" aria-current="page" href="/catalog">Catalog</a>

            </li>          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Catagories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/#">Kitchen</a></li>
              <li><a className="dropdown-item" href="/#">Home</a></li>
              <li><a className="dropdown-item" href="/#">Garden</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Something else here</a></li>
              </ul>
              <a className="nav-link active" aria-current="page" href="/about">About</a>

            </li>
          </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-light" to="/cart">
                View Cart <span className="badge badge-light">{cart.length}</span>
              </Link>
            </form>
      </div>
      </div>
      </nav>
    </div>
    );
}



export default NavBar;
