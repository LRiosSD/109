
import "./about.css";

import { useState } from "react";

const About = () => {

    const [name, setName ]= useState("");
    const [visible, setVisible] = useState(false);
    
    const handleShowName = () => {
        setName("Leonardo Rios");
        setVisible(true);
    }
    const getMyInfo=()=>{
        if (visible){
            return(
            <div>
                <h1>Leonardo Rios</h1>
                <h6>leo78rios@gmail.com</h6>
                <ul>
                    <li>SDGKE FSDI</li>
                    <li>Student</li>
                    <li>2022</li>
                </ul>
            </div>

            );
        }
            else return "";
    }

// create function here


    return (
        <div className="about-page">
        {getMyInfo()}
        <button onClick={handleShowName}>Click to see my name</button>
        </div>
    );
};

export default About;