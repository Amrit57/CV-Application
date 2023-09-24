import React from "react";

export default function Personal({ data, handleChange }) {
  return (
    <section className="personal-info">
      <h2>Personal Details</h2>
      <label htmlFor="name">FullName</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={data.fullName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        value={data.phoneNumber}
        onChange={handleChange}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={data.address}
        onChange={handleChange}
      />
      <label htmlFor="summart">Summary</label>
      <textarea
        name="summary"
        id="summary"
        value={data.summary}
        cols="40"
        rows="4"
        maxLength={500}
        onChange={handleChange}
      />
    </section>
  );
}
