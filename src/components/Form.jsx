import React from "react";
export default function Form(props){
    return(
        <div className="form--container">
        <div className="personal--navbar">
            <button className="tab--btn btn-clear">Clear Resume</button>
            <button className="tab--btn btn-load">Load Example</button>
            <button className="tab--btn btn-preview">Preview</button>
        </div>
        <div className="form personal--form">
                <h2 className="form--header-text">Personal Details</h2>
                <label htmlFor="fullName">Full Name</label>
                <input 
                type="text" 
                name="fullName" 
                className="form--fullName" 
                onChange={(event)=> props.handleChangeEvent(event)}
                value={props.formData.fullName}
                />
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                name="email" 
                className="form--email"
                onChange={(event)=> props.handleChangeEvent(event)}
                value={props.formData.email} 
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                type="text" 
                name="phoneNumber" 
                className="form--phoneNumber"
                value={props.formData.phoneNumber}
                onChange={(event)=> props.handleChangeEvent(event)}
                />
                <label htmlFor="address">Address</label>
                <input 
                type="text" 
                name="address" 
                className="form--address"
                value={props.formData.address}
                onChange={(event)=> props.handleChangeEvent(event)}
                />
        </div>
        {/* <div className="form education--form">
                <h2 className="form--header-text">Education Details</h2>
                <label htmlFor="college">College/Institute</label>
                <input type="text" name="college" className="form--college"  />
                <label htmlFor="degree">Degree/Certificate</label>
                <input type="text" name="degree" className="form--degree" />
                <label htmlFor="startDate">Start Date</label>
                <input type="text" name="startDate" className="form--startDate" />
                <label htmlFor="endDate">End date</label>
                <input type="text" name="endDate" className="form--endDate" />
        </div>
        <div className="form experience--form">
                <h2 className="form--header-text">Experience Details</h2>
                <label htmlFor="company">Company Name</label>
                <input type="text" name="company" className="form--company"  />
                <label htmlFor="position">Job Position/Role</label>
                <input type="text" name="position" className="form--position" />
                <label htmlFor="startDate">Start Date</label>
                <input type="text" name="startDate" className="form--startDate" />
                <label htmlFor="endDate">End date</label>
                <input type="text" name="endDate" className="form--endDate" />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" className="form--location" />
                <label htmlFor="jobDescription">Job Description</label>
                <textarea type="text" name="jobDescription" className="form--jobDescription" 
                maxLength={60} rows={4} 
                placeholder="Explain your role/work in your previous job (max-60 words)" />
        </div> */}
        </div>
        
    )
}