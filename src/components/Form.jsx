import React, { useState } from "react";
import Personal from "./Personal";
import DisplayForm from "./DisplayForm";
import Navbar from "./Navbar";

export default function Form() {
  const [personalDatas, setPersonalDatas] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    summary: "",
  });
  const [expDatas, setExpDatas] = useState([
    {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [edudatas, setEduDatas] = useState([
    {
      schoolName: "",
      degree: "",
      country: "",
      startDate: "",
      endDate: "",
    },
  ]);
  function handleEduChange(index, e) {
    const { name, value } = e.target;
    const copy = [...edudatas];
    copy[index][name] = value;
    setEduDatas(copy);
  }
  function addEduInput() {
    const newfield = {
      schoolName: "",
      degree: "",
      country: "",
      startDate: "",
      endDate: "",
    };
    setEduDatas([...edudatas, newfield]);
  }
  function handleExpChange(index, e) {
    const { name, value } = e.target;
    const copy = [...expDatas];
    copy[index][name] = value;
    setExpDatas(copy);
  }
  function addExpInput() {
    const newField = {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExpDatas([...expDatas, newField]);
  }
  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalDatas({ ...personalDatas, [name]: value });
  }
  function handleExpDelete(index) {
    const copyData = [...expDatas];
    copyData.splice(index, 1);
    setExpDatas(copyData);
  }
  function handleEduDelete(index) {
    const copyEdu = [...edudatas];
    copyEdu.splice(index, 1);
    setEduDatas(copyEdu);
  }
  function handleClearResume() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setPersonalDatas({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      summary: "",
    });
    setEduDatas([
      {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setExpDatas([
      {
        schoolName: "",
        degree: "",
        country: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }


  return (
    <>
      <Navbar clearResume={handleClearResume} />
      <div className="main">
        <div className="form-container">
          <Personal data={personalDatas} handleChange={handlePersonalChange} />
          <section className="experience-info">
            <h2>Experience Details</h2>
            {expDatas.map((data, index) => {
              return (
                <div key={index} id={index} className="experience-container">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={data.companyName}
                    onChange={(e) => handleExpChange(index, e)}
                  />
                  <label htmlFor="position">Position/Title</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={data.position}
                    onChange={(e) => handleExpChange(index, e)}
                  />
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="text"
                    id="startDate"
                    name="startDate"
                    value={data.startDate}
                    onChange={(e) => handleExpChange(index, e)}
                  />
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="text"
                    id="endDate"
                    name="endDate"
                    value={data.endDate}
                    onChange={(e) => handleExpChange(index, e)}
                  />
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={(e) => handleExpChange(index, e)}
                  />
                  <div className="btns">
                    <button
                      className="btn btn-delete"
                      onClick={() => handleExpDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            <button className="btn btn-add" onClick={addExpInput}>
              Add
            </button>
          </section>
          <section className="education-info">
            <h2>Education Details</h2>
            {edudatas.map((eduData, index) => {
              return (
                <div key={index} id={index} className="education-container">
                  <label htmlFor="school">School</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={eduData.schoolName}
                    onChange={(e) => handleEduChange(index, e)}
                  />
                  <label htmlFor="degree">Degree</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={eduData.degree}
                    onChange={(e) => handleEduChange(index, e)}
                  />
                  <label htmlFor="degree">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={eduData.country}
                    onChange={(e) => handleEduChange(index, e)}
                  />
                  <label htmlFor="schoolStartDate">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={eduData.startDate}
                    onChange={(e) => handleEduChange(index, e)}
                  />
                  <label htmlFor="schoolEndDate">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={eduData.endDate}
                    onChange={(e) => handleEduChange(index, e)}
                  />
                  <div className="btns">
                    <button
                      className="btn btn-delete"
                      onClick={() => handleEduDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            <button className="btn btn-add" onClick={addEduInput}>
              Add
            </button>
          </section>
        </div>
        <DisplayForm
          personalData={personalDatas}
          expData={expDatas}
          eduData={edudatas}
        />
      </div>
    </>
  );
}
