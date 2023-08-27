import React from "react";
import Commen from "./Commen";
import web from "../src/images/Web-Design-PNG-Image-Transparent.png";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const About = () =>{
    return (
        <>
            <Commen name="Welcome to About Page" imgsrc={web} visit="/contact" btnname="Contect Now"/>
        </>
    )
}

export default About;