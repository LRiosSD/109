
import Footer from './components/footer';
import NavBar from './components/navBar';
import About from './components/about';
import Todo from './components/todo';
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./store/globalStates";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Catalog from './components/catalog';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import "./App.css"

function App(){
  return(
    <div className='App'>

    <GlobalState>

      <BrowserRouter>

          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/todo" element={<Todo/>}></Route>
            <Route path="/catalog" element={<Catalog/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            

          </Routes>


          <h1>
            SQS Style Talavera Imports
          </h1>  

          <Footer/>

        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;


// 1-create catalog component 
// 2-create the product 
// 3-on app.js render catalog
// 4-on catalog render 5 products
// 5-product render QuantityPicker
