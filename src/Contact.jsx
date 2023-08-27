import React, { useState } from "react";

const Contact = () =>{
    const [data, setdata] = useState({
        yourname:'',
        email:'',
        phone:'',
        subject:'',
        massage:'',

    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setdata((preVal) =>{
            return{
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert("success");
    };
   
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>   
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="Yourname" className="form-label">Your Name</label>
                                <input name="yourname" onChange={InputEvent} value={data.yourname} type="text" className="form-control" id="Yourname" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="Email" className="form-label">Email</label>
                                <input name="email" onChange={InputEvent} value={data.email} type="email" className="form-control" id="Email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-check-label" for="Phone">Phone</label>
                                <input name="phone" onChange={InputEvent} value={data.phone} type="number" className="form-control" id="Phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-check-label" for="Subject">Subject</label>
                                <input name="subject" onChange={InputEvent} value={data.subject} type="text" className="form-control" id="Subject" />
                            </div>
                            <div className="mb-3">
                                <label className="form-check-label" for="Message">Message</label>
                                <textarea name="massage" onChange={InputEvent} value={data.massage} type="text" rows={3} className="form-control" id="Message"/>
                            </div>
                            <div className="col-12 mb-5">
                                <button  type="submit" className="btn btn-outline-primary">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;