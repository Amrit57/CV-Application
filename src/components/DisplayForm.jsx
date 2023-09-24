import React from "react";

export default function DisplayForm({ personalData, expData, eduData }) {
  return (
    <div className="displayForm">
      <section className="personal">
        <h1>{personalData.fullName}</h1>
        <div className="contact-details">
          <p className="email">{personalData.email}</p>
          <p className="number">{personalData.phoneNumber}</p>
          <p className="address">{personalData.address}</p>
        </div>
        <p className="summary">{personalData.summary}</p>
      </section>
      <section className="exp"></section>
      <section className="edu"></section>
    </div>
  );
}
