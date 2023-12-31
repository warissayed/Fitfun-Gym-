import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcone from "../../assets/img/dumble.png";
import "../../Styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero_wrapper">
          {/** ========== Hero Content ===========*/}
          <div className="hero_content">
            <h2
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Execrcise is the key to
              <span className="highlight">Healthy </span> Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              "Transforming Lives, One Rep at a Time: Your Fitness Journey
              Starts Here!"
            </p>
            <div
              className="hero_btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button
                className="register_btn"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Get Started
              </button>
              <button className="watch_btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          {/** ========== Hero Img ===========*/}
          <div className="hero_img">
            <div className="hero_img_wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box_img">
                      <img src={heroImg} alt="Gym Hero Img" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart_rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Hart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div
                className="gym_location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>
                  Find a new <br />
                  gym near You{" "}
                </h5>
              </div>
              <div
                className="dumble_icone"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumbleIcone} alt="Dumble Icone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
