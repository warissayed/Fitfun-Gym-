import React from "react";
import "../../Styles/exerciese.css";
import lungesImg from "../../assets/img/lunges.png";
import extended from "../../assets/img/extended.png";
import yogaPoseImg from "../../assets/img/yoga-pose.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benefits of <span className="highlight">Excercise</span>
          </h2>
          <p>
            "Discover the joy of fitness at our gym! Whether you're a beginner
            or a seasoned pro,
            <br /> our expert trainers and top-notch equipment are here to
            elevate your workout experience.
          </p>
        </div>
        {/**Exercise list */}
        <div className="exercise_wrapper">
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icone">
              <img src={lungesImg} alt="" />
            </span>
            <div className="exercise_content">
              <h4>Healty Life</h4>
              <p>Prioritize your well-being with holistic approach</p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icone">
              <img src={yogaPoseImg} alt="" />
            </span>
            <div className="exercise_content">
              <h4>Increased Flexibility</h4>
              <p>Prioritize your well-being with holistic approach</p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icone">
              <img src={extended} alt="" />
            </span>
            <div className="exercise_content">
              <h4>Reducing Blood Pressure</h4>
              <p>Prioritize your well-being with holistic approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
