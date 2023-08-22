import React from "react";
export default function CV({formData}) {
  return (
    <div className="cv--container">
      <header className="cv--header">
        <h1>{formData.fullName}</h1>
        <span className="cv--address">{formData.address}</span>
        <div className="cv--contact" >
        <p className="cv--phoneNumber">{formData.phoneNumber}</p>
        <p className="cv--email">{formData.email}</p>
        </div>
      </header>
      <main className="cv--main">
        <section className="cv--education">
          <h2 className="cv--header-text">Education</h2>
          <div className="cv--education-detail">
          <div>
            <h4 className="cv--collegeName">Hetauda Campus</h4>
            <span className="cv--duration">2016/4/6 - 2018/11/30</span>
          </div>
          <div>
            <h4 className="cv--degreeName">Bachelor in Computer Science</h4>
          </div>
            </div>
            <div className="cv--education-detail">
          <div>
            <h4 className="cv--collegeName">Hetauda Campus</h4>
            <span className="cv--duration">2016/4/6 - 2018/11/30</span>
          </div>
          <div>
            <h4 className="cv--degreeName">Bachelor in Computer Science</h4>
          </div>
            </div>
            
        </section>
        <section className="cv--experience">
          <h2 className="cv--header-text">Experience</h2>
          <div className="cv--experience-detail">

          <div>
            <h4 className="cv--companyName">Xyz Company</h4>
            <span className="cv--duration">2018/4/7 - 2022/10/8</span>
          </div>
          <div>
            <h4 className="cv--position">
              Front-End Developer
            </h4>
            <p className="cv--job-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis possimus ducimus esse nesciunt, omnis temporibus
              earum, necessitatibus sunt culpa obcaecati nostrum nemo nihil
              suscipit, fuga facilis eveniet? Soluta expedita asperiores eum
            </p>
          </div>
          </div>
          <div className="cv--experience-detail">

<div>
  <h4 className="cv--companyName">Xyz ABc Efgh  aldsjlaksn Company</h4>
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
