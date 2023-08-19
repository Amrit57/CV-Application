import React, { useState }  from "react";
export default function Form(){

    // const [formData, setFormData] = useState({
    //     fullName:fullName,


    // })

    return(
        <div className="form--container">
        <div className="personal--navbar">
            <button className="tab--btn btn-clear">Clear Resume</button>
            <button className="tab--btn btn-load">Load Example</button>
            <button className="tab--btn btn-preview">Preview</button>
        </div>
        <div className="personal--form">
                <h2 className="form--header-text">Personal Details</h2>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" className="form--fullName"  />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="form--email" />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" className="form--phoneNumber" />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" className="form--address" />
        </div>
        </div>
        
    )
}