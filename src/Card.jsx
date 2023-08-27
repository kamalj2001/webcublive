import React from "react";
const Card = (props) =>{
    return (
         <>
            <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imageSrc}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text card_p">{props.des}</p>
                    <a href="#" className="btn btn-primary">Know More</a>
                </div>
                </div>
            </div>
         </>
    )
}
export default Card;