import React from "react";
export default function Personal({
  data,
  imageFile,
  handleImageChange,
  handleChange,
  removeImage
}) {
  return (
    <section className="personal-info">
      <h2>Personal Details</h2>
      <label htmlFor="name">FullName</label>
      <input
        type="text"
        name="fullName"
        placeholder="Enter first and last name (recommended)"
        value={data.fullName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email (recommended)"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Enter phone number (recommended)"
        value={data.phoneNumber}
        onChange={handleChange}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        placeholder="Enter your address"
        value={data.address}
        onChange={handleChange}
      />
      <label htmlFor="summary">Summary</label>
      <textarea
        name="summary"
        placeholder="Write a brief summary about yourself. / What is the one thing that makes you stand out?"
        value={data.summary}
        cols="40"
        rows="4"
        maxLength={500}
        onChange={handleChange}
      />
      <label htmlFor="image">Upload Profile Photo</label>
      <div className="ImageInputContainer">
        <input className="profileInput" type="file" ref={imageFile} onChange={handleImageChange} />
        <button className="btn-remove btn-delete" onClick={removeImage}>X</button>
      </div>
    </section>
  );
}
