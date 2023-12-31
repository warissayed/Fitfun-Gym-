import React from "react";
import "../../Styles/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">
            Gym <span className="highlight">Pricing</span> Plan
          </h2>
          <p>
            Elevate your fitness journey with our flexible gym subscription
            options. We understand that everyone's <br /> path to wellness is
            unique, which is why we offer customizable plans tailored to your
            goals and lifestyle.
          </p>
        </div>
        {/**===============pricing ========= */}
        <div className="pricing_wrapper">
          <div
            className="pricing_item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing_card_top">
              <h2 className="section_title">Regular Member</h2>
              <h2 className="pricing">
                $50 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Unlimited
                    access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Customer
                    Support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Personal
                    trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Standard
                    options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>
              <button className="register_btn">Joind Now</button>
            </div>
          </div>

          <div
            className="pricing_item pricing_item_02"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="pricing_card_top">
              <h2 className="section_title"> Premium Member</h2>
              <h2 className="pricing">
                $70 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Unlimited
                    access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Customer
                    Support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Personal
                    trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Standard
                    options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>

              <button className="register_btn">Joind Now</button>
            </div>
          </div>

          <div
            className="pricing_item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing_card_top">
              <h2 className="section_title">Standard Member</h2>
              <h2 className="pricing">
                $100 <span>/Month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Unlimited
                    access to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Customer
                    Support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Personal
                    trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>Standard
                    options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>

              <button className="register_btn">Joind Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
