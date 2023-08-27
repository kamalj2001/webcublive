import React, { useState } from "react";
const TimeDate = () =>{
    // Define a state for keeping track of time
  const [today, setTime] = React.useState("");
  // Logic, computation to update time (which is side-effect) should put inside useEffect
  React.useEffect(() => {
    // Running side-effect when component mounted (componentDidMount)
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    // Clear side-effect when component unmount (componentWillUnmount)
    return () => {
      clearInterval(myInterval);
    }
  })
 return(
    <>
        <div className="bg-dark text-lg-start text-md-center"> 
            <div className="container">
                <p style={{color:"#3498db"}}>{today}</p>
            </div>   
        </div>
    </>
 )   
}
export default TimeDate;
//setInterval(function () {element.innerHTML += "Hello"}, 1000);