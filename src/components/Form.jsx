import React from "react";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
export default function Form(props) {
    const [dropdown, setDropDown] = React.useState(false)
    function toggleEducationMenu(){
        setDropDown( prevValue => !prevValue)
    }
    const [dropdownExp, setDropDownExperience] = React.useState(false)
    function toggleExperienceMenu(){
        setDropDownExperience( prevValue => !prevValue)
    }

  return (
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
          onChange={(event) => props.handleChangeEvent(event)}
          value={props.formData.fullName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="form--email"
          onChange={(event) => props.handleChangeEvent(event)}
          value={props.formData.email}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form--phoneNumber"
          value={props.formData.phoneNumber}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          className="form--address"
          value={props.formData.address}
          onChange={(event) => props.handleChangeEvent(event)}
        />
      </div>
      <div className="form education--form">
        <div className="education--form-header"  onClick={toggleEducationMenu} >
        <h2 className="form--header-text">Education Details</h2>
        {
        dropdown ? 
         <Icon className="menuIcon menuDonw" path={mdiMenuDown} size={1} /> 
        : <Icon className="menuIcon menuUp" path={mdiMenuUp} size={1} /> }
         
        </div>
            <div  style={{display: dropdown ? "block" : "none"}}>
                <div className="toggle-menu">

                <label htmlFor="college">College/Institute</label>
                <input
                type="text"
                name="college"
                className="form--college"
                onChange={(event) => props.handleChangeEvent(event)}
                value={props.formData.college}
                />
                <label htmlFor="degree">Degree/Certificate</label>
                <input
                type="text"
                name="degree"
                className="form--degree"
                onChange={(event) => props.handleChangeEvent(event)}
                value={props.formData.degree}
                />
                <label htmlFor="startDate">Start Date</label>
                <input
                type="text"
                name="startDate"
                className="form--startDate"
                onChange={(event) => props.handleChangeEvent(event)}
                value={props.formData.startDate}
                />
                <label htmlFor="endDate">End date</label>
                <input
                type="text"
                name="endDate"
                className="form--endDate"
                onChange={(event) => props.handleChangeEvent(event)}
                value={props.formData.endDate}
                />
                </div>
        </div>
      </div>
      <div className="form experience--form">
      <div className="education--form-header"  onClick={toggleExperienceMenu} >
        <h2 className="form--header-text">Experience Details</h2>
        {
        dropdownExp ? 
         <Icon className="menuIcon menuDonw" path={mdiMenuDown} size={1} /> 
        : <Icon className="menuIcon menuUp" path={mdiMenuUp} size={1} /> }
        </div>
        <div  style={{display: dropdownExp ? "block" : "none"}}>
            <div className="toggle-menu">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          className="form--company"
          value={props.formData.company}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="position">Job Position/Role</label>
        <input
          type="text"
          name="position"
          className="form--position"
          value={props.formData.position}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          name="companyStartDate"
          className="form--startDate"
          value={props.formData.companyStartDate}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="endDate">End date</label>
        <input
          type="text"
          name="companyEndDate"
          className="form--endDate"
          value={props.formData.companyEndDate}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          className="form--location"
          value={props.formData.location}
          onChange={(event) => props.handleChangeEvent(event)}
        />
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          type="text"
          name="jobDescription"
          className="form--jobDescription"
          maxLength={200}
          rows={4}
          placeholder="Explain your role/work in your previous job (max-200 character)"
          value={props.formData.jobDescription}
          onChange={(event) => props.handleChangeEvent(event)}
        />
            </div>
        </div>
      </div>
    </div>
  );
}
