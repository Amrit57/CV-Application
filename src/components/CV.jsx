import React from "react";
import Icon from '@mdi/react';
import { mdiEmail, mdiPhone, mdiMapMarker } from '@mdi/js';
export default function CV({formData}) {

  
  return (
    <div className="cv--container">
       <header className="cv--header">
        <h1>{formData.fullName}</h1>
        <div className="cv--contact" >
        <Icon 
          path={mdiEmail} 
          size={1}
          className="cv--email-icon"
          /> 
        <p className="cv--email contact"> {formData.email} </p>
          <Icon path={mdiPhone} size={1} />
        <p className="cv--phoneNumber contact">{formData.phoneNumber}</p>
        <Icon path={mdiMapMarker} size={1} />
        <p className="cv--address contact">{formData.address}</p>
        </div>
      </header>
      <main className="cv--main">
        <section className="cv--education">
          <h2 className="cv--header-text">Education</h2>
          <div className="cv--education-detail">
          <div>
            <h4 className="cv--collegeName">{formData.college}</h4>
            <span className="cv--duration">{formData.startDate} - {formData.endDate}</span>
          </div>
          <div>
            <h4 className="cv--degreeName">{formData.degree}</h4>
          </div>
            </div>
        </section>
        <section className="cv--experience">
          <h2 className="cv--header-text">Professional Experience</h2>
          <div className="cv--experience-detail">

          <div>
            <h4 className="cv--companyName">{formData.company}</h4>
            <p className="cv--location">
              {formData.location}
            </p>
            <span className="cv--duration">{formData.companyStartDate} - {formData.companyEndDate}</span>
          </div>
          <div>
            <h4 className="cv--position">
            {formData.position}
            </h4>
            <p className="cv--job-description">
            {formData.jobDescription}
            </p>
          </div>
          </div>
          <div className="cv--experience-detail">

<div>
  <h4 className="cv--companyName">Xyz ABc Efgh  aldsjlaksn Company</h4>
  <p>location</p>
  <span className="cv--duration">2018/4/7 - 2022/10/8</span>
</div>
<div>
  <h4 className="cv--position">
    Front-End Developer
  </h4>
  <p className="cv--job-description">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Perspiciatis possimus ducimus esse nesciunt, omnis temporibus

  </p>
</div>
</div>
        </section>
      </main>
    </div>
  );
}
