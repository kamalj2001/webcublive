import React from "react";
import web from "../src/images/E-Commerce-PNG-Pic.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Commen = (props) =>{
    return (
         <>
           <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<strong>WebCub</strong></h1>
                                    <h2 className="my-3">
                                        We are the them of talented developer making website
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 top_img_set">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Commen img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
         </>
    )
}
export default Commen;