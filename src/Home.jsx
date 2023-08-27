import React from "react";
import web from "../src/images/professional-web-design-social-ink-professional-web-design-png-1000_813.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Commen from "./Commen";
import Content from "./Component/Content";
const Home = () =>{
    return (
         <>
            <Commen name="Grow your business with" imgsrc={web} visit="/about" btnname="Get Started"/>
            <Content />
         </>
    )
}
export default Home;