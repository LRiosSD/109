import "..//app.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import quantityPicker from './components/quantityPicker';


function    App(){
    return(
        <div className="App">
        <NavBar></NavBar>
            <h1> Welcome to my suppoer online store!</h1>
            
            <quantityPicker/>
            <Footer/>
            

        </div>
        );
}
export default App;