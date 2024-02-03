import React from "react";

export default function DisplayForm({
  personalData,
  profilePic,
  expData,
  eduData,
}) {
  const expRender = expData.map((item, index) => {
    return (
      <div
        className={
          index === expData.length - 1
            ? "info-container"
            : "info-container bottom-line"
        }
        key={index}
      >
        <div className="left-side">
          <p className="bold">{item.companyName}</p>
          <p className="light">
            {item.startDate} - <span>{item.endDate}</span>
          </p>
        </div>
        <div className="right-side">
          <p className="bold">{item.position}</p>
          <p className="light">{item.description}</p>
        </div>
      </div>
    );
  });
  const eduRender = eduData.map((item, index) => {
    return (
      <div
        className={
          index === eduData.length - 1
            ? "info-container"
            : "info-container bottom-line"
        }
        key={index}
      >
        <div className="left-side">
          <p className="bold">{item.schoolName}</p>
          <p className="light">{item.country}</p>
        </div>
        <div className="right-side">
          <p className="bold">{item.degree}</p>
          <p className="light">
            {item.startDate} - <span>{item.endDate}</span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="displayForm">
      <section className="personal">
        <div className="title-container">
          <h1>{personalData.fullName}</h1>
          {profilePic ? (
            <img
              className="profilePic"
              src={profilePic}
              alt="Picture of Applicant"
            />
          ) : (
            <img
              style={
                personalData.showImage
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="profilePic"
              src={personalData.imgUrl}
              alt=""
            />
          )}
        </div>
        <div className="contact-details">
          <div className="c-detail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email-outline</title>
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
            <p className="email">{personalData.email}</p>
          </div>
          <div className="c-detail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone-outline</title>
              <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
            </svg>
            <p className="number">{personalData.phoneNumber}</p>
          </div>
          <div className="c-detail address-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>map-marker-outline</title>
              <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
            </svg>
            <p className="address">{personalData.address}</p>
          </div>
        </div>
        <p className="summary">{personalData.summary}</p>
      </section>
      <section className="exp">
        <h3 className="section-heading">Experience Details</h3>
        {expRender}
      </section>
      <section className="edu">
        <h3 className="section-heading">Education Details</h3>
        {eduRender}
      </section>
      <section>
        <h3 className="section-heading"> Certficates & References</h3>
          <img src="" alt="" />
      </section>
    </div>
  );
}
