
import "./App.css"
import Footer from './components/footer';
import NavBar from './components/navBar';
import About from './components/about';
import Todo from './components/todo';


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Catalog from './components/catalog';


function App(){
  return(
    <div className='App'>
      <NavBar></NavBar>


      <h1>
        SQS Style Talavera Imports
      </h1>
      <Todo/>
      <Catalog/>

      <About/>
      <Footer/>
      
    </div>
  );
};

export default App;


// 1-create catalog component 
// 2-create the product 
// 3-on app.js render catalog
// 4-on catalog render 5 products
// 5-product render QuantityPicker
