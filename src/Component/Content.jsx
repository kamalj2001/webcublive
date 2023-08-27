import React from "react";
import WebContent from "./Contentapi";
import MainContent from "./MainContent";
import "./content.css";
const  Content = () =>{
    return(
        <>
            <section id="header_content" className="d-flex align-items-center bg-light mt-5">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            {
                                WebContent.map((value, index) =>{
                                    //console.log(val);
                                    return <MainContent key={index}  title={value.title} paragraph={value.paragraph} images={value.images} />
                                })
                            }
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
};
export default Content;