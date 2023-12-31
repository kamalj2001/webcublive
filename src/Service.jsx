import React from "react";
import CardApi from "./Cardapi";
import Card from "./Card";
const Service = () =>{
    return (
         <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                CardApi.map((val , indx) =>{
                                    console.log(val);
                                    return <Card key={indx} imageSrc={val.imageSrc} title={val.title} des={val.description} />
                                }) 
                            }
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
export default Service;