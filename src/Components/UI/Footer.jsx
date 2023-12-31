import React from "react";
import "../../Styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="foter_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>
              <h2>Fitfun</h2>
            </div>
            <p>
              Fuel your fitness journey with us! Our gym is committed to
              fostering a community of strength, health, and well-being. Join us
              in achieving your fitness goals and embrace a vibrant, active
              lifestyle.
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>

            <ul className="footer_links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>

            <ul className="footer_links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>

            <ul className="footer_links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright-{year} developed by waris. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
