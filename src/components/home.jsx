import "./home.css"
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div className="home">
            <h1>SQS Style</h1>
            <h4>Authentic Imports Online</h4>
            <Link className="btn btn-info btn-lg">Go to catalog</Link>
        </div>
    );

};

export default Home;