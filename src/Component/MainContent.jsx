import React from "react";
const MainContent = (prop) =>{
    return(
        <>
            <div className="row">
                <div className="col-lg-6 order-1 order-lg-1">
                    <img src={prop.images} className="img-fluid img_steup" alt="Commen img"/>
                </div>
                <div className="col-lg-6 col-md-12 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                    <h1><strong>{prop.title}</strong></h1>
                    <h2 className="my-3"><span>{prop.paragraph}</span></h2>
                    <div className="mt-3">
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;