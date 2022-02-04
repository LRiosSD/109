

import { useState } from "react";
const About = ()=>{

    const [name, setName]=useState("");

    const handleShowName=()=>{
        setName("Leonardo Rios");
    }

    return (
    <div className="about-page">
        <h1>{name}</h1>
        <button>Click to my my name</button>
    </div>
    );
};

export default About;