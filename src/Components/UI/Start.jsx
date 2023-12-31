import React from "react";
import "../../Styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="start_content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section_title">
              Ready to make a <span className="highlight">change?</span>
            </h2>
            <p>
              Ready to make a change? Step into a transformative fitness
              experience at our gym. Whether you're aiming to build strength,
              boost endurance, or simply enhance your overall well-being, our
              dedicated team and cutting-edge facilities are here to support
              your journey.
            </p>
            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
