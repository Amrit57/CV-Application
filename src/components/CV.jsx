import React from "react";
export default function CV() {
  return (
    <div className="cv-container">
      <header>
        <h1>Amrit Lama Syangbo</h1>
        <p className="cv--email">abcd@gmail.com</p>
        <p className="cv--phoneNumber">12478498616</p>
        <p className="cv--address">JeetpurSimara-22, Nepal</p>
      </header>
      <main>
        <section className="cv--personal">
          <h2 className="cv--header-text">Education</h2>
          <div>
            <h4 className="cv--collegeName">Hetauda Campus</h4>
            <p className="duration">2016/4/6 - 2018/11/30</p>
          </div>
          <div>
            <h4 className="cv--degreeName">Bachelor in Computer Science</h4>
          </div>
        </section>
        <section className="cv--experience">
          <div>
            <h4 className="cv--companyName">Xyz Company</h4>
            <h4 className="cv--position">
              <i>Front-End Developer</i>
            </h4>
            <p className="cv--duration">2018/4/7 - 2022/10/8</p>
          </div>
          <div>
            <p className="job-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis possimus ducimus esse nesciunt, omnis temporibus
              earum, necessitatibus sunt culpa obcaecati nostrum nemo nihil
              suscipit, fuga facilis eveniet? Soluta expedita asperiores eum
              atque earum alias officia nobis voluptatum, iure inventore
              perferendis consequatur voluptas rerum labore, doloribus minima
              necessitatibus non, ducimus dolorem cumque amet obcaecati. Eius
              sequi nisi a repellendus reiciendis necessitatibus!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
